const ArticleCard = ({ story, i }) => {
    return (
        <div id={`trending_${i}`} className="trending_article">
            <div className="top_left_rank">0{i}</div>
            <div className="article">
                <div className="article_author">
                    <a className="avatar" href="#">
                        <img src={story.User.avatarUrl}
                            alt={story.User.displayName} />
                    </a>
                    <div className="author_org">
                        <a className="author_name" href="#">
                            <h4>{story.User.displayName}</h4>
                        </a>
                    </div>
                </div>
                <div className="article_title">
                    <a href="#">
                        <h2>{story.title}</h2>
                    </a>
                </div>
                <div className="article_metrics">
                    <div className="date">{story.createAt.toString().slice(4, 10)}</div>
                    <span>·</span>
                </div>
            </div>
        </div>
    )
};

export default ArticleCard;
