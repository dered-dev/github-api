import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Home from './Views/Home'
import RepoDetail from './Views/RepoDetail'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authorization: ''
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <div className='container'>
            <Switch>
              <Route
                path='/'
                component={Home}
                exact
              />
              <Route
                path='/repo-detail/:name'
                component={RepoDetail}
                exact
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
