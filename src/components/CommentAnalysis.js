import React from "react"

const CommentAnalysis = (props) => {
    const {emotion,comment,sentiment}=props
  return(
    <tr>
      <td>{`${comment.user_comment} |${comment.user_id}`}</td>
      <td>{`${sentiment.label} | ${sentiment.score}`}</td> 
      <td>{emotion.sadness}</td>
      <td>{emotion.joy}</td>
      <td>{emotion.fear}</td>
    </tr>
  )
}

export default CommentAnalysis