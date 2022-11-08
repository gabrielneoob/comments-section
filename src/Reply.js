import React, { useEffect } from 'react'

const Reply = ({ replie, dados }) => {

  const currentUser = replie.user.username;

  useEffect(() => {
    console.log(currentUser);
    console.log(dados.currentUser.username);
  }, [replie])

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div className='reply-container'>
        <div className='score-box'>
          <div className='plus'><i className="fa-solid fa-plus"></i></div>
          <div className='score'>{replie.score}</div>
          <div className='minus'><i className="fa-solid fa-minus"></i></div>
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
          <div className='user-replie'>{replie.content}</div>
        </div>
      </div>
    </div>

  )
}

export default Reply