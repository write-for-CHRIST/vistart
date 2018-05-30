import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {Context} from '../../utils'

//#region Interfaces
interface IDefaultPwdParams {
  email: string
  salt: string
}
//#endregion

//#region Functions
const getDefaultPwd = ({email, salt}: IDefaultPwdParams) => {
  return `${email}+${salt}`
}
const generateToken = ({user}) => {
  return jwt.sign({userId: user.id}, process.env.APP_SECRET)
}
const getAuthData = ({user}) => ({token: generateToken({user}), user})
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

  async authFacebook(parent, {facebook, email, name, picture, accessToken}, ctx: Context, info) {
    // Check if a user with this facebook id already existed
    const existedFBUser = await ctx.db.query.user({where: {facebook}})
    if (existedFBUser) {
      return getAuthData({user: existedFBUser})
    } else {
      // Link with local account
      const existedLocalUser = await ctx.db.query.user({where: {email}})
      if (existedLocalUser) {
        const updatedUser = await ctx.db.mutation.updateUser({where: {email}, data: {facebook}})
        return getAuthData({user: existedLocalUser})
      } else {
        // Create new account
        const initPassword = email + facebook
        const password = await bcrypt.hash(initPassword, 10)
        const user = await ctx.db.mutation.createUser({
          data: {facebook, email, profile: {create: {name, picture}}, password},
        })
        return getAuthData({user})
      }
    }
  },
}
