import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as commentActions from '../../store/comment';
import SingleCommentHeader from './SingleCommentHeader';
import SingleCommentBody from './SingleCommentBody';
import DeleteCommentForm from './DeleteCommentForm';
import { Modal } from '../../context/Modal';

const SingleCommentForm = ({ commentId }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const commentById = useSelector(state => state.comments[commentId]);

    const [content, setContent] = useState('');
    const [showCommentBody, setShowCommentBody] = useState(true);
    const [showContentField, setShowContentField] = useState(false);
    const [showPrimaryActions, setShowPrimaryActions] = useState(true);
    const [showEditActions, setShowEditActions] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [updateDisabled, setUpdateDisabled] = useState(true);

    useEffect(() => {
        if (commentById) setContent(commentById.content);
    }, []);

    useEffect(() => {
        setUpdateDisabled(content.length === 0 || content === commentById.content);
    }, [content]);

    if (!commentById) return null;

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
        dispatch(commentActions.editComment({
            id: commentId,
            userId: sessionUser.id,
            storyId: commentById.storyId,
            content,
        }))
            .then(() => dispatch(commentActions.fetchComments(commentById.storyId)))
            .then(() => closeEditForm(e));
    };

    return (
        <div className="single-comment-card flex-column">
            <form
                className="comment-form"
                onSubmit={e => e.preventDefault()}
            >
                <SingleCommentHeader comment={commentById} />
                <SingleCommentBody visible={showCommentBody} comment={commentById} />
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
                                    comment={commentById}
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
