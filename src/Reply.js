import React, { useEffect, useState } from 'react'

const Reply = ({ replie, dados, setDados }) => {

  const currentUser = replie.user.username;
  const [score, setScore] = useState(replie.score);
  const [editValue, setEditValue] = useState(false)

  // useEffect(() => {
  console.log(replie);
  //   console.log(dados.currentUser.username);
  // }, [replie])

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

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div className='reply-container'>
        <div className='score-box'>
          <div className='plus' onClick={plusScore}><i className="fa-solid fa-plus"></i></div>
          <div className='score'>{replie.score}</div>
          <div className='minus' onClick={minusScore}><i className="fa-solid fa-minus"></i></div>
        </div>

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
              {currentUser === dados.currentUser.username ? <div className='edit-btn'>
                <i class="fa-solid fa-pen-to-square"></i>
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
          {editValue ? <input type='text' value={replie.content} /> : <div className='user-replie'>{replie.content}</div>}
        </div>
      </div>
    </div>

  )
}

export default Reply