import Avatar from "../User/Avatar";
import DisplayName from "../User/DisplayName";
import ResourceDate from "../utils/ResourceDate";

const SingleCommentHeader = ({ comment }) => {
    return (
        <div className="single-comment-header flex-row">
            <Avatar user={comment.User} />
            <div className="single-comment-header-text flex-column">
                <DisplayName user={comment.User} />
                <ResourceDate resource={comment} />
            </div>
        </div>
    )
};

export default SingleCommentHeader;
