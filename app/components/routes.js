import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Projects from './Projects'
import Home from './Home'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/projects' component={Projects} />
    </Route>
  </Router>
)
