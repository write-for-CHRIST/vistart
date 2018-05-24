import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/auth'
import {AppProvider} from './redux'

class App extends Component {
  handleSuccess = data => {
    console.log('data', data)
    window.alert(data)
  }
  render() {
    return (
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Auth
            onSuccess={this.handleSuccess}
            submitComp={submit => <button onClick={submit}>Submit</button>}
          />
        </div>
      </AppProvider>
    )
  }
}

export default App
