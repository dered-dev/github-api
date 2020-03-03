import React, { Component } from 'react'

import Home from './Views/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authorization: ''
    }
  }

  render () {
    return (
      <div className='app'>
        <div className='container'>
          <Home />
        </div>
      </div>
    )
  }
}

export default App
