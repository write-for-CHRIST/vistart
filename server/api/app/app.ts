//#region Library Import
import express from 'express'
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
app.post('/auth/local', authentication.login)
userFeatures.init()
//#endregion

export default app
