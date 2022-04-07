import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as storyActions from '../../store/story';
import TopGreeting from '../TopGreeting';
import StoryCard from '../StoryCard';

const StoryColumn = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const stories = useSelector(state => Object.values(state.story.stories));

    useEffect(() => {
        dispatch(storyActions.fetchStories()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <TopGreeting />
            {isLoaded && stories.map(story => (
                <StoryCard key={story.id} storyId={story.id} />
            ))}
        </>
    )
};

export default StoryColumn;
