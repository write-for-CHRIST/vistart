import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import {
  Strategy as FacebookStrategy,
  StrategyOptionWithRequest,
  VerifyFunctionWithRequest,
} from 'passport-facebook'

import {FACEBOOK_APP_ID, FACEBOOK_APP_SECRET} from '../../config'
import {loginLocal, authFacebook} from '../graph'
import {User} from './user.model'

const combineName = ({last, first, middle}: any) => {
  return `${last} ${middle} ${first}`
}

const initLocal = () => {
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
}

const initFacebook = () => {
  const options: StrategyOptionWithRequest = {
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['name', 'email', 'picture'],
    passReqToCallback: true,
  }

  const verify: VerifyFunctionWithRequest = async (
    req,
    accessToken,
    refreshToken,
    profile,
    done,
  ) => {
    const {email, id: facebook, last_name, first_name, middle_name, picture} = profile._json
    console.log(last_name, middle_name, first_name)
    const name = combineName({last: last_name, first: first_name, middle: middle_name})
    // console.log(JSON.stringify(profile, null, 2))
    console.log(name)
    try {
      const user = await authFacebook({email, facebook, name, picture, accessToken})
      done(null, user)
    } catch (err) {
      done(err)
    }
  }

  passport.use(new FacebookStrategy(options, verify))
}

export const init = () => {
  initLocal()
  initFacebook()
  console.log('User initialized!')
}
