import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Avatar from "../atomic/Avatar";
import DisplayName from "../atomic/DisplayName";
import Role from "../atomic/Role";
import "./StoryCard.css";

const StoryCard = ({ storyId }) => {
    const stories = useSelector(state => state.story.stories);
    const story = stories[storyId];

    return (
        <div className="story-card">
            <div className="author flex-row">
                <Link to={`/users/${story.userId}`}>
                    <Avatar user={story.User} />
                </Link>
                <Link to={`/users/${story.User.id}`}>
                    <DisplayName user={story.User} />
                </Link>
                <Link to={`/users/${story.User.id}`}>
                    <Role user={story.User} />
                </Link>
            </div>
            <div className="story">
                <div className="title">
                    <Link to={`/stories/${story.id}`}>
                        <h2>{story.title}</h2>
                    </Link>
                </div>
                <div className="blurb">
                    <Link to={`/stories/${story.id}`}>
                        <p>{story.content}</p>
                    </Link>
                </div>
            </div>
            <div className="thumbnail">
                <Link to={`/stories/${story.id}`}>
                    <img src={story.imageUrl} alt={story.title} />
                </Link>
            </div>
            <div className="info flex-row">
                {/* <Link to={`/tags/${tag.id}`}>
                    <div className="tag">{tag.name}</div>
                </Link> */}
                <Link to={`/stories/${story.id}`}>
                    <div className="date">{new Date(story.createdAt).toString().slice(4, 10)}</div>
                    <span>·</span>
                </Link>
            </div>
        </div>
    )
};

export default StoryCard;
