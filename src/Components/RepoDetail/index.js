
import React from 'react'
import useClipboard from 'react-hook-clipboard'
// styles
import styles from './index.module.css'

function InteriorPost (props) {
  const repo = props.repo
  const [clipboardSSH, copyToClipboardSSH] = useClipboard()
  const [clipboardHTTPS, copyToClipboardHTTPS] = useClipboard()
  const toClipboardSSH = repo.ssh_url
  const toClipboardHTTPS = repo.clone_url
  return (
    <section className='container mt-2'>
      <div className='row text-center'>
        <div className='col-12 mb-5 mt-5'>
          <a className='btn btn-dark rounded-pill px-4' href='/'> {'< Regresar'} </a>
        </div>

        <div className={styles.cardRepository}>
          <div className='col-12 text-center'>
            <span className={`btn btn-dark shadow ${styles.branchRepo}`}>{repo.default_branch}</span>
            <a href={repo.html_url} target='_blank' className={`btn btn-light shadow ${styles.viewGithub} `}>View on GitHub</a>
            <img src={repo.owner ? repo.owner.avatar_url : ''} alt='' className={styles.avatarRepository} />
            <h1 className={`mb-2 mt-4 ${styles.repoName}`}>{repo.name} </h1>
            <strong className={styles.repoFullName}>{repo.full_name} : <span>{repo.id}</span></strong>
            <span className={props.private ? styles.isPrivate : styles.isPublic}>{props.private ? 'Privado' : 'Público'}</span>
            <p className={`mt-5 mb-5 ${styles.description}`}>{repo.description}</p>
            <div className='form-group text-left mb-5'>
              <div className='row'>
                <div className='col-12'>
                  <label htmlFor='inputSSH' className='w-100'><b>Clone use SSH</b></label>
                </div>
                <div className='col-12 col-md-8 text-center'>
                  <input type='text' className='form-control' id='inputSSH' value={repo.ssh_url} readOnly />
                </div>
                <div className='col-12 col-md-4 text-left'>
                  <button className='btn btn-dark shadow' onClick={() => copyToClipboardSSH(toClipboardSSH)}>Copy SSH</button>
                </div>
              </div>
            </div>
            <div className='form-group text-left mb-5'>
              <div className='row'>
                <div className='col-12'>
                  <label htmlFor='inputSSH' className='w-100'><b>Clone use HTPPS</b></label>
                </div>
                <div className='col-12 col-md-8 text-center'>
                  <input type='text' className='form-control' id='inputSSH' value={repo.clone_url} readOnly />
                </div>
                <div className='col-12 col-md-4 text-left'>
                  <button className='btn btn-dark shadow' onClick={() => copyToClipboardHTTPS(toClipboardHTTPS)}>Copy HTTPS</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default InteriorPost
