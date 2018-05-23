import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

const AppProvider = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export {store, rootReducer, AppProvider}
