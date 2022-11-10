import React, { useEffect, useState, useRef } from 'react'
import Reply from './Reply';
import CurrentUserComment from './CurrentUserComment';
import CurrentCommentReply from './CurrentCommentReply';

const Comment = ({ comment, dados, setDados }) => {
  const [score, setScore] = useState(comment.score);
  const [commentReply, setCommentReply] = useState(false)
  const [editValue, setEditValue] = useState(false);
  const currentUser = comment.user.username;
  const [inputText, setInputText] = useState(comment.content);

  const currentInput = useRef();

  const inputStyle = {
    outline: 'none',
    width: '100%',
    border: '1.8px solid var(--light-gray)',
    borderRadius: '5px',
    padding: '20px 10px',
    lineHeight: '28px'
  }


  // useEffect(() => {
  //   console.log(comment);
  // }, [])


  function handleChangeInput(e) {
    const texto = currentInput.current.value;
    setInputText(texto);
    comment.content = inputText;
    setDados({ ...dados })
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
        {comment.user.username !== dados.currentUser.username ? <div className='score-box'>
          <div className='plus' onClick={plusScore}><i className="fa-solid fa-plus"></i></div>
          <div className='score'>{comment.score}</div>
          <div className='minus' onClick={minusScore}><i className="fa-solid fa-minus"></i></div>
        </div> : null}


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
              {currentUser === dados.currentUser.username ? <div className='edit-btn' onClick={(() => setEditValue((previousValue) => !previousValue))}>
                <i className="fa-solid fa-pen-to-square"></i>
                <span>Edit</span>
              </div> : null}
              {currentUser === dados.currentUser.username ? <div className='trash-btn'>
                <i className="fa-solid fa-trash"></i>
                <span>Delete</span>
              </div> : null}
              {currentUser !== dados.currentUser.username ? <div className='reply-btn'>
                <i className="fa-sharp fa-solid fa-reply"></i>
                <span>Reply</span>
              </div> : null}

            </div>
          </div>
          {editValue ? <input type='text' value={inputText} style={inputStyle} ref={currentInput} onChange={handleChangeInput} onFocus={((e) => currentInput.current.style.borderColor = 'hsl(238, 40%, 52%)')} onBlur={(() => currentInput.current.style.borderColor = '#aaa')} /> : <div className='user-replie'>{comment.content}</div>}
        </div>
      </div >
      {comment.replies.map((replie) => <Reply dados={dados} setDados={setDados} replie={replie} key={replie.id} />)}

      {commentReply ? <CurrentCommentReply setCommentReply={setCommentReply} setDados={setDados} dados={dados} comment={comment} /> : null}


    </>

  )
}

export default Comment