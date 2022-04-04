import './SplashFooter.css';

const SplashFooter = () => {
    return (
        <footer className="relative white-bg">
            <div id="footer_wrapper" className="centered bounded">
                {/* Footer content, adjust according to media width */}
                <div id="discover_right_nav">
                    <div className="sticky">
                        <h2>Discover more of what matters to you</h2>
                        <div id="discover_topics">
                            <ul>
                                <li className="topic">
                                    <a href="#">Self</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Relationships</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Data Science</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Programming</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Productivity</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Javascript</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Machine Learning</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Politics</a>
                                </li>
                                <li className="topic">
                                    <a href="#">Health</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="recommendation_articles">
                    <div className="recommended_article">
                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*pfjoZOu08t9b-HHXv68ETg.png"
                                            alt="Human Parts" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Robert Roy Britt</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="#">
                                            <h4>Human Parts</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>We’re Getting Death and Dying All Wrong</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Too many people die alone, leaving families to grieve remotely</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 2</div>
                                        <span>·</span>
                                        <div className="time_consumed">5 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Death</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*x7POa5kl6o_lWckhrHssxw.jpeg"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*9z7D3gpYkTBDy-HTQn823A.jpeg"
                                            alt="Sarah Kwong" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Sarah Kwong</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Lunar New Year</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Saying an excited hello and an early goodbye</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 3</div>
                                        <span>·</span>
                                        <div className="time_consumed">4 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Hong Kong</div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*BqKbtvtBR2gQkRBGVmjTZg.png"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*tPfbBeQ23qMKUptWlw1FaQ.jpeg"
                                            alt="Paul Greenberg" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Paul Greenberg</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Quitting Facebook Changed My Life</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Meta’s stock collapse revealed what I already knew</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 4</div>
                                        <span>·</span>
                                        <div className="time_consumed">2 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Tech</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*TuIF_SFepSoUordfLaYkEg.png"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*sM7THfvJgziRWWDLOixgPA.png"
                                            alt="Sam Quillen" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Sam Quillen</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Talking Past Each Other: How Semantics Complicates Politics</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>One of the thornier issues in linguistics is how to define words as their
                                            meanings shift over time, or even between
                                            people who perceive…</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 2</div>
                                        <span>·</span>
                                        <div className="time_consumed">5 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Linguistics</div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*x7POa5kl6o_lWckhrHssxw.jpeg"
                                        alt="alt text" />
                                </a>
                            </div>

                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*uT00jLxbMVUKZXclfBv77g.png"
                                            alt="Making of a Millionaire" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Peter Shanosky</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="#">
                                            <h4>Making of a Millionaire</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>There Is a Much Larger Problem Than the Great Resignation. No One Wants to Talk
                                            About It.</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Wage growth and people quitting bad jobs aren’t our biggest stories.</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Jan 28</div>
                                        <span>·</span>
                                        <div className="time_consumed">6 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Society</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/0*i5UtUFR5gDYnXLDK" alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*pfjoZOu08t9b-HHXv68ETg.png"
                                            alt="Human Parts" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Robert Roy Britt</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="#">
                                            <h4>Human Parts</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>We’re Getting Death and Dying All Wrong</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Too many people die alone, leaving families to grieve remotely</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 2</div>
                                        <span>·</span>
                                        <div className="time_consumed">5 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Death</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*x7POa5kl6o_lWckhrHssxw.jpeg"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*9z7D3gpYkTBDy-HTQn823A.jpeg"
                                            alt="Sarah Kwong" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Sarah Kwong</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Lunar New Year</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Saying an excited hello and an early goodbye</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 3</div>
                                        <span>·</span>
                                        <div className="time_consumed">4 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Hong Kong</div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*BqKbtvtBR2gQkRBGVmjTZg.png"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*tPfbBeQ23qMKUptWlw1FaQ.jpeg"
                                            alt="Paul Greenberg" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Paul Greenberg</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Quitting Facebook Changed My Life</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Meta’s stock collapse revealed what I already knew</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 4</div>
                                        <span>·</span>
                                        <div className="time_consumed">2 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Tech</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*TuIF_SFepSoUordfLaYkEg.png"
                                        alt="alt text" />
                                </a>
                            </div>
                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*sM7THfvJgziRWWDLOixgPA.png"
                                            alt="Sam Quillen" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Sam Quillen</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>Talking Past Each Other: How Semantics Complicates Politics</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>One of the thornier issues in linguistics is how to define words as their
                                            meanings shift over time, or even between
                                            people who perceive…</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Feb 2</div>
                                        <span>·</span>
                                        <div className="time_consumed">5 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Linguistics</div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/1*x7POa5kl6o_lWckhrHssxw.jpeg"
                                        alt="alt text" />
                                </a>
                            </div>

                        </div>

                        <div className="article">
                            <div className="article_left">
                                <div className="article_author">
                                    <a className="avatar" href="#">
                                        <img src="https://miro.medium.com/fit/c/40/40/1*uT00jLxbMVUKZXclfBv77g.png"
                                            alt="Making of a Millionaire" />
                                    </a>
                                    <div className="author_org">
                                        <a className="author_name" href="#">
                                            <h4>Peter Shanosky</h4>
                                        </a>
                                        <span>in</span>
                                        <a className="org_name" href="#">
                                            <h4>Making of a Millionaire</h4>
                                        </a>
                                    </div>
                                </div>
                                <div className="article_title">
                                    <a href="#">
                                        <h2>There Is a Much Larger Problem Than the Great Resignation. No One Wants to Talk
                                            About It.</h2>
                                    </a>
                                </div>
                                <div className="article_subtitle">
                                    <a href="#">
                                        <h3>Wage growth and people quitting bad jobs aren’t our biggest stories.</h3>
                                    </a>
                                </div>
                                <div className="article_info">
                                    <div className="article_metrics">
                                        <div className="date">Jan 28</div>
                                        <span>·</span>
                                        <div className="time_consumed">6 min read</div>
                                        <span>·</span>
                                        <div className="topic_tag">Society</div>
                                        <div className="member_only_content">
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="article_actions">
                                        <div className="add_to_fav">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="more_options">
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="article_right">
                                <a href="#">
                                    <img src="https://miro.medium.com/fit/c/200/134/0*i5UtUFR5gDYnXLDK" alt="alt text" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
};

export default SplashFooter;
