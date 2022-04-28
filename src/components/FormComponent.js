import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class FormComponent extends Component {

    constructor(props){
      super(props);
      this.state = {
        id : uuid4(),
        name : "",
        surname : "",
        username : ""
      }
    }

  render() {
    return (
    <Modal fade={false} isOpen={this.props.visible}>
      <ModalHeader>Do you want user?</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email"/>
            </FormGroup>
          </Form>
        </ModalBody>
      <ModalFooter>
        <button className='btn btn-success'>Add</button>
        <button className='btn btn-danger' onClick={() => this.props.hide()}>Cancel</button>
      </ModalFooter>
    </Modal>
    )
  }
}
