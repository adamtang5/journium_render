import { useSelector } from 'react-redux';
import SplashMainFeaturedStoryCard from './SplashMainFeaturedStoryCard';
import SplashMainFeaturedHeader from './SplashMainFeaturedHeader';
import './SplashMain.css';

const SplashMain = () => {
    const stories = useSelector(state => Object.values(state.stories));
    let featuredStories = stories.filter(story => {
        return story.imageUrl !== "";
    });
    featuredStories = featuredStories.slice(featuredStories.length - 6);
    featuredStories.reverse();

    return (
        <main className="relative white-bg">

            <div id="content_links" className="bounded centered">
                <div id="featured" className="cushioned">
                    <SplashMainFeaturedHeader />
                    <div id="featured_links">

                        {featuredStories.map((featuredStory, i) => <SplashMainFeaturedStoryCard key={i} story={featuredStory} i={i + 1} />)}

                        {/* <div id="trending_1" className="trending_article">
                            <div className="top_left_rank">01</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*bJaQVXydvTUKte67XWoeRQ.jpeg"
                                            alt="Sienna Mae Gomez" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>Sienna Mae Gomez</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>Sienna Mae Gomez: Reflections from an 18-Year Old Me</h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Jan 22</div>
                                    <span>·</span>
                                    <div className="time_consumed">15 min read</div>
                                </div>
                            </div>
                        </div>

                        <div id="trending_2" className="trending_article">
                            <div className="top_left_rank">02</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*yAqDFIFA5F_NXalOJKz4TA.png"
                                            alt="ITNEXT" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>The Devops Guy</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="/">
                                            <h4>ITNEXT</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>How I reversed a NodeJS malware and found the author</h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Jan 30</div>
                                    <span>·</span>
                                    <div className="time_consumed">4 min read</div>
                                    <div className="member_only_content">
                                        <i className="fas fa-star"></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="trending_3" className="trending_article">
                            <div className="top_left_rank">03</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*4C8qpSEEu7Q1p9wWImUgMw.jpeg"
                                            alt="Index" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>Alex Chesser</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="/">
                                            <h4>Index</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>Career Advice Nobody Gave Me: Never Ignore a Recruiter</h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Feb 1</div>
                                    <span>·</span>
                                    <div className="time_consumed">11 min read</div>
                                </div>
                            </div>
                        </div>

                        <div id="trending_4" className="trending_article">
                            <div className="top_left_rank">04</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/2*Vjiwqoib1HcKLdkM1xwp_g.jpeg"
                                            alt="Andre Cronje" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>Andre Cronje</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>Not so smart contracts</h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Jan 27</div>
                                    <span>·</span>
                                    <div className="time_consumed">3 min read</div>
                                </div>
                            </div>
                        </div>

                        <div id="trending_5" className="trending_article">
                            <div className="top_left_rank">05</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*5D9oYBd58pyjMkV_5-zXXQ.jpeg"
                                            alt="Level Up Coding" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>Clement Brian</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="/">
                                            <h4>Level Up Coding</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>6 Programming Languages You Should Not Learn (and What To Learn Instead)
                                        </h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Jan 23</div>
                                    <span>·</span>
                                    <div className="time_consumed">8 min read</div>
                                    <div className="member_only_content">
                                        <i className="fas fa-star"></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="trending_6" className="trending_article">
                            <div className="top_left_rank">06</div>
                            <div className="article">
                                <div className="article_author">
                                    <a className="avatar" href="/">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*u-ifswizqQQoztzXk12cDw.jpeg"
                                            alt="Shytoshi Kusama" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="/">
                                            <h4>Shytoshi Kusama</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="/">
                                        <h2>Chow Down: SHIB x WELLY’s</h2>
                                    </a>
                                </div>
                                <div className="article_metrics">
                                    <div className="date">Feb 2</div>
                                    <span>·</span>
                                    <div className="time_consumed">5 min read</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default SplashMain;
