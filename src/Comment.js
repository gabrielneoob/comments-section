import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div className='comment-box'>
      <div className='score-box'>
        <div className='plus'><i class="fa-solid fa-plus"></i></div>
        <div className=''>{comment.score}</div>
        <div className='minus'><i class="fa-solid fa-minus"></i></div>
      </div>

    </div>
  )
}

export default Comment