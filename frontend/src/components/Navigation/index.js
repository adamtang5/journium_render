import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../ProfileButton';
import WriteHollowIcon from '../utils/icons/WriteHollowIcon';
import HomeHollowIcon from '../utils/icons/HomeHollowIcon';
import BookmarksHollowIcon from '../utils/icons/BookmarksHollowIcon';
import ReadHollowIcon from '../utils/icons/ReadHollowIcon';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink to="/">
                    <HomeHollowIcon />
                </NavLink>
                <NavLink to="/lists">
                    <BookmarksHollowIcon />
                </NavLink>
                <NavLink to="/">
                    <ReadHollowIcon />
                </NavLink>
                <NavLink to="/new-story">
                    <WriteHollowIcon />
                </NavLink>
                <ProfileButton user={sessionUser} />
            </>
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
