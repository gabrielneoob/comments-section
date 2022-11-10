import React, { useEffect, useState } from 'react'
import Reply from './Reply';
import CurrentUserComment from './CurrentUserComment';
import CurrentCommentReply from './CurrentCommentReply';

const Comment = ({ comment, dados, setDados }) => {
  const [score, setScore] = useState(comment.score);
  const [commentReply, setCommentReply] = useState(false)
  const currentUser = comment.user.username;


  // useEffect(() => {
  //   console.log(comment);
  // }, [])

  function teste() {
    const newDados = dados.comments = [...dados.comments, { id: 3, content: 'oi' }]
    console.log(dados);
  }

  function plusScore() {
    setScore((previous) => previous + 1)
    comment.score += 1;
    setDados({ ...dados })
  }

  function minusScore() {
    if (score > 0) {
      setScore((previous) => previous - 1)
      comment.score -= 1;
      setDados({ ...dados })
    }
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
          <div className='plus' onClick={plusScore}><i className="fa-solid fa-plus"></i></div>
          <div className='score' onClick={teste}>{comment.score}</div>
          <div className='minus' onClick={minusScore}><i className="fa-solid fa-minus"></i></div>
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
              <div className='reply-btn' onClick={(() => {
                setCommentReply((previous) => !previous)
              })}>
                <i className="fa-sharp fa-solid fa-reply"></i>
                <span>Reply</span>
              </div>
            </div>
          </div>
          <div className='user-comment'>{comment.content}</div>
        </div>
      </div >
      {comment.replies.map((replie) => <Reply dados={dados} setDados={setDados} replie={replie} key={replie.id} />)}

      {commentReply ? <CurrentCommentReply setCommentReply={setCommentReply} setDados={setDados} dados={dados} comment={comment} /> : null}


    </>

  )
}

export default Comment