
const initialState = {
    sentiments: []
  }
  const sentimentReducer = (action,state = initialState) => {
    switch (action.type) {
  
      case "ADD_SENTIMENT":
        // console.log('add sentiment')
        // console.log(action.sentiment)
        return {...state, sentiments: state.sentiments.concat(action.sentiment)}

      case "ADD_ALL_SENTIMENTS": 
      return {...state,sentiments:action.sentiments}


      case "DELETE_SENTIMENT_FROM_STATE":
        let filteredArray=state.sentiments.filter(sentiment=>sentiment.id !== action.sentiment.id)
        return {...state, sentiments:filteredArray}

      case "CLEAR_SENTIMENT_FROM_STATE":
          return {}

      default:
        return state;
    }
  }
  export default sentimentReducer