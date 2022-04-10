import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as commentActions from '../../../store/comment';
import SingleCommentHeader from '../SingleCommentHeader';
import SingleCommentBody from '../../atomic/SingleCommentBody';
import DeleteCommentForm from '../../DeleteCommentForm';
import { Modal } from '../../../context/Modal';

const SingleCommentForm = ({ comment }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [content, setContent] = useState(comment.content);
    const [showCommentBody, setShowCommentBody] = useState(true);
    const [showContentField, setShowContentField] = useState(false);
    const [showPrimaryActions, setShowPrimaryActions] = useState(true);
    const [showEditActions, setShowEditActions] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [updateDisabled, setUpdateDisabled] = useState(true);

    useEffect(() => {
        setUpdateDisabled(content.length === 0 || content === comment.content);
    }, [content]);

    const openEditForm = e => {
        e.preventDefault();
        setShowCommentBody(false);
        setShowContentField(true);
        setShowPrimaryActions(false);
        setShowEditActions(true);
    };

    const closeEditForm = e => {
        e.preventDefault();
        setShowCommentBody(true);
        setShowContentField(false);
        setShowPrimaryActions(true);
        setShowEditActions(false);
    };

    const handleEditSubmit = e => {
        e.preventDefault();
        dispatchEvent(commentActions.editComment({
            id: comment.id,
            userId: comment.userId,
            storyId: comment.userId,
            content,
        }))
            .then(() => dispatch(commentActions.fetchComments(comment.storyId)));
    };

    return (
        <div className="single-comment-card flex-column">
            <form
                className="comment-form"
                onSubmit={e => e.preventDefault()}
            >
                <SingleCommentHeader comment={comment} />
                <SingleCommentBody visible={showCommentBody} comment={comment} />
                <textarea
                    className={`content-field${showContentField ? '' : ' hidden'}`}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows="8"
                />
                <div className={`primary-actions flex-row${showPrimaryActions ? '' : ' hidden'}`}>
                    <button
                        className="edit"
                        onClick={openEditForm}
                    >Edit</button>
                    <div className="delete_modal">
                        <button
                            className="delete"
                            onClick={() => setShowDeleteModal(true)}
                        >Delete</button>
                        {showDeleteModal && (
                            <Modal onClose={() => setShowDeleteModal(false)}>
                                <DeleteCommentForm
                                    comment={comment}
                                    setShowDeleteModal={setShowDeleteModal}
                                />
                            </Modal>
                        )}
                    </div>
                </div>
                <div className={`edit-actions flex-row${showEditActions ? '' : ' hidden'}`}>
                    <button
                        className="edit-cancel"
                        onClick={closeEditForm}
                    >Cancel</button>
                    <button
                        className="edit-submit"
                        disabled={updateDisabled}
                        onClick={handleEditSubmit}
                    >Update</button>
                </div>
            </form>
        </div>
    )

};

export default SingleCommentForm;
