import SingleCommentHeader from "../SingleCommentHeader";
import SingleCommentBody from "../../atomic/SingleCommentBody";

const SingleCommentCard = ({ comment }) => {
    return (
        <div className="single-comment-card flex-column">
            <SingleCommentHeader comment={comment} />
            <SingleCommentBody visible={true} comment={comment} />
        </div>
    )
};

export default SingleCommentCard;
