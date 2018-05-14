import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';
import FaBars from 'react-icons/lib/fa/bars';
import FaSearch from 'react-icons/lib/fa/search';

const Header = () => (
    <div className="header">
        <ul>
            <li className="nav__icon">
                <FaBars size={20}/>
            </li>
            <li className="nav__title">dashboard</li>
            <li className="nav__search">
                <FaSearch size={20}/>
            </li>
        </ul>
    </div>
)

export default Header;