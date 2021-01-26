import React, { Component } from 'react';
import {connect} from 'react-redux'
import {GoTrashcan} from 'react-icons/go'
import {deleteCommentFromState,deleteCommentFromAllComment,deleteEmotionFromState,deleteSentimentFromState} from '../Redux/actions'

class Comment extends Component {
    //receives props.comment from Comments
    // console.log(this.props.comment)
    handleDelete=() => {
        let token = localStorage.getItem('token')
        if(this.props.comment.id)
        {
          fetch(`https://cookiesurveywebapp.herokuapp.com/comments/${this.props.comment.id}`, {
          // fetch(`http://localhost:3000/comments/${this.props.comment.id}`, {

            method: "DELETE",
            body: JSON.stringify(this.props.comment),
            headers: {
              'content-type': "application/json",
              "Authorization": `bearer ${token}`
            }
          })
          .then(r => r.json())
          .then((comment) => {
            // console.log(comment)
            this.props.deleteCommentFromState(comment.comment)
            this.props.deleteCommentFromAllComment(comment.comment)
            this.props.deleteEmotionFromState(comment.emotion)
            this.props.deleteSentimentFromState(comment.sentiment)
          })
          //dispatch delete action with the comment response from the database
      }
    }
    render() {
        // console.log(this.props.comment.id)
        // console.log(this.props.deletebutton)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <li>
                <h2>{this.props.comment.user_comment}</h2>
                {this.props.deletebutton ? <button onClick={this.handleDelete}><GoTrashcan/></button> :""}
                {/* <button onClick={this.handleUpdate}>Update</button> */}
            </li>
        );
    }
}

const mapStateToProps =(state) => {
  return {
    user:state.user.user,
    token:state.user.token
  }
}

export default connect(mapStateToProps,{deleteCommentFromState,deleteCommentFromAllComment,deleteEmotionFromState,deleteSentimentFromState})(Comment);