import React from 'react';
import { NavLink } from 'react-router-dom';
// Functional stateless component
export default (props) => (
    <li className="nav-item">
        <NavLink
            activeStyle={{ fontStyle: 'bold' }}
            className="nav-link"
            to={props.to}>
                {props.text}
        </NavLink>
    </li>
);
