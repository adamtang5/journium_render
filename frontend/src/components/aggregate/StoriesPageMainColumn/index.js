import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as storyActions from '../../../store/story';
import StoriesPageMainColumnTop from '../../atomic/StoriesPageMainColumnTop';
import StoriesListCard from '../StoriesListCard';

const StoriesPageMainColumn = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const stories = useSelector(state => Object.values(state.story.stories));

    useEffect(() => {
        dispatch(storyActions.fetchStories()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <StoriesPageMainColumnTop />
            {isLoaded && stories.map(story => (
                <StoriesListCard key={story.id} storyId={story.id} />
            ))}
        </>
    )
};

export default StoriesPageMainColumn;
