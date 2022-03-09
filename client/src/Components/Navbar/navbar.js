import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import { NavbarData } from './navbarData';
import './navbar.css';

export const Navbar = (props) => {

    function logout() {
        axios({
          method: "POST",
          url:"/logout",
        })
        .then((response) => {
           props.token()
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}

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
                    <button onClick={logout} >log out</button>
                </ul>
            </nav>
        </>
    )
}