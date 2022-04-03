import './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div id="large_banner" className="relative solid-bg">
            <div className="bounded centered">
                <div className="with_bkgd cushioned">
                    <div id="intro">
                        <h2 id="main_title">Stay Curious.</h2>

                        <h3 id="sub_title">Discover stories, thinking, and perspectives from budding developers and people around them.</h3>

                        <div className="flex-row">
                            <a href="/new-story"><button id="start_writing">Start Writing</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderBanner;
