import {reducer as formReducers} from 'redux-form'
import {combineReducers} from 'redux'
import auth from './auth'

export default combineReducers({form: formReducers, ...auth})
