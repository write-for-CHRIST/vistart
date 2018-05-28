import passport from 'passport'

passport.serializeUser((user: any, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  done(null, null)
})