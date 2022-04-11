import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as commentActions from '../../../store/comment';
import SingleStoryHeader from "../SingleStoryHeader";
import SingleStoryMain from "../SingleStoryMain";
import SingleStoryFooter from "../SingleStoryFooter";
import CommentsPanel from '../../CommentsPanel';
import PageNotFound from '../../atomic/PageNotFound';
import './SingleStory.css';

const SingleStory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [commentsLoaded, setCommentsLoaded] = useState(false);
    const [showCommentsPanel, setShowCommentsPanel] = useState(false);
    const story = useSelector(state => state.story.stories[+id]);
    const comments = useSelector(state => state.comment.comments);

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
                            comments={comments}
                            setShowCommentsPanel={setShowCommentsPanel}
                        />
                    )}
                </div>
                <div className="comments-panel">
                    <CommentsPanel visible={showCommentsPanel} />
                </div>
            </div>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
};

export default SingleStory;
