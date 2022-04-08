import React from 'react';
import { useSelector } from 'react-redux';
import Splash from '../aggregate/Splash';
import Stories from '../aggregate/Stories';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let pageContent;
    if (sessionUser) {
        pageContent = (
            <Stories />
        );
    } else {
        pageContent = (
            <Splash />
        );
    }

    return (
        <>
            {isLoaded && pageContent}
        </>
    );
};

export default Navigation;
