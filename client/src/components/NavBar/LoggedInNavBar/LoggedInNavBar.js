import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import AuthButton from '../../AuthButton';

import './LoggedInNavBar.css';


function LoggedInNavBar() {
  return(
    <nav className="navbar navbar-light navbar-expand-md">
      <Link className="navbar-brand" to="/">Food Chase</Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Meal Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/join">
              How to get involved
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
        <AuthButton />
      </div>
    </nav>
  );
  
}

export default LoggedInNavBar;