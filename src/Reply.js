import React, { useEffect, useRef, useState } from 'react'

const Reply = ({ replie, dados, setDados, comment }) => {

  const currentUser = replie.user.username;
  const [score, setScore] = useState(replie.score);
  const [editValue, setEditValue] = useState(false);
  const [inputText, setInputText] = useState(replie.content);
  const [newComments, setNewComments] = useState(comment.replies)

  const currentInput = useRef();

  const inputStyle = {
    outline: 'none',
    width: '100%',
    border: '1.8px solid var(--light-gray)',
    borderRadius: '5px',
    padding: '20px 10px',
    lineHeight: '28px'
  }
  useEffect(() => {
    replie.content = inputText;
    console.log(comment);
    setDados({ ...dados })

  }, [inputText])

  useEffect(() => {
    console.log(newComments)
    comment.replies = [...newComments];
    setDados = { ...dados }
  }, [newComments])

  function handleChangeInput(e) {
    const texto = currentInput.current.value;
    setInputText(texto);
  }

  function plusScore() {
    setScore((previous) => previous + 1)
    replie.score += 1;
    setDados({ ...dados })
  }

  function minusScore() {
    if (score > 0) {
      setScore((previous) => previous - 1)
      replie.score -= 1;
      setDados({ ...dados })
    }
  }

  function deletComment() {
    const newCommentsPluse = comment.replies.filter((item) => item.id !== replie.id);
    setNewComments([...newCommentsPluse])


  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

      <div className='reply-container'>
        {replie.user.username !== dados.currentUser.username ? <div className='score-box'>
          <div className='plus' onClick={plusScore}><i className="fa-solid fa-plus"></i></div>
          <div className='score'>{replie.score}</div>
          <div className='minus' onClick={minusScore}><i className="fa-solid fa-minus"></i></div>
        </div> : null}


        <div className='user-container'>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div className='user-information'>
              <div className='user-img'>
                <img src={require(`./assets/images/avatars/image-${replie.user.username}.png`)}></img>
              </div>
              <h3 className='user-name'>{replie.user.username}</h3>
              <div className='created-at'>{replie.createdAt}</div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {currentUser === dados.currentUser.username ? <div className='edit-btn' onClick={(() => setEditValue((previousValue) => !previousValue))}>
                <i className="fa-solid fa-pen-to-square"></i>
                <span>Edit</span>
              </div> : null}
              {currentUser === dados.currentUser.username ? <div className='trash-btn' onClick={deletComment}>
                <i className="fa-solid fa-trash"></i>
                <span>Delete</span>
              </div> : null}
              {currentUser !== dados.currentUser.username ? <div className='reply-btn'>
                <i className="fa-sharp fa-solid fa-reply"></i>
                <span>Reply</span>
              </div> : null}

            </div>

          </div>
          {editValue ? <input type='text' value={inputText} style={inputStyle} ref={currentInput} onChange={handleChangeInput} onFocus={((e) => currentInput.current.style.borderColor = 'hsl(238, 40%, 52%)')} onBlur={(() => currentInput.current.style.borderColor = "#aaa")} /> : <div className='user-replie'>{replie.content}</div>}
        </div>
      </div>
    </div>

  )
}

export default Reply