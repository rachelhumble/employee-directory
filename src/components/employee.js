import React from "react";

class Employee extends React.Component {
  render() {
    return(
        <tbody>
          <tr>
            <th scope="row">{this.props.employee.id}</th>
            <td>{this.props.employee.firstName} {this.props.employee.lastName}</td>
            <td>{this.props.employee.address.street}, {this.props.employee.address.city} {this.props.employee.address.state}, {this.props.employee.address.zip}</td>
          </tr>
        </tbody>
    )
  }
}

export default Employee;