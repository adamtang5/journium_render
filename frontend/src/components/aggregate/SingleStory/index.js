import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleStoryHeader from "../SingleStoryHeader";
import SingleStoryMain from "../SingleStoryMain";
import SingleStoryFooter from "../SingleStoryFooter";
import PageNotFound from '../../atomic/PageNotFound';
import './SingleStory.css';

const SingleStory = () => {
    const { id } = useParams();
    const story = useSelector(state => state.story.stories[+id]);

    if (story) {
        return (
            <div className="single-story flex-column">
                <SingleStoryHeader story={story} />
                <SingleStoryMain story={story} />
                <SingleStoryFooter story={story} />
            </div>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
};

export default SingleStory;
