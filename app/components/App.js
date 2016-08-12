import React, { Component } from 'react'

import Header from './Header'
import Projects from './Projects'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Header />
        <Projects />
      </main>
    )
  }

}

export default App
