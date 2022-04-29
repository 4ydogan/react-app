import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        {
          id : uuidv4(),
          name : 'Mustafa',
          surname : 'Aydoğan',
          username : '4ydogan'
        },
        {
          id : uuidv4(),
          name : 'Nikola',
          surname : 'Tesla',
          username : 'tesla'
        },
        {
          id : uuidv4(),
          name : 'Elon',
          surname : 'Musk',
          username : 'ElonMusk'
        },
        {
          id : uuidv4(),
          name : 'Jeff',
          surname : 'Bezos',
          username : 'JeffBezos'
        },
        {
          id : uuidv4(),
          name : 'Bill',
          surname : 'Gates',
          username : 'BillGates'
        }
      ]
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser = (name, surname, username) => {
    if(name, surname, username){
      const  users = [...this.state.users];
      users.push({
        id : uuidv4(),
        name : name,
        surname : surname,
        username : username
      });

      this.setState({users});

      toast(`${name} adlı kullanıcı eklendi.`);
    }
    else{
      alert("Geçersiz input!")
    }
  }

  deleteUser = (obj) => {
    const users = this.state.users.filter( (user) => {
      return user.id !== obj.id;
    });
    this.setState({users});
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar color='light' expand="md" light>
          <div>
            <NavbarBrand href='/'>React-Intro</NavbarBrand>
          </div>
         </Navbar>
         <UserListComponent users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser}/>
      </div>
    )
  }
}
