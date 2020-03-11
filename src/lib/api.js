
const API_URL_POSTS = 'https://api.github.com/users/kodemia/repos'
const API_URL_POST = 'https://api.github.com/repos/kodemia'

async function getRepos () {
  try {
    const response = await window.fetch(`${API_URL_POSTS}`)
    const payload = await response.json()
    return payload
  } catch (error) {
    console.log('error on get repos', error)
    return {
      data: {
        repos: []
      }
    }
  }
}

async function getRepo (name) {
  try {
    const response = await window.fetch(`${API_URL_POST}/${name}`)
    const payload = await response.json()
    return payload
  } catch (error) {
    console.log('error', error)
    return {
      data: {
        repo: []
      }
    }
  }
}

const api = {
  getRepos,
  getRepo
}

export default api
