import React from "react";
import Comment from "./Comment";

const CommentList = ({ dados }) => {
  return (
    <div className="comment-container">
      {dados.comments.map((comment) => <Comment dados={dados} comment={comment} key={comment.id} />)}
    </div>
  )
}

export default CommentList;