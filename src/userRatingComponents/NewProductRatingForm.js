// import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {updateRatingToState,saveUserToState} from '../Redux/actions'
// import { Rating} from 'semantic-ui-react'

// class NewProductRatingForm extends Component {
//   //local component state
//   state = {
//     // snack_id: 0,
//     product_id:0,
//     rating:0
//   }
  
//   handleSubmit = (e) => {
//     e.preventDefault()
//     //once set, send the new state to database
//     // console.log(this.state)
//     // if (this.state.product_id > 0 && this.state.rating >0 && this.props?.token) {

//     //   fetch("http://localhost:3000/reviews", {
//     //     method: "POST",
//     //     body: JSON.stringify(this.state),
//     //     headers: {
//     //       'content-type': "application/json",
//     //       "Authorization": `bearer ${this.props.token}`
//     //     }
//     //   })
//     //   .then(res => res.json())
//     //   .then((review) => {
//     //     console.log(review)
//     //     // this.props.saveUserToState(review)
//     //   }
//     //   )
//     //   //set local component state to previous/initial state
//     //   this.setState((prevState) => {return {...prevState,product_id:0,rating:0}})
//     // }
//   }

//   //set local component state
//   handleChange = (e) => {
//     let {name, value} = e.target
//     this.setState({
//       [name]: value
//     }
//     // ,()=>console.log(this.state)
//     )
//   }

//   render() {
//     return (
//       <div>
//         <div>
//           <br/>
//           <br/>
//           <label>Product/Cookie Name:</label>
//           <select name="product_id" onChange={this.handleChange} value={this.state?.product_id}>
//             {this.props?.products.map(product => {
//               return <option key={product.id} value={product.id}>{product.name}</option>
//             })}
//           </select>
//         </div>
//         <div className="ratingbutton">
//             <div>
//             Rating: {this.state.rating}
            
//             <input
//             type='range'
//             min={0}
//             max={5}
//             name='rating'
//             value={this.state.rating}
//             onChange={this.handleChange}
//             />
//             {/* </div>
//             <div> */}
//               <Rating rating={this.state.rating} maxRating={5} />
//             </div>
//         </div>
//         <div>
//           <button onClick={this.handleSubmit} type="submit" >Add New Product Rating</button>
//       </div>
//      </div>
//     );
//   }

// }

// const mapStateToProps = (state) => {
//   return {
//     products: state.products.products,
//     token: state.user.token
//   }
// }







// export default connect(mapStateToProps, {updateRatingToState,saveUserToState} )(NewProductRatingForm);