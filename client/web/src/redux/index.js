import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const AppProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

export {store, rootReducer, AppProvider}
