import React, { Component } from 'react'
import { Table } from 'reactstrap'
import FormComponent from './FormComponent'

export default class UserListComponent extends Component {
  render() {
    return (
      <div className='container'>
        <FormComponent />
        <button className='btn btn-primary'>Add</button>
        {this.props.users.length > 0 ? (<Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.username}</td>
              <td>
                <button className='btn btn-warning'>Edit</button>
                &nbsp;
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>) : null} 
      </div>
    )
  }
}
