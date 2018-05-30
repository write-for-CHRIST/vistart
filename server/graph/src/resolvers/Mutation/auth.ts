import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {Context} from '../../utils'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const {email, name} = args
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: {email, password, profile: {create: {name}}},
    })

    return {
      token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
      user,
    }
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

    return {
      token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
      user,
    }
  },

  async authFacebook(parent, {facebook, email, name, picture}, ctx: Context, info) {
    const initPassword = email + facebook
    const password = await bcrypt.hash(initPassword, 10)
    const user = await ctx.db.mutation.createUser({
      data: {facebook, email, profile: {create: {name, picture}}, password},
    })
    return {
      token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
      user,
    }
  },
}
