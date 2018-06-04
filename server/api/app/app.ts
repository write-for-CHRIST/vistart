//#region Library Import
import express, {Request, Response} from 'express'
import passport from 'passport'
import compression from 'compression'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
//#endregion

import {PORT} from '../config'

//#region Import Features
import * as userFeatures from './user'
import * as authentication from './authentication'
//#endregion

//#region App Initialization
const app = express()
//#endregion

//#region Express Configuration
app.set('port', PORT)

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())
app.use(passport.initialize())
app.use(passport.session())
//#endregion

//#region Express Routes
userFeatures.init()
app.get('/', (req, res) => {
  res.send(`API works!`)
})
app.get('/login', (req, res) => {
  res.redirect('http://localhost:3000')
})
app.post('/auth/local', authentication.login)
app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'public_profile']}))
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
  (req: Request, res: Response) => {
    console.log(req)
    res.redirect('/login')
  },
)
//#endregion

export default app
