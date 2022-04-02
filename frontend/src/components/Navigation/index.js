import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {isLoaded && sessionLinks}
        </ul>
    );
};

export default Navigation;
