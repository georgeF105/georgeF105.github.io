import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App'
import Projects from './containers/ProjectsContainer'
import Home from './Home'
import Resume from './Resume'
import Contact from './Contact'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
)
