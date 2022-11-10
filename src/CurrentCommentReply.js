import React, { useRef, useState, useEffect } from 'react'

const CurrentCommentReply = ({ dados, comment, setDados, setCommentReply }) => {
  const [replyComment, setReplyComment] = useState(comment.replies);
  const randomNumber = Math.floor(Math.random() * 9000);
  const inputText = useRef();

  useEffect(() => {
    comment.replies = [...replyComment]
    setDados({ ...dados })


    console.log(dados);
    console.log(comment);
    console.log(replyComment);
  }, [replyComment])

  function handleAddReply(e) {
    e.preventDefault();
    const texto = inputText.current.value;
    if (texto) {
      setReplyComment([...replyComment, { id: randomNumber, content: texto, createdAt: 'now', score: 0, replies: [], user: { image: require(`./assets/images/avatars/image-${dados.currentUser.username}.png`), username: dados.currentUser.username } }])

      // setCommentReply((previousValue) => !previousValue)
    }
    inputText.current.value = null
  }





  return (
    <form className='current-user-form' onSubmit={handleAddReply}>
      <div className='current-user-img'>
        <img src={require(`./assets/images/avatars/image-${dados.currentUser.username}.png`)} />
      </div>
      <input type='text' id="current-user-input" ref={inputText} />

      <button className='btn-send'>SEND</button>
    </form>
  )
}

export default CurrentCommentReply