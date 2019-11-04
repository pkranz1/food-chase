import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function LoggedOutNavigation() {
  return(
    <nav className="navbar navbar-light navbar-expand-md">
      <Link className="navbar-brand" to="/">Food Chase</Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/signup/customer">
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">
              Sign in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
  
}

export default LoggedOutNavigation;