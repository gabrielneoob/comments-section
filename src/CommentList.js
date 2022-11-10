import React from "react";
import Comment from "./Comment";
const CommentList = ({ dados, setDados }) => {
  return (
    <div className="comment-container">
      {dados.comments.map((comment) => <Comment setDados={setDados} dados={dados} comment={comment} key={comment.id} />)}

    </div>
  )
}

export default CommentList;