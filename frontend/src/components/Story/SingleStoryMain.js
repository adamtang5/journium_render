import StoryTitle from './StoryTitle';
import StoryContent from './StoryContent';

const SingleStoryMain = ({ story }) => {
    return (
        <div className="story-main flex-column">
            <StoryTitle story={story} />
            <StoryContent story={story} />
        </div>
    )
};

export default SingleStoryMain;
