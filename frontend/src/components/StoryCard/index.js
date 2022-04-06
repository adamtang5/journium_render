import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./StoryCard.css";

const StoryCard = ({ storyId }) => {
    const stories = useSelector(state => state.story.stories);
    const story = stories[storyId];

    return (
        <div className="story-card">
            <div className="story">
                <div className="story-author">
                    <Link className="avatar" to={`/users/${story.userId}`}>
                        <img src={story.User.avatarUrl} alt={story.User.displayName} />
                    </Link>
                    <div className="author_org">
                        <Link className="author_name" to={`/users/${story.User.id}`}>
                            <h4>{story.User.displayName}</h4>
                            <span className="role">{story.User.Role.name}</span>
                        </Link>
                    </div>
                </div>
                <div className="title">
                    <Link to={`/stories/${story.id}`}>
                        <h2>{story.title}</h2>
                    </Link>
                </div>
                <div className="story-metrics">
                    <div className="date">{story.createAt}</div>
                    <span>·</span>
                </div>
            </div>
        </div>
    )
};

export default StoryCard;
