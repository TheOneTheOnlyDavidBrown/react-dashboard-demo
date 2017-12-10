import React from 'react';
import { NavLink } from 'react-router-dom';
// Functional stateless component
const NavItem = (props) => (
    <li className="nav-item">
        <NavLink
            activeStyle={{ fontStyle: 'bold' }}
            className="nav-link"
            to={props.to}>
                {props.text}
        </NavLink>
    </li>
);
export default NavItem;
