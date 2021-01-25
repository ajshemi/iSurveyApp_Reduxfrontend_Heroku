
const initialState = {
    allcomments: []
  }
// let state = initialState;
  const commentReducer = (action,state=initialState) => {
    switch (action.type) {
  
      case "ADD_ALL_COMMENTS":
        // console.log('add all comments')
        return {...state, allcomments: action.comments}
      
      
      case "DELETE_FROM_ALL_COMMENTS":
        let filterArray=state.allcomments.filter(comment=>comment.id !== action.comment.id)
        return {...state,allcomments:filterArray}

      case "CLEAR_ALL_COMMENTS_FROM_STATE":
        return {}

      case "ADD_COMMENT_TO_COMMENTS":
        return {...state, allcomments: state.allcomments.concat(action.comment)}
  


      default:
        return state;
    }
  }
  export default commentReducer