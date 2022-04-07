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

    return (
        <div id="top_nav" className="fixed solid-bg">
            <div className="bounded centered">
                <div id="top_nav_flexbox" className="cushioned">
                    <SplashHeaderTopLeftLogo />
                    <div id="top_right_nav">
                        <Link to="/new-story" className="nav_btn">Write</Link>
                        <div className="auth_modal">
                            <span
                                className="nav_btn"
                                onClick={() => setShowLoginModal(true)}
                            >Sign In</span>
                            {showLoginModal && (
                                <Modal onClose={() => setShowLoginModal(false)}>
                                    <LoginFormPage />
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
                                    <SignupFormPage />
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
