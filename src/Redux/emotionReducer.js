
const initialState = {
    emotions: []
  }
  const emotionReducer = (state=initialState,action) => {
    switch (action.type) {
  
      case "ADD_EMOTION":
        // console.log('add EMOTION')
        return {...state, emotions: state.emotions.concat(action.emotion)}

      case "ADD_ALL_EMOTIONS":
        return {...state,emotions:action.emotions}

      case "DELETE_EMOTION_FROM_STATE":
        let filteredArray=state.emotions.filter(emotion=>emotion.id !== action.emotion.id)
        return {...state, emotions:filteredArray}


      case "CLEAR_ALL_EMOTIONS_FROM_STATE":
        // console.log('clear emotion')
        return {}
  
      default:
        return state;
    }
  }
  export default emotionReducer