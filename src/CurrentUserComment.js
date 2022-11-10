import React, { useEffect, useRef, useState } from 'react'

const CurrentUserComment = ({ dados }) => {
  const randomNumber = Math.floor(Math.random() * 9000);
  const inputText = useRef();

  useEffect(() => {
    console.log(dados);
  })




  return (
    <form className='current-user-form'>
      <div className='current-user-img'>
        <img src={require(`./assets/images/avatars/image-${dados.currentUser.username}.png`)} />
      </div>
      <input type='text' id="current-user-input" ref={inputText} />

      <button type='submit' className='btn-send'>SEND</button>
    </form>
  )
}

export default CurrentUserComment