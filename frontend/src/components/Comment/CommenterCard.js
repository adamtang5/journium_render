import Avatar from "../Avatar";
import DisplayName from "../DisplayName";

const CommenterCard = ({ visible, user }) => {
    if (!visible || !user) return null;

    return (
        <div className="commenter-card flex-row">
            <Avatar user={user} />
            <DisplayName user={user} />
        </div>
    )
};

export default CommenterCard;
