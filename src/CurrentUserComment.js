import React from 'react'

const CurrentUserComment = ({ dados }) => {
  return (
    <form className='current-user-form'>
      <div className='current-user-img'>
        <img src={require(`./assets/images/avatars/image-${dados.currentUser.username}.png`)} />
      </div>
      <input type='text' id="current-user-input" />

      <button type='submit' className='btn-send'>SEND</button>
    </form>
  )
}

export default CurrentUserComment