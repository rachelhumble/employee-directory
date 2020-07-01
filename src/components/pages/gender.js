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

  handleGenderSelect = event => {
    const genderSelection = event.target.value;
    this.setState({
      gender: genderSelection
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">View Employees by Gender</h1>
        <Buttons handleGenderSelect={this.handleGenderSelect} employees={this.state.employees} gender={this.state.gender}/>
        <DeptTables employees={this.state.employees} gender={this.state.gender} />
      </div>
    )
  };
}

export default Gender
