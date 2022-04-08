import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import * as userActions from '../../store/user';
import * as storyActions from '../../store/story';
import * as commentActions from '../../store/comment';
import Avatar from '../atomic/Avatar';
import DisplayName from '../atomic/DisplayName';

const CommentsPanel = ({ }) => {
    const dispatch = useDispatch();
    const [userLoaded, setUserLoaded] = useState(false);
    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);
    const { id } = useParams();
    const story = useSelector(state => state.story.stories[+id]);
    const comments = useSelector(state => state.comment.comments);

    useEffect(() => {
        dispatch(sessionActions.restoreUser())
            .then((user) => {
                if (user) {
                    dispatch(userActions.fetchUser(user.id));
                    return;
                }
            })
            .then(() => setUserLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        dispatch(storyActions.fetchStories())
            .then(() => commentActions.fetchComments(+id))
            .then(() => setCommentsLoaded(true));
    }, [dispatch]);

    const openCommentForm = e => {

    };

    const closeCommentForm = e => {

    };

    const handleRespond = e => {
        e.preventDefault();
    };

    return (
        <div className="comments-panel">
            <p className="comments-header">
                {/* Responses ({comments.length}) */}
                Responses (10)
            </p>
            <form
                onSubmit={handleRespond}
                className="new-comment-form">
                <div className="commenter-card flex-row">
                    <Avatar user={currentUser} />
                    <DisplayName user={currentUser} />
                </div>
                <textarea
                    className="comment-content"
                    rows="5"
                    onFocus={openCommentForm}
                    placeholder="What are you thoughts?"
                />
                <div className="user-action flex-row">
                    <button
                        className="cancel"
                        onClick={closeCommentForm}
                    >Cancel</button>
                    <button
                        type="submit"
                        className="submit"
                    >Respond</button>
                </div>
            </form>
        </div>
    )
};

export default CommentsPanel;
