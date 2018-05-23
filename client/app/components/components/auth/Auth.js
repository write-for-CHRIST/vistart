import React, {Component} from 'react'
import ReactDom from 'react-dom'

/**
 * @render react
 * @name Auth
 * @description Authentication form.
 * @example
 * <Auth email="admin@phuc.am"
 *      password="nooneknows"
 *      onLogin={isAuthenticating => console.log(`Authenticating: ${isAuthenticating}`)}
 *      render={auth => (
 *        <form>
 *          <input type="email" value={auth.email} onChange={auth.updateEmail} />
 *          <input type="password" value={auth.password} onChange={auth.updatePassword} />
 *          <hr />
 *          <button type="button" onClick={auth.reset}>
 *            Reset
 *          </button>
 *          <button type="button" onClick={auth.login}>
 *            Login
 *          </button>
 *        </form>
 *      )}>
 * </Auth>
 */
class Auth extends Component {
  static defaultProps = {
    email: '',
    password: '',
    isAuthenticating: false,
    onLogin: () => {},
  }

  initialState = {
    email: this.props.email,
    password: this.props.password,
    isAuthenticating: this.props.isAuthenticating,
  }

  state = this.initialState

  reset = () => this.setState(this.initialState)
  login = () =>
    this.setState(
      ({isAuthenticating}) => ({isAuthenticating: !isAuthenticating}),
      () => this.props.onLogin(this.state.isAuthenticating),
    )
  updateEmail = event => this.setState({email: event.target.value})
  updatePassword = event => this.setState({password: event.target.value})

  getAuthProps = ({...props} = {}) => ({
    ...props,
  })

  render() {
    return this.props.render({
      email: this.state.email,
      password: this.state.password,
      isAuthenticating: this.state.isAuthenticating,
      reset: this.reset,
      login: this.login,
      updateEmail: this.updateEmail,
      updatePassword: this.updatePassword,
      getAuthProps: this.getAuthProps,
    })
  }
}

export default Auth
