import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
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
          to="/contact"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/PortFolio"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          PortFolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/MyProject"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          MyProjects
        </Link>
      </li>
      
      
    </ul>
  );
}

export default Nav;