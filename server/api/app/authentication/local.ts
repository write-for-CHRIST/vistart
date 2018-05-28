import {IVerifyOptions} from 'passport-local'
import {Request, Response, NextFunction} from 'express'
import expressValidator = require('express-validator')

/**
 * Get /login
 * @param req Request
 * @param res Response
 */
export const getLogin = (req: Request, res: Response) => {
  if (req.user) {
    return res.redirect('/')
  }
  res.render('account/login', {title: 'Login'})
}

export const postLogin = (req: Request, res: Response, next: NextFunction) => {
  req.assert('email', 'Email is not valid').isEmail()
  req.assert('password', 'Password cannot be blank').notEmpty()
  req.sanitize('email').normalizeEmail({gmail_remove_dots: false})

  const errors = req.validationErrors()

  if (errors) {
  }
}
