import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div id="top_nav" className="fixed solid-bg">
            <div className="bounded centered">
                <div id="top_nav_flexbox" className="cushioned">
                    <div id="top_left_logo">
                        <Link to="/">
                            <img src="/images/icons/journium-logo.svg" alt="Journium Logo" />
                        </Link>
                    </div>

                    <div id="top_right_nav">
                        <Link to="/new-story" className="nav_btn">Write</Link>
                        <Link to="/login" className="nav_btn">Sign In</Link>
                        <Link to="/signup"><button id="get_started">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopNav;
