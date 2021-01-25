import React,{Component} from 'react';
import { Modal,Button,Card} from 'semantic-ui-react'
import {GoTrashcan} from 'react-icons/go'
import {FaEdit} from 'react-icons/fa'
import PopupForm from './PopupForm'




class Product extends Component {

    state = { 
      open: false
    }

    //when the FaEdit button is clicked this.state.open is set to true
    show = () => this.setState({ open: true })

    //onSubmit in the PopupForm.js calls the handleSubmit function
    //the handleSubmit updates the database and dispatches an action to update app state
    //and last but not least we pass in 'false' to the handleClose function as an argument
    //handleClose sets this.state.open to 'false'
    handleClose=(arg) => {
      console.log(arg)
      // this.setState({open:arg})
    }

    // close = () => this.setState({ open: false })
    // console.log(this.props)
    
    handleDeleteClick=(e) => {
      this.props.handleDeleteReview(this.props.product.review_id)
      // console.log(props.user.username)
      // console.log(props.product)
    }


    // renderRatingForm=(e) => {
    //   return(<div>
    //    <PopupForm/> 
    //    <ModalExampleSize open='true'/>
    //   </div>)
    // }
    // const handleUpdateClick=(e) => {
  
    //     props.handleUpdateReview(props.product.review_id)

    //   // console.log(props.user.username)
    //   // console.log(props.product)
    // }
  render(){

    let arrayOfIngredients=this.props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )

    return(
      <>
      <div className="ratedcookies">
      <Card>
          {/* <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg'  wrapped ui={false} /> */}
          <Card.Content>
          <Card.Header>{`|${this.props.product.name}`}</Card.Header>
          {/* <Card.Meta>Joined in 2016</Card.Meta> */}
              <Card.Description>
              <ul>{arrayOfIngredients}</ul>
              </Card.Description>
              <h2>{this.props.user ? `Your Rating is ${this.props.product.rating}` : ''}</h2>
              <div>
              {this.props.user ? <Button onClick={this.show/*handleUpdateClick*/} className="ui button blue"><FaEdit/></Button> : ''}
              {this.props.user ? <button onClick={this.handleDeleteClick} className="ui button red"><GoTrashcan/></button> : ''}
              {/* <button class="ui secondary button">Secondary</button> */}
              </div>
          </Card.Content>
          {/* <button onClick={handleDeleteClick} className="ui button red">Delete</button> */}
  
      </Card> 
     </div>
      <div className="modalrating">
        <Modal size='mini' open={this.state.open} onClose={this.handleClose}>
              <Modal.Header>Update Your Rating</Modal.Header>
              <Modal.Content>
                <p>Go head Adjust your rating for this product</p>
              </Modal.Content>
              <Modal.Actions>
                <PopupForm product={this.props.product} handleClose={this.handleClose}/>
              </Modal.Actions>
        </Modal>  
       </div>
       </>
  
    )
  }
}
export default Product

