import UserSolidIcon from "../utils/icons/UserSolidIcon";

const Avatar = ({ user }) => {
    if (user.avatarUrl) return (
        <div className="icons">
            <img className="avatar" src={user.avatarUrl} />
        </div>
    );

    return (
        <div className="icons">
            <UserSolidIcon fill="#155" />
        </div>
    )
};

export default Avatar;
