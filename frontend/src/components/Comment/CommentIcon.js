const CommentIcon = ({ user, comments }) => {
    if (comments?.find(comment => comment.userId === user.id) === undefined) {
        return <i className="fa-regular fa-comment fa-1x" />;
    } else {
        return <i className="fa-solid fa-comment fa-1x" />;
    }
};

export default CommentIcon;
