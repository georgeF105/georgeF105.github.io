import React, { Component } from 'react'

import Header from './Header'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Header />
        <h1>Welcome to my App</h1>
      </main>
    )
  }

}

export default App
