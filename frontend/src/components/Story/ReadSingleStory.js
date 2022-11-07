import UserNav from "../UserNav";
import SingleStory from "./SingleStory";

const ReadSingleStory = () => {
    return (
        <div id="read-story-layout">
            <div id="user-nav">
                <UserNav />
            </div>
            <div id="story-column" className="flex-column">
                <SingleStory />
            </div>
            <div id="other-features">

            </div>
        </div>
    )
};

export default ReadSingleStory;
