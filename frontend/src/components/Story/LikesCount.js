const LikesCount = ({ story }) => {
    return (
        <div className="likes-count">
            {story?.Likes?.userIds?.length}
        </div>
    )
};

export default LikesCount;
