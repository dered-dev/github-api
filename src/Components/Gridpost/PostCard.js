import React from 'react'
import PostCardThumbnail from './PostCardThumbnail'
import PostCardBody from './PostCardBody'

function PostCard (props) {
  console.log(props.children)
  return (
    <div className='card mb-4 shadow-sm'>
      <PostCardThumbnail
        title={props.title}
        thumbnail={props.thumbnail}
        imageUrl={props.imageUrl}
      />
      <PostCardBody
        text={props.text}
        readTime={props.readTime}
        children={props.children}
      />

    </div>
  )
}

export default PostCard
