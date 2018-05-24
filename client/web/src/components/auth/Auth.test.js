import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AppProvider} from '../../redux'
import Auth from '.'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <AppProvider>
      <Auth
        onSuccess={values => {
          window.alert(`Success: ${JSON.stringify(values)}`)
        }}
        onFail={err => {
          window.alert(`Fail: ${err}`)
        }}
      />
    </AppProvider>,
    div,
  )

  ReactDOM.unmountComponentAtNode(div)
})
