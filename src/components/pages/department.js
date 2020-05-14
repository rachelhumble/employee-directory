import React, { Component } from "react";
import API from "../utils/API";
import DeptTables from "../deptTables";

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
      deptartment: dept
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employees by Department</h1>
        <DeptTables employees={this.state.employees} handleDeptSelect={this.handleDeptSelect} />
      </div>
    )
  };
}

export default Department
