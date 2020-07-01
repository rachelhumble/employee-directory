import React, { Component } from "react";
import API from "../utils/API";
import DeptTables from "../deptTables";
import Buttons from "../buttons";

class Gender extends Component {
  constructor() {
  super();

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: res })
      })
      .catch(err => console.log(err));
  } 

  handleDeptSelect = event => {
    const gender = event.target.value;
    this.setState({
      genderSelection: gender
    });

  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employees by Gender</h1>
        <Buttons handleDeptSelect={this.handleDeptSelect} employees={this.state.employees} gender={this.state.genderSelection}/>
        <DeptTables employees={this.state.employees} gender={this.state.genderSelection} />
      </div>
    )
  };
}

export default Gender
