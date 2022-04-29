import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class FormComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      surname : "",
      username : ""
    }
  }

  onSubmit(){
    this.props.addUser(
      this.state.name,
      this.state.surname,
      this.state.username
    );
    
    this.props.hide();    
  }

  render() {
    return (
    <Modal fade={false} isOpen={this.props.visible}>
      <ModalHeader>User Informations</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input id="name" name="name" type="text" value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="surname">Surname</Label>
              <Input id="surname" name="surname" type="text" value={this.state.surname} onChange={(e) => this.setState({surname : e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.setState({username : e.target.value})}/>
            </FormGroup>
          </Form>
        </ModalBody>
      <ModalFooter>
        <button className='btn btn-success' onClick={() => {
          this.onSubmit()}}>Add</button>
        <button className='btn btn-danger' onClick={() => this.props.hide()}>Cancel</button>
      </ModalFooter>
    </Modal>
    )
  }
}
