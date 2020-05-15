import React from "react";

function Buttons(props) {
    return (
        <>
        <br></br>
            <button onClick={props.handleDeptSelect} value="Accounting" type="button" className="btn btn-primary">Accounting</button>
            <button onClick={props.handleDeptSelect} value="Business Development" type="button" className="btn btn-secondary">Business Development</button>
            <button onClick={props.handleDeptSelect} value="Engineering" type="button" className="btn btn-success">Engineering</button>
            <button onClick={props.handleDeptSelect} value="Human Resources" type="button" className="btn btn-danger">Human Resources</button>
            <button onClick={props.handleDeptSelect} value="Legal" type="button" className="btn btn-warning">Legal</button>
            <button onClick={props.handleDeptSelect} value="Marketing" type="button" className="btn btn-info">Marketing</button>
            <button onClick={props.handleDeptSelect} value="Product Management" type="button" className="btn btn-success">Product Management</button>
            <button onClick={props.handleDeptSelect} value="Research and Development" type="button" className="btn btn-dark">Research and Development</button>
            <button onClick={props.handleDeptSelect} value="Sales" type="button" className="btn btn-primary">Sales</button>
            <button onClick={props.handleDeptSelect} value="Services" type="button" className="btn btn-secondary">Services</button>
            <button onClick={props.handleDeptSelect} value="Support" type="button" className="btn btn-success">Support</button>
            <button onClick={props.handleDeptSelect} value="Training" type="button" className="btn btn-danger">Training</button>
        </>
    )
}

export default Buttons