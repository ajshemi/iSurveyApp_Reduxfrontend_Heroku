import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addEmotionToState,addSentimentToState,addCommentToState,addToAllCommentsToState} from '../Redux/actions'

class CommentInput extends Component {
  //local component state
  state = {
    user_comment:''
  }

  handleSubmit = (e) => {
    //fetch with the new set state 
    e.preventDefault()
    // console.log(this.state)
    // console.log(this.props)
    if(this.state.user_comment.length>15 && !/\d/.test(this.state.user_comment)){
    let token = localStorage.getItem('token')
    // console.log(token)
    fetch("https://cookiesurveywebapp.herokuapp.com/comments",{
        method: "POST",
        body:JSON.stringify(this.state),
        // body: JSON.stringify({user_comment:this.state.comment,user_id:this.props.user.id}),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${token}`
        }
      })
      .then(res => res.json())
      .then((comment) => {
        // console.log(comment)
        // console.log(comment.comment)
        this.props.addCommentToState(comment.comment);
        this.props.addToAllCommentsToState(comment.comment);
        this.props.addEmotionToState(comment.emotion);
        this.props.addSentimentToState(comment.sentiment);
      })
    // dispatch add comment action with the comment response from the database
    // the reducer will update the application state with this action
    //clear this.state.comment
    this.setState((prevState) => {
      return { ...prevState,user_comment:''}
      
    })
    }
    else { alert('comment is too short or invalid'); }
  }

  handleChange = (e) => {
    //set this component state "local state"
    let {name, value} = e.target

    // console.log(/\d/.test("yes"));
    
    this.setState({
      [name]: value
    }
    // ,()=>console.log(this.state.user_comment)
    )
   
  }

  render() {
    // console.log(this.props.user.comment)
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Overall Comment(s):</label>
        <input id='inputrating' type="text" autoComplete="off" name="user_comment" value={this.state.user_comment} onChange={this.handleChange}/>
        <input id='inputrating' type="submit" value="Submit"/>
      </form>
    );
  }
}

export default connect(null,{addEmotionToState,addSentimentToState,addCommentToState,addToAllCommentsToState})(CommentInput);

{/* <button type="submit" class="ui button">Submit</button> */}