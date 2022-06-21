import { useSelector } from "react-redux";
import StoriesListCardFooter from "./StoriesListCardFooter";
import StoriesListCardHeader from "./StoriesListCardHeader";
import StoriesListCardMain from "./StoriesListCardMain";
import "./StoriesListCard.css";

const StoriesListCard = ({ storyId }) => {
    const stories = useSelector(state => state.stories);
    const story = stories[storyId];

    return (
        <div className="story-card">
            <StoriesListCardHeader story={story} />
            <StoriesListCardMain story={story} />
            <StoriesListCardFooter story={story} />
        </div>
    )
};

export default StoriesListCard;
