import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import LoginFormPage from '../LoginFormPage';
import SignupFormPage from '../SignupFormPage';
import './TopNav.css';

const TopNav = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div id="top_nav" className="fixed solid-bg">
            <div className="bounded centered">
                <div id="top_nav_flexbox" className="cushioned">
                    <div id="top_left_logo">
                        <Link to="/">
                            <img src="/images/icons/journium-logo.svg" alt="Journium Logo" />
                            <span className="logo-text">Journium</span>
                        </Link>
                    </div>

                    <div id="top_right_nav">
                        <Link to="/new-story" className="nav_btn">Write</Link>
                        <div className="auth_modal">
                            <span
                                className="nav_btn"
                                onClick={() => setShowModal(true)}
                            >Sign In</span>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <LoginFormPage />
                                </Modal>
                            )}
                        </div>
                        <div className="auth_modal">
                            <button
                                id="get_started"
                                onClick={() => setShowModal(true)}
                            >Get Started</button>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
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

export default TopNav;
