import React from "react";
import Employee from "../components/employee";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
    }
}

render() {
    console.log(this.state.employees);
    return (
        <div>
            <tr>
                {this.state.employees.map(employee => (
                    <Employee key={employee.id} employee={employee}/>
                ))}
            </tr>
        </div>
    )
}
}

export default Table;