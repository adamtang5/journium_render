import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginFormPage from '../../LoginFormPage';
import SignupFormPage from '../../SignupFormPage';
import './SplashHeaderBanner.css';

const SplashHeaderBanner = () => {
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
        <div id="large_banner" className="relative solid-bg">
            <div className="bounded centered">
                <div className="with_bkgd cushioned">
                    <div id="intro">
                        <h2 id="main_title">Bootcamp Life Is A Journey...</h2>

                        <h3 id="sub_title">Discover stories, thinking, and perspectives from budding developers and people around them.</h3>

                        <div className="flex-row">
                            <div className="auth_modal">
                                <button
                                    id="start_writing"
                                    onClick={() => setShowSignupModal(true)}
                                >Start Writing</button>
                                {showSignupModal && (
                                    <Modal onClose={() => setShowSignupModal(false)}>
                                        <SignupFormPage handleSwitchForm={switchToLoginForm} formTitle="Create an account and start writing." />
                                    </Modal>
                                )}
                                {showLoginModal && (
                                    <Modal onClose={() => setShowLoginModal(false)}>
                                        <LoginFormPage handleSwitchForm={switchToSignupForm} formTitle="Log in and start writing." />
                                    </Modal>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashHeaderBanner;
