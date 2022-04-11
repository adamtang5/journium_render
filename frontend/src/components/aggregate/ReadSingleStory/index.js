import UserNav from "../../UserNav";
import SingleStory from "../SingleStory";
import './ReadSingleStory.css';

const ReadSingleStory = () => {
    return (
        <div id="read-story-layout">
            <div id="user-nav">
                <UserNav />
            </div>
            <div id="story-column" class="flex-column">
                <SingleStory />
            </div>
            <div id="other-features">

            </div>
        </div>
    )
};

export default ReadSingleStory;
