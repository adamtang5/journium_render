import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as storyActions from '../../store/story';
import Avatar from "../atomic/Avatar";
import StoryImage from '../StoryImage';
import StoryVideo from '../StoryVideo';

const SingleStory = () => {
    const { id } = useParams();
    const stories = useSelector(state => state.story.stories);
    const story = stories[+id];
    console.log(story);

    return (
        <div className="single-story flex-column">
            <div className="story-info flex-row">
                <Avatar user={story.User} />
                <div className="flex-column">
                    <div className="author-info flex-row">
                        <div className="display-name">{story.User.displayName}</div>
                        <div className="role">{story.User.Role.name}</div>
                    </div>
                    <div className="date">
                        {new Date(story.createdAt).toString().slice(4, 10)}
                    </div>
                </div>
            </div>
            <div className="story-body flex-column">
                <div className="title">{story.title}</div>
                <div className="story-image">
                    <StoryImage imageUrl={story.imageUrl} alt={story.title} />
                </div>
                <div className="content">
                    <p>{story.content}</p>
                </div>
                <div className="story-video">
                    <StoryVideo videoUrl={story.videoUrl} />
                </div>
            </div>
            <div className="story-options flex-row">
                {/*
                Like
                Comment
                Save
                Follow
                */}
            </div>
        </div>
    )
};

export default SingleStory;
