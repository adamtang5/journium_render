import Avatar from '../Avatar';
import DisplayName from "../DisplayName";
import Role from "../atomic/Role";

const StoriesListCardHeader = ({ story }) => {
    return (
        <div className="author flex-row">
            {/* <Link to={`/users/${story.userId}`}> */}
            <Avatar user={story.User} />
            {/* </Link> */}
            {/* <Link to={`/users/${story.User.id}`}> */}
            <DisplayName user={story.User} />
            {/* </Link> */}
            {/* <Link to={`/users/${story.User.id}`}> */}
            <Role user={story.User} />
            {/* </Link> */}
        </div>
    )
};

export default StoriesListCardHeader;
