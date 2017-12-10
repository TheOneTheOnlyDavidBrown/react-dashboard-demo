import React from 'react';
import NavItems from './NavItems.jsx';
import UsernameDropdown from './UsernameDropdown.jsx';
import { Link } from 'react-router-dom';

// Functional stateless component
export default () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Demo App</Link>
        <button
            className="navbar-toggler pull-xs-right hidden-lg-down-up hidden-md-up"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-collapse">
                ☰
        </button>
        <div className="collapse navbar-collapse navbar-toggleable-sm" id="navbar-collapse">
            <NavItems />
            <UsernameDropdown />
        </div>
    </nav>
);
