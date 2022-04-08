import { Link } from 'react-router-dom';
import CommentHollowIcon from '../../utils/icons/CommentHollowIcon';
import CommentsCount from '../../atomic/CommentsCount';

const SingleStoryFooter = ({ story, comments }) => {
    return (
        <div className="story-options flex-row">
            {/*
                Like
                Comment
                Save
                Follow
                */}
            <Link to={`/stories/${story.id}/comments`}>
                <CommentHollowIcon />
                <CommentsCount comments={comments} />
            </Link>
        </div>
    )
};

export default SingleStoryFooter;
