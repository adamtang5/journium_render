const LikeIcon = ({ user, story }) => {
    if (story?.Likes?.userIds?.includes(user.id)) {
        return <i className="fa-solid fa-heart fa-1x" />;
    } else {
        return <i className="fa-regular fa-heart fa-1x" />;
    }
};

export default LikeIcon;
