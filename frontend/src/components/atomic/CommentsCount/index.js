const CommentsCount = ({ comments }) => {
    return (
        <div className="comments-count">
            {Object.values(comments).length}
        </div>
    )
};

export default CommentsCount;
