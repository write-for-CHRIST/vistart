import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import {Strategy as FacebookStrategy} from 'passport-facebook'

import {loginLocal} from '../graph'
import {User} from './user.model'

export const init = () => {
  passport.serializeUser<User, any>((user, done) => {
    done(undefined, user.id)
  })

  passport.deserializeUser<User, any>((id, done) => {})

  passport.use(
    new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
      try {
        const user = await loginLocal({email, password})
        if (!user) {
          return done(undefined, false, {message: `Email ${email} not found.`})
        }
        return done(undefined, user)
      } catch (err) {
        done(err)
      }
    }),
  )
  console.log('User initialized!')
}
