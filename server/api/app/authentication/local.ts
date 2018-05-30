import passport from 'passport'
import {IVerifyOptions} from 'passport-local'
import {Request, Response, NextFunction} from 'express'
import expressValidator = require('express-validator')
import {loginLocal} from '../graph'

/**
 * POST /auth/local
 * @param req
 * @param res
 * @param next
 */
export const login = (req: Request, res: Response, next: NextFunction) => {
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('password', 'Password cannot be blank').notEmpty()
  req.sanitize('email').normalizeEmail({gmail_remove_dots: false})

  const errors = req.validationErrors()

  if (errors) {
    console.error(errors)
    res.json({errors})
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      res.json({error: err}) 
    }
    res.json({success: true, user, info})
  })(req, res, next)
}
