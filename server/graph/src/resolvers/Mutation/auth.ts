import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {GraphQLResolveInfo} from 'graphql'
import {
  AuthProvider,
  Prisma,
  ProfileCreateOneWithoutUserInput,
  ProfileCreateWithoutUserInput,
  User,
  UserCreateWithoutPostsInput,
  UserWhereUniqueInput,
} from '../../generated/prisma'
import {Context} from '../../utils'

const FACEBOOK_PROVIDER = 'FACEBOOK'
const GOOGLE_PROVIDER = 'GOOGLE'

//#region Interfaces
interface IDefaultPwdParams {
  email: string
  salt: string
}
interface IDatabase {
  db: Prisma
}
interface IProviderPayload {
  id: string
  accessToken: string
}
interface IFacebookPayload extends IProviderPayload {
  email: string
  name: string
  picture: string
}
interface IFindUserParams extends IDatabase {
  where: UserWhereUniqueInput
}
interface ILinkParams extends IDatabase {
  user: User
  payload: IProviderPayload
}
interface ILinkProviderParams extends IDatabase {
  user: User
  provider: AuthProvider
  payload: IProviderPayload
}
interface ICreateProviderParams extends IDatabase {
  provider: AuthProvider
  payload: IFacebookPayload
}
//#endregion

//#region Non-data Functions
const hashPassword = async (pwd: string) => await bcrypt.hash(pwd, 10)
const getDefaultPwd = ({email, salt}: IDefaultPwdParams) => `${email}+${salt}`
const getAuthData = ({user}) => ({token: generateJWT({user}), user})
const generateJWT = ({user}) => jwt.sign({userId: user.id}, process.env.APP_SECRET)
const buildProfile = (
  profile: ProfileCreateWithoutUserInput,
): ProfileCreateOneWithoutUserInput => ({create: {...profile}})
//#endregion

//#region Binding Functions
const findUser = async ({db: {query}, where}: IFindUserParams): Promise<User | null> =>
  query.user({where})

const linkUserWithFacebook = ({
  db: {
    mutation: {updateUser},
  },
  user: {email},
  payload: {id: facebook, accessToken},
}: ILinkParams): Promise<User | null> => {
  const create = {kind: <AuthProvider>FACEBOOK_PROVIDER, accessToken}
  const where = {email}
  const data = {facebook, tokens: {create}}
  return updateUser({where, data})
}

const createUserWithFacebook = async ({
  db: {
    mutation: {createUser},
  },
  payload: {id: facebook, name, email, picture, accessToken},
  provider,
}: ICreateProviderParams) => {
  const newUser: UserCreateWithoutPostsInput = {
    email,
    password: await hashPassword(getDefaultPwd({email, salt: facebook})),
    profile: buildProfile({name, picture}),
    tokens: {create: [{kind: FACEBOOK_PROVIDER, accessToken}]},
  }
  return createUser({data: newUser})
}

const linkUserWithGoogle = async ({
  db: {mutation},
  user,
  payload,
}: ILinkParams): Promise<User | null> => {
  return null
}

const linkProvider = ({db, user, payload, provider}: ILinkProviderParams): Promise<User | null> => {
  const linkParams: ILinkParams = {db, user, payload}
  switch (provider) {
    case FACEBOOK_PROVIDER:
      return linkUserWithFacebook(linkParams)
    case GOOGLE_PROVIDER:
      return linkUserWithGoogle(linkParams)
    default:
      return null
  }
}

const newProvider = ({db, provider, payload}: ICreateProviderParams): Promise<User | null> => {
  const createParams = {db, provider, payload}
  switch (provider) {
    case FACEBOOK_PROVIDER:
      return createUserWithFacebook(createParams)
    default:
      return null
  }
}
//#endregion

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const {email, name} = args
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: {email, password, profile: {create: {name}}},
    })

    return getAuthData({user})
  },

  async login(parent, {email, password}, ctx: Context, info) {
    const user = await ctx.db.query.user({where: {email}})
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return getAuthData({user})
  },

  async authFacebook(parent, args, {db}: Context, info) {
    const provider = FACEBOOK_PROVIDER
    const {facebook, email, name, picture, accessToken} = args
    const payload: IFacebookPayload = {id: facebook, ...args}
    // Check if a user with this facebook id already existed
    let user = null
    const existedFBUser = await findUser({db, where: {facebook}})
    if (existedFBUser) {
      user = existedFBUser
    } else {
      // Link with local account
      const localUser = await findUser({db, where: {email}})
      if (localUser) {
        const linkedUser = await linkProvider({db, user: localUser, payload, provider})
        user = linkedUser
      } else {
        // Create new account
        const createdUser = await newProvider({db, payload, provider})
        user = createdUser
      }
    }
    return getAuthData({user})
  },
}
