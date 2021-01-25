import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateRatingToState,saveUserToState} from '../Redux/actions'
import RatingForm from '../components/RatingForm'
// import { Rating} from 'semantic-ui-react'

class NewRatingContainer extends Component {
  //local component state
  state = {
    // snack_id: 0,
    product_id:0,
    rating:0
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // once set, send the new state to database
    // console.log(this.state)
    if (this.state.product_id > 0 && this.state.rating >0 && this.props?.token) {

      // fetch("https://cookiesurveywebapp.herokuapp.com/reviews", {
        fetch("http://localhost:3000/reviews",{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${this.props.token}`
        }
      })
      .then(res => res.json())
      .then((review) => {
        // console.log(review)
        this.props.saveUserToState(review)
      }
      )
      //set local component state to previous/initial state
    //   this.setState((prevState) => {return {...prevState,product_id:0,rating:0}})
    }
  }

  //set local component state
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    }
    // ,()=>console.log(this.state.product_id)
    )
  }
  handleRatingChange=(e) => {
      this.setState({
        rating: e.target.value
      }
    //   ,()=>console.log(this.state.rating)
      )
  }

  render() {
      // const {product}=this.props.products
      const {user_ratings} =this.props.user
      // let filterProducts=this.props.products.filter(product=>!user_ratings.map(ratedproduct=>ratedproduct.id).includes(product.id))
      // console.log(filterProducts)
    return (
      <div className="newratingdiv">
        <div>
            <label>Product/Cookie Name:</label>
            <br/>
            <select name="product_id" onChange={this.handleChange} value={this.state?.product_id}>
            <option value="">selected a product</option>
            {this.props.products.map((product,index) => <option disabled={user_ratings.map(r=>r.id).includes(product.id) ? true :false} key={product.id} value={product.id} >{product.name}</option>)}
            </select>
        </div>
        <div className="">
            <RatingForm handleRatingChange={this.handleRatingChange} rating={this.state.rating}/>
        </div>
        <div>
            {user_ratings.length >= 3 ? "" : <button onClick={this.handleSubmit} type="submit" >Add New Product Rating</button>}
      </div>
     </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    token: state.user.token,
    user:state.user.user
  }
}


export default connect(mapStateToProps, {updateRatingToState,saveUserToState} )(NewRatingContainer);