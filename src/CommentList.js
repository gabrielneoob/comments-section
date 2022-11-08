import React from "react";

const CommentList = ({ dados }) => {
  return (
    <div>
      {dados.comments.map((comment) => <span>{comment.content}</span>)}
    </div>
  )
}

export default CommentList;