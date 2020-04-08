const initialState = {
    errorMessage:{}
}

const errorReducer = (state = initialState, action) => {
switch (action.type) {

    case "ADD_ERROR_MESSAGE":
        return {...state, errorMessage: action.errorMessage}

    default:
    return state;
}
}
  
  
export default errorReducer