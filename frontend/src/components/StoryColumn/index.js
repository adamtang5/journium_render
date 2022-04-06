import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as storyActions from '../../store/story';
import StoryCard from '../StoryCard';
import './StoryColumn.css';

const StoryColumn = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const stories = useSelector(state => Object.values(state.story.stories));

    useEffect(() => {
        dispatch(storyActions.fetchStories()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <div id="story-feed">
            {isLoaded && stories.map(story => (
                <StoryCard key={story.id} storyId={story.id} />
            ))}
        </div>
    )
};

export default StoryColumn;
