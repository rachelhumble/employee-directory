import React from "react";
import Female from "./female";
import Male from "./male";
// import Accounting from "../components/accounting";
// import BusinessDev from "../components/businessdev";
// import Engineering from "../components/engineering";
// import HumanResources from "../components/humanresources";
// import Legal from "../components/legal";
// import Marketing from "../components/marketing";
// import ProductManagement from "../components/productmanagement";
// import ResearchAndDev from "../components/researchanddev";
// import Sales from "../components/sales";
// import Services from "../components/services";
// import Support from "../components/support";
// import Training from "../components/training";


function DeptTables(props) {
    if(props.gender === "female") {
        return (
            <>
                <br></br><br></br>
                <Female employees={props.employees} />
            </>
          )
    } else if(props.gender === "male") {
        return (
            <>
                <br></br><br></br>
                <Male employees={props.employees} />
            </>
          )
    // } else if(props.department === "Engineering") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Engineering employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Human Resources") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <HumanResources employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Legal") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Legal employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Marketing") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Marketing employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Product Management") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <ProductManagement employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Research and Development") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <ResearchAndDev employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Sales") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Sales employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Services") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Services employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Support") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Support employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    // } else if(props.department === "Training") {
    //     return (
    //         <>
    //             <table className="table table-striped">
    //             <tbody>
    //                 <Training employees={props.employees} />
    //             </tbody>
    //             </table>
    //         </>
    //         )
    } else {
        return (
            <>
                <br></br> 
                <br></br>
                <br></br> 
                <div>(Select Gender to Sort)</div>
            </>
        )
    }
}

export default DeptTables;