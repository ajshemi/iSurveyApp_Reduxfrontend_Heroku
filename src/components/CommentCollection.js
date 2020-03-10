import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {deleteCommentFromState} from '../Redux/actions'
import Comment from './Comment'

class CommentCollection extends Component {
    // state={
    //     deletebutton:true
    // }
    deletebutton=() => {
        return true
    }
    render() {
        // console.log(this.props.user.id)
        // console.log(this.deletebutton())
        // console.log(!this.deletebutton())

        let arrayOfComments=this.props?.comments?.map(comment=> <Comment deletebutton={comment.user_id===this.props.user.id ? this.deletebutton() : !this.deletebutton()} key={comment.id} comment={comment}/> 
    )
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <ul>
                {/* arrayofallcomments */}
                {arrayOfComments}
            </ul>
        );
    }
}

const mapStateToProps =(state) => {
    return {
      user:state.user.user,
      token:state.user.token
    }
}
  
export default connect(mapStateToProps)(CommentCollection)