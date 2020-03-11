import React, { useState, useEffect } from 'react'

import ReposList from '../Components/ReposList'
import AppLoading from '../Components/AppLoading'
import api from '../lib/api'

function Home () {
  // set initial state
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRepos () {
      const repos = await api.getRepos()
      setRepos(repos)
      setLoading(false)
    }
    getRepos()
  }, [repos])

  if (loading) return <AppLoading />
  return (
    <ReposList
      list={repos}
    />
  )
}

export default Home
