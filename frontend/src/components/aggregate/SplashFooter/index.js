import GithubIcon from "../../utils/icons/GithubIcon";
import LinkedInSolidIcon from '../../utils/icons/LinkedInSolidIcon';
import CSS3SolidIcon from '../../utils/icons/CSS3SolidIcon';
import './SplashFooter.css';

const SplashFooter = () => {
    return (
        <footer className="about flex-column">
            <div className="project-name flex-row">
                <div className="github-icon">
                    <a href="https://github.com/adamtang5/aa_mod5_w16_express_react_solo" target="_blank">
                        <GithubIcon fill="#292929" />
                    </a>
                </div>
                <div className="project-name-text">
                    <a href="https://github.com/adamtang5/aa_mod5_w16_express_react_solo" target="_blank">
                        Journium Project
                    </a>
                </div>
                <div>
                    <span>, created by </span>
                </div>
                <div className="creator-name-text">
                    <a href="https://github.com/adamtang5" target="_blank">
                        Adam Tang
                    </a>
                </div>
                <div className="github-icon">
                    <a href="https://github.com/adamtang5" target="_blank">
                        <GithubIcon fill="#757575" />
                    </a>
                </div>
                <div className="linkedin-icon">
                    <a href="https://linkedin.com/in/adamtangx" target="_blank">
                        <LinkedInSolidIcon fill="#757575" />
                    </a>
                </div>
                <div>
                    <span>, created with</span>
                </div>
            </div>
            <div className="tech-used flex-row">
                <div className="featured-tech">
                    <a href="https://expressjs.com">
                        <img className="featured-tech-icons" src="/images/icons/expressjs-2.png" alt="Express.js" />
                    </a>
                </div>
                <div className="featured-tech">
                    <a href="https://postgresql.org">
                        <img className="featured-tech-icons" src="/images/icons/postgresql.png" alt="Postgresql" />
                    </a>
                </div>
                <div className="featured-tech">
                    <a href="https://sequelize.org/v5/manual/">
                        <img className="featured-tech-icons" src="/images/icons/sequelize-logo.png" alt="Sequelize" />
                    </a>
                </div>
                <div className="featured-tech-svg">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                        <CSS3SolidIcon fill="#292929" />
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default SplashFooter;
