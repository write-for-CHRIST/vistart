import passport from 'passport'
import {Request, Response} from 'express'

const scope = ['email', 'public_profile']
const failureRedirect = '/login'

export const authFacebook = (...args: any[]) => {
  passport.authenticate('facebook', {scope})(...args)
}

export const authFacebookCallback = passport.authenticate(
  'facebook',
  {failureRedirect},
  (req: Request, res: Response) => {
    res.redirect('/login')
  },
)
