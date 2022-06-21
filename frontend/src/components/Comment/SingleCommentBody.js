const SingleCommentBody = ({ visible, comment }) => {
    if (!visible) return null;
    return (
        <p className="comment-body">{comment.content}</p>
    )
};

export default SingleCommentBody;
