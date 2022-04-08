import { Link } from 'react-router-dom';
import Avatar from '../../atomic/Avatar';
import DisplayName from '../../atomic/DisplayName';
import StoryTitle from '../../atomic/StoryTitle';
import StoryDate from '../../atomic/StoryDate';

const SplashMainFeaturedStoryCard = ({ story, i }) => {
    return (
        <div id={`trending_${i}`} className="trending_article">
            <div className="top_left_rank">0{i}</div>
            <div className="article">
                <div className="article_author">
                    <Link to={`/users/${story.userId}`}>
                        <Avatar user={story.User} />
                    </Link>
                    <div className="author_org">
                        <Link className="author_name" to={`/users/${story.userId}`}>
                            <DisplayName user={story.User} />
                        </Link>
                    </div>
                </div>
                <div className="article_title">
                    <Link to={`/stories/${story.id}`}>
                        <StoryTitle story={story} />
                    </Link>
                </div>
                <div className="article_metrics">
                    <StoryDate story={story} />
                </div>
            </div>
        </div>
    )
};

export default SplashMainFeaturedStoryCard;
