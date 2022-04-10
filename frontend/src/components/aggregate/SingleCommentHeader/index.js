import Avatar from "../../atomic/Avatar";
import DisplayName from "../../atomic/DisplayName";
import ResourceDate from "../../atomic/ResourceDate";

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
