import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarData } from './navbarData';
import './navbar.css';

export const Navbar = () => {
    return(
        <>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}