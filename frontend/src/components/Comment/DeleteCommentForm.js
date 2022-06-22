import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as commentActions from '../../store/comment';
import './DeleteCommentForm.css';

const DeleteCommentForm = ({ comment, setShowDeleteModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const storyId = comment.storyId;

    const handleDelete = e => {
        e.preventDefault();
        setShowDeleteModal(false);
        dispatch(commentActions.deleteComment(comment.id))
            .then(() => dispatch(commentActions.fetchComments(storyId)));
        // .then(() => history.push(`/stories/${storyId}`));
    };

    return (
        <div className="delete-comment-modal flex-column">
            <h1 className="delete-comment-form">Delete comment</h1>
            <p className="delete-form-text">Deleted responses are gone forever. Are you sure?</p>
            <div className="actions flex-row">
                <button
                    className="cancel"
                    onClick={() => setShowDeleteModal(false)}
                >Cancel</button>
                <button
                    className="delete"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    )
};

export default DeleteCommentForm;
