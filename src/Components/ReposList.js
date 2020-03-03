
import React from 'react'
import RepoItem from '../Components/RepoItem'

function ReposList (props) {
  return (
    <section className='container__posts'>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='text-center w-100 mb-5 '>Public repositories Kodemia</h1>
          <div class='tbl-header mb-5'>
            <table cellpadding='0' cellspacing='0' border='0'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Avatar</th>
                  <th scope='col'>Id</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Public</th>
                  <th scope='col'>Full name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>

                {
                  props.list.map(
                    (repo, index) => (

                      <RepoItem
                        key={`item__${index}`}
                        id={repo.id}
                        owner={repo.owner}
                        name={repo.name}
                        full_name={repo.full_name}
                        private={repo.private}
                        description={repo.description}
                      />
                    )
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReposList
