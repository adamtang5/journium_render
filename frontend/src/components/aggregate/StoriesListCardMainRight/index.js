import { Link } from 'react-router-dom';
import Thumbnail from '../../atomic/Thumbnail';

const StoriesListCardMainRight = ({ story }) => {
    return (
        <div className="story-thumbnail">
            <Link to={`/stories/${story.id}`}>
                <Thumbnail story={story} />
            </Link>
        </div>
    )
};

export default StoriesListCardMainRight;
