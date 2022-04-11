import CommentHollowIcon from '../../utils/icons/CommentHollowIcon';
import CommentsCount from '../../atomic/CommentsCount';

const SingleStoryFooter = ({ story, comments, setShowCommentsPanel }) => {
    return (
        <div className="story-options flex-row">
            {/*
                Like
                Comment
                Save
                Follow
                */}
            <div
                className="actions-comments flex-row"
                onClick={() => setShowCommentsPanel(true)}
            >
                <CommentHollowIcon />
                <CommentsCount comments={comments} />
            </div>
        </div>
    )
};

export default SingleStoryFooter;
