import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
        />
      </div>
    )
  }
}

export default App
