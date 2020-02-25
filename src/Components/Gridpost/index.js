import React from 'react'
import PostCard from './PostCard'
import AppButton from '../AppButton'

function Gridpost () {
  return (
    <section className='container__posts'>
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <PostCard
              imageUrl='https://picsum.photos/400/200'
              title='Post 1'
              thumbnail='Post 1'
              text='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
              readTime='10m'
            >
              <div className='btn-group'>
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
                <AppButton
                  text='Edit'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </PostCard>
          </div>
          <div className='col-md-4'>
            <PostCard
              imageUrl='https://picsum.photos/400/200'
              title='Post 2'
              thumbnail='Post 2'
              text='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
              readTime='5m'
            >
              <div className='btn-group'>
                <AppButton
                  text='View'
                  size='sm'
                  className='btn-outline-secondary'
                />
              </div>
            </PostCard>
          </div>
          <div className='col-md-4'>
            <PostCard
              imageUrl='https://picsum.photos/400/200'
              title='Post 3'
              thumbnail='Post 3'
              text='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
              readTime='15m'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gridpost
