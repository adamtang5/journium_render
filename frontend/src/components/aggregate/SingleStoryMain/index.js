import StoryTitle from '../../atomic/StoryTitle';
import StoryImage from '../../atomic/StoryImage';
import StoryContent from '../../atomic/StoryContent';
import StoryVideo from '../../atomic/StoryVideo';

const SingleStoryMain = ({ story }) => {
    return (
        <div className="story-main flex-column">
            <StoryTitle story={story} />
            <StoryImage imageUrl={story.imageUrl} alt={story.title} />
            <StoryContent story={story} />
            <StoryVideo videoUrl={story.videoUrl} />
        </div>
    )
};

export default SingleStoryMain;
