import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './app/reducer'
import routes from './app/components/routes'

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
