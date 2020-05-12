import axios from "axios";

export default {
  getEmployees: function() {
    return axios
      .get("https://alper.dev/employees")
      .then(res => {
        const employees = res.data;
        return employees.map(emp => {
          return {
            firstName: emp.firstName,
            lastName: emp.lastName,
            department: emp.department
          };
        });
      });
  }
};


// import * as React from 'react';

// class GetEmployees extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             employees: []
//         };
//     }

//     componentDidMount() {
//         // let employees = [];
//         fetch("https://alper.dev/employees")
//             .then(response => {
//                 return response.json();
//             })
//             .then(json => {
//                 console.log(json);
//                 this.setState({employees: json})
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>First Name</th> 
//                                 <th>Last Name</th> 
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>First Name</td> 
//                                 <td>Last Name</td> 
//                             </tr>
//                         </tbody>
                            
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }


// export default GetEmployees;