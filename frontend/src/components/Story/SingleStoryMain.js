import StoryTitle from './StoryTitle';
import StoryImage from './StoryImage';
import StoryContent from './StoryContent';
import StoryVideo from './StoryVideo';

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
