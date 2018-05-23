import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Auth from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Auth
      email="admin@phuc.am"
      password="nooneknows"
      onLogin={isAuthenticating => console.log(`Authenticating: ${isAuthenticating}`)}
      render={auth => (
        <form>
          <input type="email" value={auth.email} onChange={auth.updateEmail} />
          <input type="password" value={auth.password} onChange={auth.updatePassword} />
          <hr />
          <button type="button" onClick={auth.reset}>
            Reset
          </button>
          <button type="button" onClick={auth.login}>
            Login
          </button>
        </form>
      )}
    />,
    div,
  )

  ReactDOM.unmountComponentAtNode(div)
})
