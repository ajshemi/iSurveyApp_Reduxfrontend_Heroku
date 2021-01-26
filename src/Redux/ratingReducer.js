const initialState = {onerating:[],allratings:[]}

const ratingReducer = (state=initialState,action) => {
switch (action.type) {

    case "ADD_ONE_RATING_SUMMARY":
    // console.log('add one rating summary to state when page loads')
        return {...state, onerating: action.onerating}


    case "ADD_ALL_RATING_SUMMARY":
        // console.log('add all rating summary to state when page loads')
        return {...state, allratings: action.allratings}


    default:
    return state;
}
}
  
  
export default ratingReducer