import React, { Component } from 'react';
import ProductList from '../components/ProductList'
import ProductRatingForm from './ProductRatingForm'
import {connect} from 'react-redux'
import {saveUserToState} from '../Redux/actions'

class RatingContainer extends Component {

    handleProductSelection=(selectedproduct,rating,toggle) => {
      // e.preventDefault()
      console.log(selectedproduct)
      console.log(rating)
      toggle ? console.log('true') : console.log('false')

        //once set, send the new state to database
        // console.log(this.state)
        // let rating=this.handleSetRating()
      // if (selectedproduct.id !==0 && rating >0 && this.props?.token) {

        // fetch("http://localhost:3000/reviews", {
        //   method: "POST",
        //   body: JSON.stringify({product_id:selectedproduct.id,rating:rating}),
        //   headers: {
        //     'content-type': "application/json",
        //     "Authorization": `bearer ${this.props.token}`
        //   }
        // })
        // .then(res => res.json())
        // .then((review) => {
        //   console.log(review)
        //   // this.props.saveUserToState(review)
        // }
        // )
        //set local component state to previous/initial state
      //   this.setState((prevState) => {return {...prevState,product_id:0,rating:0}})
      // }
    }


    render() { 
      // console.log(this.props.token)
      // console.log(this.handleSetRating())
        return (
            <div>
                {/* <div>
                    <ProductRatingForm />
                </div>
                <div> */}
                    <ProductList handleSetRating={this.handleSetRating} handleProductSelection={this.handleProductSelection}/>
                {/* </div> */}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
      products: state.products.products,
      token: state.user.token
    }
  }
  
export default connect(mapStateToProps)(RatingContainer);


  
// handleSubmit = (e) => {
//     e.preventDefault()
//     //once set, send the new state to database
//     console.log(this.state)
//     if (this.state.product_id > 0 && this.state.rating >0 && this.props?.token) {

//       fetch("http://localhost:3000/reviews", {
//         method: "POST",
//         body: JSON.stringify(this.state),
//         headers: {
//           'content-type': "application/json",
//           "Authorization": `bearer ${this.props.token}`
//         }
//       })
//       .then(res => res.json())
//       .then((review) => {
//         console.log(review)
//         this.props.saveUserToState(review)
//       }
//       )
//       //set local component state to previous/initial state
//       this.setState((prevState) => {return {...prevState,product_id:0,rating:0}})
//     }
//   }
