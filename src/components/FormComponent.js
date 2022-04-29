import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class FormComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      id : null,
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

  updateUSer(){
    this.props.editUser(
      this.state.id,
      this.state.name,
      this.state.surname,
      this.state.username
    );
    
    this.props.hide();    
  }

  componentDidMount(){
    this.setState({
      id : this.props.user.id,
      name : this.props.user.name,
      surname : this.props.user.surname,
      username : this.props.user.username
    });
  }

  render() {
    return (
    <Modal fade={false} isOpen={this.props.visible}>
      <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input value={this.state.name} id="name" name="name" type="text" onChange={(e) => this.setState({name : e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="surname">Surname</Label>
              <Input value={this.state.surname} id="surname" name="surname" type="text" onChange={(e) => this.setState({surname : e.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input value={this.state.username} id="username" name="username" type="text" onChange={(e) => this.setState({username : e.target.value})}/>
            </FormGroup>
          </Form>
        </ModalBody>
      <ModalFooter>
        {
          this.props.user.id  
            ? <button className='btn btn-success' onClick={() => {this.updateUSer()}}>Update</button> 
            : <button className='btn btn-success' onClick={() => {this.onSubmit()}}>Add</button>
        }
        <button className='btn btn-danger' onClick={() => this.props.hide()}>Cancel</button>
      </ModalFooter>
    </Modal>
    )
  }
}
