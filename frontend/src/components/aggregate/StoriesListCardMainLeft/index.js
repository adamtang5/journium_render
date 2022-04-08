import { Link } from 'react-router-dom';
import StoryTitle from '../../atomic/StoryTitle';
import StoryBlurb from '../../atomic/StoryBlurb';

const StoriesListCardMainLeft = ({ story }) => {
    return (
        <div className="story-text">
            <Link to={`/stories/${story.id}`}>
                <StoryTitle story={story} />
            </Link>
            <Link to={`/stories/${story.id}`}>
                <StoryBlurb story={story} />
            </Link>
        </div>
    )
};

export default StoriesListCardMainLeft;
