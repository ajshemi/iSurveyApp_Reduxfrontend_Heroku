import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {saveUserToState} from '../Redux/actions'

class PopupForm extends Component {

  state = { 
      product_id:this.props.product.id,
      rating: this.props.product.rating
    }

  handleChange = (e) => {
    // console.log(e.target.value) 
    // console.log(this.state.product_id) 
    this.setState({ product_id:this.props.product.id,rating: e.target.value },()=>console.log(this.state))

  }
  handleSubmit = (e) => {
    e.preventDefault()
    //once set, send the new state to database
    // console.log(this.state)
    if (this.state.product_id > 0 && this.state.rating >0) {

      fetch(`http://localhost:3000/reviews/${this.props.product.review_id}`, {
        method: "PATCH",
        body: JSON.stringify({rating:this.state.rating}),
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
      this.props.handleClose(false)
    }
  }
  
  render() {
    const { rating,product_id } = this.state
    console.log(this.state)
    console.log(this.props.product.review_id)
    return (
      <div>
        <div>{`Rating: ${rating} Product_id:${product_id}`}</div>
        <input
          type='range'
          min={0}
          max={5}
          value={rating}
          onChange={this.handleChange}
        />
        <br />
        <Rating rating={this.state.rating} maxRating={5} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      token: state.user.token
    }
  }
  
export default connect(mapStateToProps,{saveUserToState})(PopupForm);
