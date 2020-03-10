import React, { Component } from 'react';
import RatingForm from '../components/RatingForm'
class ProductRatingForm extends Component {

    // handleSubmit=(e) => {
    //     e.preventDefault()
    //     this.props.handleInput(e)
    // }

    handleChange=(e) => {
        this.props.handleInput(e)
    }
    render() { 
        console.log(this.props.product)
        return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Product/Cookie</label>
                    <input onChange={this.handleChange} value={null} placeholder="selected product" />
                </div>
                {/* <div className="field"> */}
                    {/* <RatingForm/> */}
                {/* </div> */}
                <button type="submit" className="ui button">Submit</button>
            </form>
        </div>  );
    }
}
{/*onSubmit={this.handleSubmit} */} 
export default ProductRatingForm;