// import GithubIcon from "../../utils/icons/GithubIcon";
// import LinkedInSolidIcon from '../../utils/icons/LinkedInSolidIcon';
import './SplashFooter.css';

const SplashFooter = () => {
    return (
        <footer className="about flex-column">
            <div className="project-name flex-row">
                <div className="github-icon">
                    <a href="https://github.com/adamtang5/aa_mod5_w16_express_react_solo" target="_blank">
                        {/* <GithubIcon fill="#292929" /> */}
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/github/github-original.svg" alt="project on github" />
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
                        {/* <GithubIcon fill="#757575" /> */}
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/github/github-original.svg" alt="project on github" />
                    </a>
                </div>
                <div className="linkedin-icon">
                    <a href="https://linkedin.com/in/adamtangx" target="_blank">
                        {/* <LinkedInSolidIcon fill="#757575" /> */}
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/linkedin/linkedin-original.svg" alt="project on github" />
                    </a>
                </div>
                <div>
                    <span>, created with</span>
                </div>
            </div>
            <div className="tech-used flex-row">
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Vanilla JS" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.JS" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node.js" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgresql" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                </div>
                <div className="featured-tech">
                    <img className="featured-tech-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
                </div>
            </div>
        </footer>
    )
};

export default SplashFooter;
