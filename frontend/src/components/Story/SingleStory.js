import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as commentActions from '../../store/comment';
import SingleStoryHeader from "./SingleStoryHeader";
import SingleStoryMain from "./SingleStoryMain";
import SingleStoryFooter from "./SingleStoryFooter";
import CommentsPanel from '../Comment/CommentsPanel';
import PageNotFound from '../utils/PageNotFound';
import './SingleStory.css';

const SingleStory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const [showCommentsPanel, setShowCommentsPanel] = useState(false);
    const story = useSelector(state => state.stories[+id]);
    // const stateComments = useSelector(state => state.comments);
    const allComments = useSelector(state => Object.values(state.comments));

    useEffect(() => {
        dispatch(commentActions.fetchComments(+id))
            .then(() => setCommentsLoaded(true));
    }, [dispatch]);

    if (story) {
        return (
            <div className="single-story">
                <div className="single-story-main-area flex-column">
                    <SingleStoryHeader story={story} />
                    <SingleStoryMain story={story} />
                    {commentsLoaded && (
                        <SingleStoryFooter
                            story={story}
                            comments={allComments}
                            setShowCommentsPanel={setShowCommentsPanel}
                        />
                    )}
                </div>
                <CommentsPanel
                    visible={showCommentsPanel}
                    setShowCommentsPanel={setShowCommentsPanel}
                />
            </div>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
};

export default SingleStory;
