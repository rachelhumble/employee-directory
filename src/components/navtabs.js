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
          to="/lastname"
          className={location.pathname === "/lastname" ? "nav-link active" : "nav-link"}>
            Sort by Last Name
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
