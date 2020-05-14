import React from "react";
import Support from "../components/support";
import Training from "../components/training";

function SortedEmployees (props) {
  if(props.employee.department === "Support") {
    return (
        <div>
            <Support key={props.employee.id} employee={props.employee} />
        </div>
    )
  } else if(props.employee.department === "Training") {
    return (
        <div>
            <Training key={props.employee.id} employee={props.employee} />
        </div>
    )
  } else {
    return (
          <tr>
            <th scope="row">{props.employee.id}</th>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.department}</td>
          </tr>
    )
  }
}

export default SortedEmployees;