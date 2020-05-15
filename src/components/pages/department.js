import React, { Component } from "react";
import API from "../utils/API";
import DeptTables from "../deptTables";
import Buttons from "../buttons";

class Department extends Component {
  constructor() {
  super();

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res);
        this.setState({ employees: res })
      })
      .catch(err => console.log(err));
  } 

  handleDeptSelect = event => {
    const dept = event.target.value;
    this.setState({
      department: dept
    });
    console.log(this.state.department); 
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employees by Department</h1>
        <Buttons handleDeptSelect={this.handleDeptSelect} employees={this.state.employees} department={this.state.department}/>
        <DeptTables employees={this.state.employees} department={this.state.department} />
      </div>
    )
  };
}

export default Department
