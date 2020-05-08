import * as React from 'react';


class GetEmployees extends React.Component {
    constructor() {
        super();

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        let employees = [];
        fetch("https://alper.dev/employees")
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
                employees.push(json);
                return employees
            })
    }

    render() {
        return (
            <div>
                {/* {
                    employees.map((emp => (
                        <div key={emp.id}> {emp.firstName}</div>
                    )))
                } */}
            </div>
        );
    }
}

// function GetEmployees() {
//     const [employees, setEmployees] = useState();
//     useEffect(() => {
//         fetch("https://alper.dev/employees")
//         .then(response => {
//             return response.json();
//         })
//             .then(json => {
//             console.log(json);
//             setEmployees(json);
//             });
//     }, [employees])
//             return (
//                 <div>
// 				employee list:
// 				{
// 					employees.map((emp => (
// 						<div key={emp.id}> {emp.firstName}</div>
// 					)))
// 				}
// 			    </div>
//             )
// }

export default GetEmployees;