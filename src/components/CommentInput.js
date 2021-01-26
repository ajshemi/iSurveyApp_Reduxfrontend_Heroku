import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addErrorToState,
  clearErrorFromState,
  addEmotionToState,
  addSentimentToState,
  addCommentToState,
  addToAllCommentsToState,
} from "../Redux/actions";

class CommentInput extends Component {
  //local component state
  state = {
    user_comment: "",
  };


  handleSubmit = (e) => {
    //fetch with the new set state
    e.preventDefault();
    // console.log(this.state)
    // console.log(this.props)
    if (
      this.state.user_comment.length > 15 &&
      !/\d/.test(this.state.user_comment)
    ) {
      let token = localStorage.getItem("token");
      // console.log(token)
      // fetch("https://cookiesurveywebapp.herokuapp.com/comments", {
        fetch("http://localhost:3000/comments",{
        method: "POST",
        body: JSON.stringify(this.state),
        // body: JSON.stringify({user_comment:this.state.comment,user_id:this.props.user.id}),
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
        .then((res) => {
          // console.log(res);
          // if (!res.ok) {
          //   throw res;
          // }
          return res.json();
        })
        .then((comment) => {
          // console.log(comment)
          // console.log(comment.comment)
          if (comment.error) {
            // console.log(comment.error);
            this.props.addErrorToState(comment.error);
          } else {
            this.props.addCommentToState(comment.comment);
            this.props.addToAllCommentsToState(comment.comment);
            this.props.addEmotionToState(comment.emotion);
            this.props.addSentimentToState(comment.sentiment);
            this.props.clearErrorFromState();
          }
        });
      // .catch((err) => {
      // console.log(err);
      // err.text().then(errorMessage=>{
      //   console.log(errorMessage)
      //   this.props.addErrorToState(errorMessage)
      // })
      // });
      // dispatch add comment action with the comment response from the database
      // the reducer will update the application state with this action
      //clear this.state.comment
      this.setState((prevState) => {
        return { ...prevState, user_comment: "" };
      });
    } else {
      alert("comment is too short or invalid");
    }
  };

  handleChange = (e) => {
    //set this component state "local state"
    let { name, value } = e.target;

    // console.log(/\d/.test("yes"));

    this.setState(
      {
        [name]: value,
      }
      // ,()=>console.log(this.state.user_comment)
    );
  };

  render() {
    // console.log(this.props.user.comment)
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="comment">Overall Comment(s):</label>
          <div className="ui fluid input">
            <input
              type="text"
              autoComplete="off"
              placeholder="text only, at least 15 characters long, no numbers. e.g. cookies are sweet and delicious"
              name="user_comment"
              value={this.state.user_comment}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <button className="ui button">Submit</button>
          </div>
          {/* <input id='inputrating' type="submit" value="Submit"/> */}
        </div>
      </form>
    );
  }
}

export default connect(null, {
  addErrorToState,
  clearErrorFromState,
  addEmotionToState,
  addSentimentToState,
  addCommentToState,
  addToAllCommentsToState,
})(CommentInput);