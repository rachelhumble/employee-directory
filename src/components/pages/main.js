import React, { Component } from "react";
import API from "../utils/API";
import Table from "../table";

class Main extends Component {
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

  render() {
    return (
      <div>
        <h1 className="text-center">All Employees</h1>
        <Table employees={this.state.employees} />
      </div>
    )
  };
}

export default Main
