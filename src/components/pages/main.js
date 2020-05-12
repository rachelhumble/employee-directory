import * as React from "react";
import API from "../utils/API";
import Table from "../table";

class Main extends React.component {
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

  render() {
    return (
      <div>
        <h1 className="text-center">All Employees</h1>
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th> 
              </tr>
            </thead>
            <tbody>
              <Table employees={this.state.employees} />
            </tbody>
          </table>
        </div>
      </div>
    )
  };
}

export default Main
