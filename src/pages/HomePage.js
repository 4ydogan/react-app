import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import UserListComponent from '../components/UserListComponent'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar color='light' expand="md" light>
          <div>
            <NavbarBrand href='/'>React-Intro</NavbarBrand>
          </div>
         </Navbar>
         <UserListComponent />
      </div>
    )
  }
}
