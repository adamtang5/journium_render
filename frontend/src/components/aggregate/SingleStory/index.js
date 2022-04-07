import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleStoryHeader from "../SingleStoryHeader";
import SingleStoryMain from "../SingleStoryMain";
import SingleStoryFooter from "..//SingleStoryFooter";
import './SingleStory.css';

const SingleStory = () => {
    const { id } = useParams();
    const stories = useSelector(state => state.story.stories);
    const story = stories[+id];

    return (
        <div className="single-story flex-column">
            <SingleStoryHeader story={story} />
            <SingleStoryMain story={story} />
            <SingleStoryFooter story={story} />
        </div>
    )
};

export default SingleStory;
