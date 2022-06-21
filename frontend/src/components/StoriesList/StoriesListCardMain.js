import StoriesListCardMainLeft from './StoriesListCardMainLeft';
import StoriesListCardMainRight from './StoriesListCardMainRight';

const StoriesListCardMain = ({ story }) => {
    return (
        <div className="story-body flex-row">
            <StoriesListCardMainLeft story={story} />
            <StoriesListCardMainRight story={story} />
        </div>
    )
};

export default StoriesListCardMain;
