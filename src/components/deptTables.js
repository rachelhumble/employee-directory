import React from "react";
import Employee from "../components/employee";

function DeptTables(props) {
  console.log(props.employees);
  return (
    <>
        <div class="dropdown">
            <button onClick={props.handleDeptSelect} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Department
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/department" value="Accounting">Accounting</a>
                <a className="dropdown-item" href="/department" value="Business Development">Business Development</a>
                <a className="dropdown-item" href="/department" value="Engineering">Engineering</a>
                <a className="dropdown-item" href="/department" value="Human Resources">Human Resources</a>
                <a className="dropdown-item" href="/department" value="Legal">Legal</a>
                <a className="dropdown-item" href="/department" value="Marketing">Marketing</a>
                <a className="dropdown-item" href="/department" value="Product Management">Product Management</a>
                <a className="dropdown-item" href="/department" value="Research and Development">Research and Development</a>
                <a className="dropdown-item" href="/department" value="Sales">Sales</a>
                <a className="dropdown-item" href="/department" value="Services">Services</a>
                <a className="dropdown-item" href="/department" value="Support">Support</a>
                <a className="dropdown-item" href="/department" value="Training">Training</a>
            </div>
        </div>
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
                <Employee key={employee.id} employee={employee}/>
                ))}
        </tbody>
        </table>
    </>
  )
}

export default DeptTables;