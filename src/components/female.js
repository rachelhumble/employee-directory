import React from "react";
import Employee from "../components/employee";

const femaleEmployees = [];

function Female (props) {
    let i;
    for(i = 0; i < props.employees.length; i++) {
        if(props.employees[i].gender === "female") {
            femaleEmployees.push(props.employees[i]);
        }
    }

    return (
      <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
                  {femaleEmployees.map(employee => (
                    <Employee key={employee.id} employee={employee} />
                  ))}
            </tbody>
          </table>
        </>
      )
}

export default Female