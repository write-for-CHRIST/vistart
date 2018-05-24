/* eslint-disable */
import ReactDom from 'react-dom'
import ReactRedux from 'react-redux'
import Redux from 'redux'
/* eslint-enable */
import React, {Component, Fragment} from 'react'
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

class FormWrapper extends Component {
  static defaultProps = {
    onSubmit: () => {},
  }

  submit = values => {
    this.props.onSubmit(values)
  }

  render() {
    return this.props.render({
      submit: this.submit,
    })
  }
}

class AuthForm extends Component {
  static defaultProps = {
    emailComp: 'input',
    pwdComp: 'input',
    submitComp: () => {}
  }
  render() {
    const {handleSubmit, emailComp, pwdComp, submitComp} = this.props
    return (
      <FormWrapper
        onSubmit={handleSubmit}
        render={({submit}) => (
          <Fragment>
            <Field name="email" component={emailComp} type="email" label="Email" />
            <Field name="password" component={pwdComp} type="password" label="Password" />
            {submitComp(submit)}
          </Fragment>
        )}
      />
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
  <AuthFormContainer {...props} render={auth => <AuthForm submitComp={props.submitComp} onSubmit={auth.login} />} />
)

export default Auth
