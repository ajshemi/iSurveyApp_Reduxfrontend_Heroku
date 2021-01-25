// const initialState = {
//     products: []
//   }
  const productReducer = (action,state = {products:[]}) => {
    switch (action.type) {
      
      case "ADD_PRODUCTS":
        // console.log(action.type)
        // console.log('add products to state when page loads')
        return {...state, products: action.products}

      case "CLEAR_PRODUCTS_FROM_STATE":
        // console.log('remove products from state')
        return {}
  
      default:
        return state;
    }
  }
  
  
  export default productReducer