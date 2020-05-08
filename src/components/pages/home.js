import React from "react";
import GetEmployees from "../utils/API";

function Home() {
  return (
    <div>
      <h1>All Employees</h1>
        <GetEmployees />
    </div>
  );
}

export default Home;
