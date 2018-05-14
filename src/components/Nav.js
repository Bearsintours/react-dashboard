import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Nav.scss';

const Nav = () => (
    <div className="nav">
        <ul className="nav__btns">      
            <NavLink 
                className="nav__link" 
                to="/day" 
                activeClassName="is-active">
                Day
            </NavLink>     
            <NavLink 
                className="nav__link" 
                to="/week" activeClassName="is-active">
                Week
            </NavLink>   
            <NavLink 
                className="nav__link" 
                to="/month" 
                activeClassName="is-active">
                Month
            </NavLink>   
        </ul>
    </div>
)

export default Nav;