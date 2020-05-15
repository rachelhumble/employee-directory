import React from "react";
import Employee from "../components/employee";

function Table(props) {
  console.log(props.employees);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Department</th> 
        </tr>
      </thead>
      <tbody>
            {props.employees.map(employee => (
              <Employee key={employee.id} employee={employee} />
            ))}
      </tbody>
    </table>
  )
}

export default Table;