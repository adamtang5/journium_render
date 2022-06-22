import { useDispatch, useSelector } from 'react-redux';
import * as storyActions from '../../store/story';
import LikeIcon from './LikeIcon';
import LikesCount from './LikesCount';
import CommentsCount from '../Comment/CommentsCount';
import CommentIcon from '../Comment/CommentIcon';

const SingleStoryFooter = ({ story, comments, setShowCommentsPanel }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const handleLikeUnlike = e => {
        if (story?.Likes?.userIds?.includes(sessionUser.id)) {
            dispatch(storyActions.unlikeStory({
                userId: sessionUser.id,
                storyId: story.id,
            }));
        } else {
            dispatch(storyActions.likeStory({
                userId: sessionUser.id,
                storyId: story.id,
            }));
        }
    };

    return (
        <div className="story-options flex-row">
            <div
                className="actions-likes flex-row"
                onClick={handleLikeUnlike}
            >
                <div className="cursor-pointer">
                    <LikeIcon user={sessionUser} story={story} />
                </div>
                <LikesCount story={story} />
            </div>
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
                <div className="cursor-pointer">
                    <CommentIcon user={sessionUser} comments={comments} />
                </div>
                <CommentsCount comments={comments} />
            </div>
        </div>
    )
};

export default SingleStoryFooter;
