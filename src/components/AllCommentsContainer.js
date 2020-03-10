import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'
import SearchBarContainer from './SearchBarContainer';
import CommentCollection from './CommentCollection'
import {addAllCommentsToState} from '../Redux/actions'
// import {deleteCommentFromState} from '../Redux/actions'
// import Comment from './Comment'

class AllCommentsContainer extends Component {
    state = {
        searchTerm: "",
        sortValue:"All",
        currentUser:""
    }

    handleInput=(e) => {
        // console.log(e)
        this.setState((prevState) => {return {...prevState, searchTerm:e}})
        //dispatch some action to app state if using redux
    }
    handleSort = (newSortValue) => {
        // console.log(newSortValue)
        this.setState({
          sortValue: newSortValue
        })
      }

    sortComments = () => {
        let {sortValue} = this.state
    
        if(sortValue === "Name"){
          return [...this.props.comments].sort((comment1, comment2) => {
            return comment1.user_comment.user_id.localeCompare(comment2.user_comment.user_id)
          }
          )
        } else if (sortValue === "length"){
          return [...this.props.comments].sort((comment1, comment2) => {
            return comment1.user_comment.length - comment2.user_comment.length
          })
        }else if(sortValue==="user"){
            return [...this.props.comments].sort((comment1, comment2) => {
                return comment1.user_comment.user_id - comment2.user_comment.user_id
        })

        }
         else {
          return [...this.props.comments]
        }
    }

    handleFilter=(e) => {
      // console.log(e)
      this.setState((prevState) => {
        return{...prevState, currentUser:e}
      })
    }

    
    //decide what to pass down to CommentCollection
    filteredComments= (comments) => {
        let filteredComments = comments.filter(comment => comment.user_comment.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return filteredComments
    }

    currentUserComments=(comments) => {
      let {currentUser} = this.state
      // console.log(currentUser)
      if(currentUser==="currentUser"){
        let filteredComments = comments.filter(comment => comment.user_id===this.props.user.id)
        return filteredComments
      }
      // else if (currentUser==="allUsers"){
        else {return comments}
      // }
      // this.setState({currentUser:""})
    }
    
    

    render() {
       // let arrayOfComments=this.props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        // console.log(this.props.user)
        // console.log(this.currentUserComments(this.props.comments))

        return (
            <div className="allcommentpage">
              <div>
                <SearchBarContainer currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} handleFilter={this.handleFilter} handleInput={this.handleInput} handleSort={this.handleSort}/>
              </div>
              <div>
                <CommentCollection user={this.props.user} comments={this.filteredComments(this.currentUserComments(this.sortComments()))}/>
              </div>
            </div>
        );
    }
}

const mapStateToProps=(state) => {
    return{
        comments:state.comments.allcomments,
        user:state.user.user
    }
}

export default connect(mapStateToProps,{addAllCommentsToState})(AllCommentsContainer);