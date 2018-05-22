import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Auth from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Auth header={'Authentication'} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
