import React from 'react'

function PostCardThumbnail (props) {
  return (
    <div className='cover__thumbnail'>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      <span>{props.thumbnail}</span>
    </div>
  )
}
export default PostCardThumbnail
