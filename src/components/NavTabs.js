import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Employees"
          className={location.pathname === "/Employees" ? "nav-link active" : "nav-link"}
        >
          Employees
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      
      
    </ul>
  );
}

export default NavTabs;
