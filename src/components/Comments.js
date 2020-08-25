import React, { Component } from "react";
// import {connect} from 'react-redux'
// import {deleteCommentFromState} from '../Redux/actions'
import Comment from "./Comment";

class Comments extends Component {
  deletebutton = () => {
    return true;
  };

  render() {
    // console.log("FROM user comments",this.props.user.comments)
    // let arrayOfComments=this.props?.user?.comments?.map(comment=> <Comment deletebutton={comment.user_id===this.props?.user?.id ? this.deletebutton() : !this.deletebutton()} key={comment.id} comment={comment}/>)
    let arrayOfComments = this.props?.user?.comments?.map((comment) => (
      <Comment
        deletebutton={
          comment?.user_id === this.props?.user?.id
            ? this.deletebutton()
            : !this.deletebutton()
        }
        key={comment.id}
        comment={comment}
      />
    ));
    // console.log(this.props.user.comment)
    // console.log(this.props.user.comment.id)
    // const {id,user_comment}=this.props.user.comment
    // {user_comment}
    return <ul>{arrayOfComments}</ul>;
  }
}

export default Comments;
