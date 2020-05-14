import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" 
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/department"
          className={location.pathname === "/department" ? "nav-link active" : "nav-link"}>
            Sort by Department
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
