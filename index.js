import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './app/reducer'
import routes from './app/components/routes'

const store = createStore(
  reducer
)

render((
  <Provider store={store}>
    <div id='main'>
      {routes}
    </div>
  </Provider>
  ), document.getElementById('app'))
