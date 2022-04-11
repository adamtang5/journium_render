import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { Link } from 'react-router-dom';
import Avatar from '../../atomic/Avatar';
import DisplayName from '../../atomic/DisplayName';
import StoryTitle from '../../atomic/StoryTitle';
import ResourceDate from '../../atomic/ResourceDate';
import LoginFormPage from '../../LoginFormPage';
import SignupFormPage from '../../SignupFormPage';

const SplashMainFeaturedStoryCard = ({ story, i }) => {
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
        <div className="auth_modal">
            <div
                id={`trending_${i}`}
                className="trending_article"
                onClick={() => setShowLoginModal(true)}
            >
                <div className="top_left_rank">0{i}</div>
                <div className="article">
                    <div className="article_author">
                        {/* <Link to={`/users/${story.userId}`}> */}
                        <Avatar user={story.User} />
                        {/* </Link> */}
                        <div className="author_org">
                            {/* <Link className="author_name" to={`/users/${story.userId}`}> */}
                            <DisplayName user={story.User} />
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className="article_title">
                        {/* <Link to={`/stories/${story.id}`}> */}
                        <StoryTitle story={story} />
                        {/* </Link> */}
                    </div>
                    <div className="article_metrics">
                        <ResourceDate resource={story} />
                    </div>
                </div>
            </div>
            {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                    <LoginFormPage
                        handleSwitchForm={switchToSignupForm}
                        formTitle="Log in and start reading."
                    />
                </Modal>
            )}
            {showSignupModal && (
                <Modal onClose={() => setShowSignupModal(false)}>
                    <SignupFormPage
                        handleSwitchForm={switchToLoginForm}
                        formTitle="Join Journium and start reading."
                    />
                </Modal>
            )}
        </div>
    )
};

export default SplashMainFeaturedStoryCard;
