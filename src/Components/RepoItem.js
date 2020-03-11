import React from 'react'

function RepoItem (props) {
  return (
    <tr key={props.key}>
      <td>
        <a href={props.owner ? props.owner.url : ''} target='_blank'>
          <img className='img__avatar' src={props.owner ? props.owner.avatar_url : ''} alt={props.owner ? props.owner.login : ''} />
        </a>
      </td>
      <td>{props.id}</td>
      <td><b>{props.name}</b></td>
      <td className={props.private ? 'private' : 'public'}><b>{props.private ? 'Privado' : 'Público'}</b></td>
      <td>{props.full_name}</td>
      <td>{props.description}</td>
      <td><a className='btn btn-dark rounded-pill px-4' href={`/repo-detail/${props.name}`}>Ver</a></td>
    </tr>
  )
}

export default RepoItem
