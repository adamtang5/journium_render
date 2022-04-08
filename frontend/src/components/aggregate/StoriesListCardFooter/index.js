import { Link } from 'react-router-dom';
import StoryDate from '../../atomic/StoryDate';

const StoriesListCardFooter = ({ story }) => {
    return (
        <div className="info flex-row">
            {/* <Link to={`/tags/${tag.id}`}>
                    <div className="tag">{tag.name}</div>
                </Link> */}
            <Link to={`/stories/${story.id}`}>
                <StoryDate story={story} />
            </Link>
        </div>
    )
};

export default StoriesListCardFooter;
