import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => (
    <div className="header">
        <ul>
            <li className="nav__icon">
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </li>
            <li className="nav__title">dashboard</li>
            <li className="nav__search">search</li>
        </ul>
    </div>
)

export default Header;