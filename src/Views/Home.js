import React, { Component } from 'react'

import ReposList from '../Components/ReposList'
import AppLoading from '../Components/AppLoading'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      repos: []
    }
  }

  async componentDidMount () {
    const response = await window.fetch('https://api.github.com/users/kodemia/repos')
    const repos = await response.json()

    this.setState({
      repos: repos,
      loading: false
    })
    console.log(this.state.repos)
  }

  componentDidUpdate () {
    console.log('cuando ya se actualizó el componente')
  }

  componentWillDestroy () {
    console.log('Se murió componente')
  }

  render () {
    if (this.state.loading) return <AppLoading />
    return (
      <ReposList
        list={this.state.repos}
      />
    )
  }
}

export default Home
