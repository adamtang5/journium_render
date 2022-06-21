import { Link } from 'react-router-dom';
import JourniumLogo from '../utils/JourniumLogo';

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
