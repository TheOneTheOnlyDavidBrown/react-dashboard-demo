import React from 'react';
import { Link } from 'react-router-dom';

// Functional stateless component
const UsernameDropdown = () => (
    <form className="form-inline my-2 my-lg-0">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tony Stark
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">Preferences</Link>
                  <Link className="dropdown-item" to="/">Account</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">Logout</Link>
              </div>
          </li>
        </ul>
    </form>
);
export default UsernameDropdown;
