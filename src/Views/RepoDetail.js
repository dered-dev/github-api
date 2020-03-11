import React, { useState, useEffect } from 'react'
import RepoDetailComponent from '../Components/RepoDetail'
import AppLoading from '../Components/AppLoading'
import api from '../lib/api'

function PostDetail (props) {
  const [repo, setRepo] = useState([])
  const [loading, setLoading] = useState(true)

  // setting initial state
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [fullName, setFullName] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [htmlUrl, sethtmlUrl] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [gitUrl, setGitUrl] = useState('')
  const [sshUrl, setSshUrl] = useState('')
  const [cloneUrl, setCloneUrl] = useState('')
  const [dfaultBranch, setDefaultBranch] = useState('')
  const nameRepo = props.match.params.name

  useEffect(() => {
    async function getRepo (props) {
      const name = nameRepo
      const repo = await api.getRepo(name)

      // setting variables used
      setId(repo.id)
      setName(repo.name)
      setFullName(repo.full_name)
      setIsPrivate(repo.private)
      sethtmlUrl(repo.html_url)
      setDescription(repo.description)
      setUrl(repo.url)
      setGitUrl(repo.git_url)
      setSshUrl(repo.ssh_url)
      setCloneUrl(repo.clone_url)
      setDefaultBranch(repo.default_branch)
      setRepo(repo)
      setLoading(false)
    }
    getRepo()
  }, [nameRepo])

  if (loading) return <AppLoading />
  return (
    <RepoDetailComponent
      repo={repo}
    />
  )
}

export default PostDetail
