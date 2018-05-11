import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div>
        <ul>
            <li>
                <NavLink to="/day" activeClassName="is-active">Day</NavLink>
            </li>
            <li>
                <NavLink to="/" activeClassName="is-active">Week</NavLink>
            </li>
            <li>
                <NavLink to="/month" activeClassName="is-active">Month</NavLink>
            </li>
        </ul>
    </div>
)

export default Nav;