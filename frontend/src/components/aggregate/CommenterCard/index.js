import Avatar from "../../atomic/Avatar";
import DisplayName from "../../atomic/DisplayName";

const CommenterCard = ({ visible, user }) => {
    if (!visible) return null;

    return (
        <div className="commenter-card flex-row">
            <Avatar user={user} />
            <DisplayName user={user} />
        </div>
    )
};

export default CommenterCard;
