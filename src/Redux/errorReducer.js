const initialState = {
  errorMessage: {},
};

const errorReducer = (state=initialState,action) => {
  // switch (action.type) {
  //   case "ADD_ERROR_MESSAGE":
  //     // console.log(action.errorMessage);
  //     return { ...state, errorMessage: action.errorMessage };

  //   default:
  //     return state;
  // }
  if (action.type==="ADD_ERROR_MESSAGE"){
    return { ...state, errorMessage: action.errorMessage };

  }
  else{
    return state
  }
};

export default errorReducer;
