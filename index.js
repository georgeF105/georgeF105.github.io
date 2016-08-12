import React from 'react'
import { render } from 'react-dom'

import routes from './app/components/routes'

render((
  <div id='main'>
    { routes }
  </div>
  ), document.getElementById('app'))
