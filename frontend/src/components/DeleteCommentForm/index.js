import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as commentActions from '../../store/comment';
import './DeleteCommentForm.css';

const DeleteCommentForm = ({ comment, setShowDeleteModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        setShowDeleteModal(false);
        dispatch(commentActions.deleteComment(comment.id))
            .then(() => history.push('/'));
    };

    return (
        <div className="delete-comment-modal flex-column">
            <h1 className="delete-comment-form">Delete comment</h1>
            <p className="delete-form-text">Are you sure you want to delete this comment?</p>
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
