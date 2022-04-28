import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'
import { v4 as uuidv4 } from 'uuid';

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
  }


  render() {
    return (
      <div>
        <Navbar color='light' expand="md" light>
          <div>
            <NavbarBrand href='/'>React-Intro</NavbarBrand>
          </div>
         </Navbar>
         <UserListComponent users={this.state.users} />
      </div>
    )
  }
}
