import React from "react";

function Employee (props) {
  // console.log(props.employee);
    return (
          <tr>
            <th scope="row">{props.employee.id}</th>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.department}</td>
          </tr>
    )
  }

export default Employee;