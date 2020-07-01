import React from "react";

function Employee (props) {
    return (
          <tr>
            <th scope="row"><img src={props.employee.img} alt={props.employee.id}></img></th>
            <td>{props.employee.id}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.gender}</td>
          </tr>
    )
  }

export default Employee;