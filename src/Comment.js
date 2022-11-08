import React from 'react'

const Comment = ({ comment, dados }) => {

  function teste() {
    const newDados = dados.comments = [...dados.comments, { id: 3, content: 'oi' }]
    console.log(dados);
  }


  return (
    <div className='comment-box'>
      <div className='score-box'>
        <div className='plus'><i className="fa-solid fa-plus"></i></div>
        <div className='score' onClick={teste}>{comment.score}</div>
        <div className='minus'><i className="fa-solid fa-minus"></i></div>
      </div>

      <div className='user-container'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='user-information'>
            <div className='user-img'>
              <img src={require(`./assets/images/avatars/image-${comment.user.username}.png`)}></img>
            </div>
            <h3 className='user-name'>{comment.user.username}</h3>
            <div className='created-at'>{comment.createdAt}</div>
          </div>

          <div className='reply'>
            <i class="fa-sharp fa-solid fa-reply"></i>
            <span>Reply</span>
          </div>
        </div>


      </div>

    </div >
  )
}

export default Comment