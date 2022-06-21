import { Link } from 'react-router-dom';
import JourniumLogo from '../atomic/JourniumLogo';

const SplashHeaderTopLeftLogo = () => {
    return (
        <div id="top_left_logo">
            <Link to="/">
                <JourniumLogo />
                <span className="logo-text">Journium</span>
            </Link>
        </div>
    )
};

export default SplashHeaderTopLeftLogo;
