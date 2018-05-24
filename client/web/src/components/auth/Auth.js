// eslint-disable-next-line
import ReactDom from 'react-dom'
// eslint-disable-next-line
import ReactRedux from 'react-redux'
// eslint-disable-next-line
import Redux from 'redux'
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

const defaultAuth = async values => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rate = Math.random()
      const success = rate < 0.5
      success ? resolve(values) : reject(rate)
    }, 2000)
  })
}

class AuthFormContainer extends Component {
  static defaultProps = {
    authenticate: defaultAuth,
    onAuthenticating: is => {
      console.log(`Authenticating: ${is}`)
    },
    onSuccess: payload => {
      console.log(`Authenticate success: ${JSON.stringify(payload)}`)
    },
    onFail: err => {
      console.error(`Authenticate error: ${JSON.stringify(err)}`)
    },
  }

  initialState = {
    authenticating: false,
    authenticated: false,
  }
  state = this.initialState

  authenticating = authenticating =>
    this.setState({authenticating}, () => {
      this.props.onAuthenticating(authenticating)
    })

  success = payload =>
    this.setState({authenticated: true}, () => {
      this.authenticating(false)
      this.props.onSuccess(payload)
    })

  fail = err =>
    this.setState({authenticated: false}, () => {
      this.authenticating(false)
      this.props.onFail(err)
    })

  login = async values => {
    this.authenticating(true)
    try {
      const payload = await this.props.authenticate(values)
      this.success(payload)
    } catch (err) {
      this.fail(err)
    }
  }

  render() {
    return this.props.render({
      login: this.login,
      authenticating: this.state.authenticating,
      authenticated: this.state.authenticated,
    })
  }
}

class AuthForm extends Component {
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field name="email" component="input" type="email" label="Email" />
        <Field name="password" component="input" type="password" label="Password" />
        <button type="submit">Login</button>
      </form>
    )
  }
}

AuthForm = reduxForm({form: 'auth'})(AuthForm)

/**
 * @render react
 * @name Auth
 * @description A redux connected authentication form.
 * @example
 * <Auth 
 *  onSuccess={(values) => {window.alert(`Success: ${JSON.stringify(values)}`)}}
 *  onFail={(err) => {window.alert(`Fail: ${err}`)}}
 * />
 */
const Auth = props => (
  <AuthFormContainer {...props} render={auth => <AuthForm onSubmit={auth.login} />} />
)

export default Auth
