import React, { Component } from 'react';
import './Nav.css'
import { NavBarButtonContainer } from '../Buttons/NavButtons';
import hydrosLogo from '../../Images/hydrosLogo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar bg-dark'>
                <div className='hydros__banner'>
                    <img className='hydros__logo' src={hydrosLogo} />
                    {/* <i className="fa fa-arrows-alt mx-2" id="FullScreenButton"></i> */}
                </div>
                <div className='navbar__header'>
                    Welcome JNelson!
                </div>
                <div className='navbar__button__container'>
                    <NavBarButtonContainer to='/'>
                        <i className="fa fa-fw fa-home"></i>
                        <span>Home</span>
                    </NavBarButtonContainer>
                    <NavBarButtonContainer to='/adjudications'>
                        <i className="fa fa-fw fa-gavel"></i>
                        <span>Adjudications</span>
                    </NavBarButtonContainer>
                    <NavBarButtonContainer to='/logs'>
                        <i className="fa fa-fw fa-sort-numeric-desc"></i>
                        <span>Lithology</span>
                    </NavBarButtonContainer>
                    <NavBarButtonContainer to='/userStory'>
                    <i className="fa fa-fw fa-sort"></i>
                        <span>Submit UserStory</span>
                    </NavBarButtonContainer>
                </div>
            </div >
        )
    }
}
