//#region Library Import
import express, {Request, Response} from 'express'
import passport from 'passport'
import compression from 'compression'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
//#endregion

import {PORT} from '../config'

//#region Import Features
import * as feature1 from './feature1'
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
app.get('/', (req, res) => {
  res.send(`Microservice works!`)
})
app.get('/feature1', feature1.helloWorld)
//#endregion

export default app
