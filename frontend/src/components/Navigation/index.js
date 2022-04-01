import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <ul>
            <li key="home">
                <NavLink activeClassName="active" to="/">
                    Home
                </NavLink>
            </li>
            {sessionUser ? (
                <li key="logout">
                    <NavLink to="/logout">Log Out</NavLink>
                </li>
            ) : (
                <>
                    <li key="login">
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li key="signup">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </>
            )}
        </ul>
    )
};

export default Navigation;
