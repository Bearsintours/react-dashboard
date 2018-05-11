import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => (
    <div className="header">
        <ul>
            <li>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </li>
            <li>dashboard</li>
            <li>search</li>
        </ul>
    </div>
)

export default Header;