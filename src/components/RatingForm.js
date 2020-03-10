import React, { Component } from 'react'
import { Rating } from 'semantic-ui-react'

class RatingForm extends Component {
    

    handleChange = (e) => 
    this.props.handleRatingChange(e)
    render() {
      const { rating } = this.props
  
      return (
        <div>
            <div>Rating: {rating}</div>
            <input
              id='inputrating'
              type='range'
              min={0}
              max={5}
              value={rating}
              onChange={this.handleChange}
            />
            <br />
            <Rating rating={rating} maxRating={5} />
        </div>
      
      )
    }
}

export default RatingForm


{/* <div>
<div>Rating: {rating}</div>
<input
  type='range'
  min={0}
  max={5}
  value={rating}
  onChange={this.handleChange}
/>
<br />
<Rating rating={this.state.rating} maxRating={5} />
</div> */}