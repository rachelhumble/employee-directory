import React from "react";
import Employee from "../components/employee";

const support = [];

function Support (props) {
    let i;
    for(i = 0; i < props.employees.length; i++) {
        if(props.employees[i].department === "Support") {
            support.push(props.employees[i]);
        }
    }
    console.log(support);

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
                    {support.map(employee => (
                    <Employee key={employee.id} employee={employee} />
                    ))}
            </tbody>
            </table>
        </>
      )
}

export default Support