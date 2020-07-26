import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const NavBarButtonContainer = ({ children, to }) => {
    return (
        <Link to={to}>
            <button className={`nav__button`} >
                {children}
            </button>
        </Link>
    )
}


export const NavButton = ({ children, to }) => {
    return (
        <Link to={to}>
            {children}
        </Link>
    )
}