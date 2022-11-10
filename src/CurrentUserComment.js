import React, { useEffect, useRef, useState } from 'react'

const CurrentUserComment = ({ dados, setDados }) => {
  const randomNumber = Math.floor(Math.random() * 90000);
  const [currentInput, setCurrentInput] = useState('')
  const [comments, setComments] = useState(dados.comments);
  const inputText = useRef();

  useEffect(() => {
    console.log(dados);
  }, [])

  function handleChange(e) {
    const text = inputText.current.value;
    console.log(text)
    setCurrentInput(text)
  }

  function handleAddComment(e) {
    e.preventDefault()
    const newComments = [...comments, { id: randomNumber, content: inputText.current.value, createdAt: 'now', replies: [], score: 0, user: { image: { png: require(`./assets/images/avatars/image-${dados.currentUser.username}.png`) }, username: dados.currentUser.username } }];

    dados.comments = [...newComments]

    setDados({ ...dados })
  }



  return (
    <form className='current-user-form' onSubmit={handleAddComment}>
      <div className='current-user-img'>
        <img src={require(`./assets/images/avatars/image-${dados.currentUser.username}.png`)} />
      </div>
      <input type='text' value={currentInput} id="current-user-input" ref={inputText} onChange={handleChange} />

      <button type='submit' className='btn-send'>SEND</button>
    </form>
  )
}

export default CurrentUserComment