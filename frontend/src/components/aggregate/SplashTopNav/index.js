import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { Link } from 'react-router-dom';
import SplashHeaderTopLeftLogo from '../SplashHeaderTopLeftLogo';
import LoginFormPage from '../../LoginFormPage';
import SignupFormPage from '../../SignupFormPage';
import './SplashTopNav.css';

const SplashTopNav = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);

    const switchToSignupForm = e => {
        e.preventDefault();
        setShowLoginModal(false);
        setShowSignupModal(true);
    };

    const switchToLoginForm = e => {
        e.preventDefault();
        setShowSignupModal(false);
        setShowLoginModal(true);
    };

    return (
        <div id="top_nav" className="fixed solid-bg">
            <div className="bounded centered">
                <div id="top_nav_flexbox" className="cushioned">
                    <SplashHeaderTopLeftLogo />
                    <div id="top_right_nav">
                        <div className="auth_modal">
                            <span
                                className="nav_btn"
                                onClick={() => setShowLoginModal(true)}
                            >Sign In</span>
                            {showLoginModal && (
                                <Modal onClose={() => setShowLoginModal(false)}>
                                    <LoginFormPage
                                        handleSwitchForm={switchToSignupForm}
                                        formTitle="Welcome back."
                                    />
                                </Modal>
                            )}
                        </div>
                        <div className="auth_modal">
                            <button
                                id="get_started"
                                onClick={() => setShowSignupModal(true)}
                            >Get Started</button>
                            {showSignupModal && (
                                <Modal onClose={() => setShowSignupModal(false)}>
                                    <SignupFormPage
                                        handleSwitchForm={switchToLoginForm}
                                        formTitle="Join Journium."
                                    />
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashTopNav;
