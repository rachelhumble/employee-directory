import React from "react";
import Employee from "../components/employee";

const engineering = [];

function Engineering (props) {
    let i;
    for(i = 0; i < props.employees.length; i++) {
        if(props.employees[i].department === "Engineering") {
            engineering.push(props.employees[i]);
        }
    }
    console.log(engineering);

    return (
      <>
        <br></br> 
        <br></br>
        <br></br> 
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
                  {engineering.map(employee => (
                    <Employee key={employee.id} employee={employee} />
                  ))}
            </tbody>
          </table>
        </>
      )
}

export default Engineering