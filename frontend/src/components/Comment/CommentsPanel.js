import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as commentActions from '../../store/comment';
import CommenterCard from './CommenterCard';
import SingleCommentCard from './SingleCommentCard';
import SingleCommentForm from './SingleCommentForm';
import './CommentsPanel.css';

const CommentsPanel = ({ visible, setShowCommentsPanel }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users[sessionUser.id]);

    const { id } = useParams();
    const story = useSelector(state => state.stories[+id]);
    // const stateComments = useSelector(state => state.comments);
    const allComments = useSelector(state => Object.values(state.comments));

    const [content, setContent] = useState('');
    const [respondDisabled, setRespondDisabled] = useState(true);
    const [showCommenterCard, setShowCommenterCard] = useState(false);
    const [showFormButtons, setShowFormButtons] = useState(false);

    // respond button is disabled until content is not empty
    useEffect(() => {
        setRespondDisabled(content === '');
    }, [content]);

    const openCommentForm = e => {
        setShowCommenterCard(true);
        setShowFormButtons(true);
    };

    const closeCommentForm = e => {
        e.preventDefault();
        setContent('');
        setShowCommenterCard(false);
        setShowFormButtons(false);
    };

    const handleRespond = e => {
        e.preventDefault();
        dispatch(commentActions.createComment({
            userId: sessionUser.id,
            storyId: story.id,
            content,
        }))
            .then(() => dispatch(commentActions.fetchComments(story.id)))
            .then(() => closeCommentForm(e));
        // .then(() => history.push(`/stories/${story.id}`));
    };

    if (!visible) return null;

    return (
        <div className="comments-panel">
            <div
                className="close-panel cursor-pointer"
                onClick={() => setShowCommentsPanel(false)}
            >
                <i className="fa-solid fa-xmark fa-1x" />
            </div>
            <p className="comments-header">
                Responses ({allComments?.length || 0})
            </p>
            <form
                onSubmit={handleRespond}
                className="new-comment-form">
                <CommenterCard
                    visible={showCommenterCard}
                    user={currentUser}
                />
                <textarea
                    className="comment-content"
                    // rows="5"
                    onFocus={openCommentForm}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="What are you thoughts?"
                />
                <div className={`user-action flex-row${showFormButtons ? '' : ' hidden'}`}>
                    <button
                        className="cancel"
                        onClick={closeCommentForm}
                    >Cancel</button>
                    <button
                        type="submit"
                        disabled={respondDisabled}
                        className="submit"
                    >Respond</button>
                </div>
            </form>
            {allComments?.map(comment => {
                return (comment.userId !== sessionUser.id)
                    ? <SingleCommentCard key={comment.id} comment={comment} />
                    : <SingleCommentForm key={comment.id} commentId={comment.id} />
            })}
        </div>
    )
};

export default CommentsPanel;
