import { Link } from 'react-router-dom';
import ResourceDate from '../../atomic/ResourceDate';

const StoriesListCardFooter = ({ story }) => {
    return (
        <div className="info flex-row">
            {/* <Link to={`/tags/${tag.id}`}>
                    <div className="tag">{tag.name}</div>
                </Link> */}
            <Link to={`/stories/${story.id}`}>
                <ResourceDate resource={story} />
            </Link>
        </div>
    )
};

export default StoriesListCardFooter;
