import React, { Component } from "react"
import RatingForm from './RatingForm'
import { Button, Modal } from 'semantic-ui-react'
import PopupForm from './PopupForm'
import {saveUserToState} from '../Redux/actions'
import { connect } from "react-redux"




class ProductItem extends Component {

    // state = { open: false }
  



    state = { 
        rating: 0,
        product:{},
        addToggle: false,
        open:false
     }    


    handleShow = () => this.setState({ open: true })
    // close = () => this.setState({ open: false })


    handleClose=(arg) => {
        this.setState({open:arg})
    }

  
    handleRatingChange=(e) => {
        // console.log(e)
        this.setState({
             rating: e.target.value,
            }
            // ,()=>this.props.handleSetRating(this.state.rating)
            //  ,() => console.log(this.state.rating)
            )
        }


    handleDeleteReview=() => {
        let review_id=this.props.product.review_id
        console.log(review_id)
        console.log(this.props.token)
        if(this.props?.user){    
            // console.log(this.props.user)
            // console.log(review_id)
            fetch(`http://localhost:3000/reviews/${review_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `bearer ${this.props.token}`
            }
            })
            .then(res => res.json())
            .then((review) => {
            console.log(review)
            this.props.saveUserToState(review)
            }
            )
        }
        }
        

    // handleDeleteClick=(e) => {
    //         this.props.handleDeleteReview(this.props.product.review_id)
    //         // console.log(props.user.username)
    //         // console.log(props.product)
    //       }
    handleAdd=(e) => {
        // console.log(this.props)
            this.setState({
            product:this.props.product,
            addToggle: true
        }
        ,()=> {
        return (
            
            this.props.handleProductSelection(this.state.product,this.state.rating,this.state.addToggle))
        }
        )
        

    // this.setState({addToggle:true})
    // ,() => console.log(this.state.product)

    }
    render(){
    // console.log(parseInt(this.state.rating))
    // console.log(parseInt(this.state.rating) === 0)
    // console.log(this.state.addToggle)
    return(
        // <div>
        <>
        <tr>
            <td>{this.props.product.name}</td>
            {/* <td><RatingForm rating={this.state.rating} handleRatingChange={this.handleRatingChange}/></td> */}
            <td>{this.props.product.rating}</td>
            {/* <td><button onClick={this.handleAdd} type="button" className={`ui ${(parseInt(this.state.rating) ===0 || this.state.addToggle) ? 'disabled' : 'active'} button`} >Add</button></td> */}
            <td><button onClick={this.handleShow} type="button" className="ui button">Update</button></td>
            <td><button onClick={this.handleDeleteReview} type="button" className="ui button">Delete</button></td>
        </tr>
            <Modal size='mini' open={this.state.open} onClose={this.handleClose}>
                <Modal.Header>Update Your Rating</Modal.Header>
                <Modal.Content>
                <p>Go ahead adjust your product rating</p>
                </Modal.Content>
                <Modal.Actions>
                    <PopupForm product={this.props.product} handleClose={this.handleClose}/>
                </Modal.Actions>
            </Modal>
       </>
    )
}
}

export default connect(null,{saveUserToState})(ProductItem)
// onClick={parseInt(this.state.rating) === 0 ? null : this.handleAdd} 
// className={`ui ${this.state.rating ===0 ? 'disabled' : ""} button`}