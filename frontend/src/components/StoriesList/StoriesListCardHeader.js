import Avatar from '../User/Avatar';
import DisplayName from "../User/DisplayName";
import Role from "../User/Role";

const StoriesListCardHeader = ({ story }) => {
    return (
        <div className="author flex-row">
            <Avatar user={story.User} />
            <DisplayName user={story.User} />
            <Role user={story.User} />
        </div>
    )
};

export default StoriesListCardHeader;
