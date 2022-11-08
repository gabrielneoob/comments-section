import React, { useEffect } from 'react'
import Reply from './Reply';

const Comment = ({ comment, dados }) => {
  const currentUser = comment.user.username;

  function teste() {
    const newDados = dados.comments = [...dados.comments, { id: 3, content: 'oi' }]
    console.log(dados);
  }

  // useEffect(() => {
  //   console.log('comentario', comment);
  //   console.log(currentUser);
  //   console.log(dados.currentUser.username);
  // }, [])


  return (
    <>
      <div className='comment-box'>
        <div className='score-box'>
          <div className='plus'><i className="fa-solid fa-plus"></i></div>
          <div className='score' onClick={teste}>{comment.score}</div>
          <div className='minus'><i className="fa-solid fa-minus"></i></div>
        </div>

        <div className='user-container'>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div className='user-information'>
              <div className='user-img'>
                <img src={require(`./assets/images/avatars/image-${comment.user.username}.png`)}></img>
              </div>
              <h3 className='user-name'>{comment.user.username}</h3>
              <div className='created-at'>{comment.createdAt}</div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {currentUser === dados.currentUser.username ? <div className='trash-btn'>
                <i class="fa-solid fa-trash"></i>
                <span>Delete</span>
              </div> : null}
              <div className='reply-btn'>
                <i className="fa-sharp fa-solid fa-reply"></i>
                <span>Reply</span>
              </div>
            </div>
          </div>
          <div className='user-comment'>{comment.content}</div>
        </div>
      </div >

      {comment.replies.map((replie) => <Reply dados={dados} replie={replie} key={replie.id} />)}
    </>

  )
}

export default Comment