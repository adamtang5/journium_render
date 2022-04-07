import { useSelector } from "react-redux";
import StoriesListCardFooter from "../aggregate/StoriesListCardFooter";
import StoriesListCardHeader from "../aggregate/StoriesListCardHeader";
import StoriesListCardMain from "../aggregate/StoriesListCardMain";
import "./StoryCard.css";

const StoryCard = ({ storyId }) => {
    const stories = useSelector(state => state.story.stories);
    const story = stories[storyId];

    return (
        <div className="story-card">
            <StoriesListCardHeader story={story} />
            <StoriesListCardMain story={story} />
            <StoriesListCardFooter story={story} />
        </div>
    )
};

export default StoryCard;
