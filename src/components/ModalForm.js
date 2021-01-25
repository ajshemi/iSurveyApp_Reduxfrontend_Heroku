import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'



class ModalForm extends Component {
    state = { open: false }
  
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, size } = this.state
  
      return (
        <div>
          <Button onClick={this.show}>Mini</Button>
          <button class="ui button">Mini</button>
          <Modal size={size} open={open} onClose={this.close}>
            <Modal.Header>Delete Your Account</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete your account</p>
            </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }
  
  export default ModaForm;