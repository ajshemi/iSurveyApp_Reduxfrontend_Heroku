
//USER RELATED ACTIONS
export const saveUserToState = (user) => {
    return {
      type: "SAVE_USER_TO_STATE",
      user
    }
  }

 export const clearUserFromState = () => {
   console.log('here')
    return {
      type: "CLEAR_USER_FROM_STATE"
  }
}
  
 
//PRODUCT RELATED ACTIONS 
  export const addProductsToState = (products) => {
    return {
      type: "ADD_PRODUCTS",
      products
    }
  }

  export const clearProductsFromState = () => {
    console.log('here products')
     return {
       type: "CLEAR_PRODUCTS_FROM_STATE"
   }
 }

//SENTIMENT AND EMOTIONS RELATED ACTIONS 
 export const clearSentimentFromState = () => {
  console.log('here products')
   return {
     type: "CLEAR_SENTIMENT_FROM_STATE"
 }
}
export const addSentimentToState =(sentiment) => {
  return{
    type: "ADD_SENTIMENT",
    sentiment
  }
}
export const addEmotionToState =(emotion) => {
  return{
    type: "ADD_EMOTION",
    emotion
  }
} 

export const clearallEmotionsFromState = () => {
  console.log('here products')
  return {
    type: "CLEAR_ALL_EMOTIONS_FROM_STATE"
  }
}

export const addAllEmotionsToState=(emotions) => {
  return {
    type: "ADD_ALL_EMOTIONS",
    emotions
  }
  
}

export const addAllSentimentsToState=(sentiments) => {
  return {
    type: "ADD_ALL_SENTIMENTS",
    sentiments
  }
  
}

export const deleteSentimentFromState=(sentiment) => {
  return{
    type: "DELETE_SENTIMENT_FROM_STATE",
    sentiment
  }
  
}
export const deleteEmotionFromState=(emotion) => {
  return{
    type: "DELETE_EMOTION_FROM_STATE",
    emotion
  }
  
}

//COMMENT RELATED ACTIONS
export const clearallCommentsFromState = () => {
  console.log('here products')
    return {
      type: "CLEAR_ALL_COMMENTS_FROM_STATE"
  }
}
export const addAllCommentsToState = (comments) => {
  return {
    type: "ADD_ALL_COMMENTS",
    comments
  }
}


export const addCommentToState = (comment) => {
  return {
    type: "ADD_COMMENT",
    comment
  }
}
export const addToAllCommentsToState=(comment) => {
  return {
    type:"ADD_COMMENT_TO_COMMENTS",
    comment
  }
  
}
export const deleteCommentFromAllComment=(comment) => {
  return {
    type:"DELETE_FROM_ALL_COMMENTS",
    comment
  }
}
  

export const deleteCommentFromState=(comment) => {
  return {
    type:"DELETE_COMMENT",
    comment
  }
  
}
//RATING RELATED ACTIONS
export const updateRatingToState = (review) => {
  return {
    type: "UPDATE_USER_RATING",
    review
  }
}

export const addoneRatingSummary=(onerating) => {
  return {
    type:"ADD_ONE_RATING_SUMMARY",
    onerating
  }
  
}


export const addallRatingsSummary=(allratings) => {
  return {
    type:"ADD_ALL_RATING_SUMMARY",
    allratings
  }
  
} 
