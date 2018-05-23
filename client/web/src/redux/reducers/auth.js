import {EMAIL_LOGIN} from '../actions/auth'

export default (state = {}, action) => {
  switch (action.type) {
    case EMAIL_LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    default:
      return state
  }
}
