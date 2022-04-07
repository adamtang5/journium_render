import Avatar from "../../atomic/Avatar";
import DisplayName from '../../atomic/DisplayName';
import Role from '../../atomic/Role';
import StoryDate from '../../atomic/StoryDate';

const SingleStoryHeader = ({ story }) => {
    return (
        <div className="story-info flex-row">
            <Avatar user={story.User} />
            <div className="story-info-text flex-column">
                <div className="author-info flex-row">
                    <DisplayName user={story.User} />
                    <Role user={story.User} />
                </div>
                <StoryDate story={story} />
            </div>
        </div>
    )
};

export default SingleStoryHeader;
