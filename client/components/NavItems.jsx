import React from 'react';
import NavItem from './NavItem.jsx';

const NavItems = () => (
    <ul className="navbar-nav mr-auto">
        <NavItem to="/dashboard" text="Dashboard" />
        <NavItem to="/buy-domains" text="Buy Domains" />
        <NavItem to="/search-domains" text="Check Domain Registry" />
    </ul>
);
export default NavItems;
