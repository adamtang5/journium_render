import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as commentActions from '../../store/comment';
import CommenterCard from '../aggregate/CommenterCard';
import SingleCommentCard from '../aggregate/SingleCommentCard';
import SingleCommentForm from '../aggregate/SingleCommentForm';

const CommentsPanel = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);
    const { id } = useParams();
    const story = useSelector(state => state.story.stories[+id]);
    const comments = useSelector(state => state.comment.comments);

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
            .then((data) => history.push(`/stories/${id}`));
    };

    return (
        <div className="comments-panel">
            <p className="comments-header">
                Responses ({Object.values(comments).length})
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
                    rows="5"
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
                        className="submit"
                    >Respond</button>
                </div>
            </form>
            {Object.values(comments).map(comment => {
                return (comment.userId === sessionUser.id)
                    ? <SingleCommentCard comment={comment} />
                    : <SingleCommentForm comment={comment} />
            })}
        </div>
    )
};

export default CommentsPanel;
