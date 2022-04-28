import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        {
          id : 1,
          name : 'Mustafa',
          surname : 'Aydoğan',
          username : '4ydogan'
        },
        {
          id : 2,
          name : 'Nikola',
          surname : 'Tesla',
          username : 'tesla'
        },
        {
          id : 3,
          name : 'Elon',
          surname : 'Musk',
          username : 'ElonMusk'
        },
        {
          id : 4,
          name : 'Jeff',
          surname : 'Bezos',
          username : 'JeffBezos'
        },
        {
          id : 5,
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
