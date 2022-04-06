import React from 'react';
import UserNav from '../UserNav';
import StoryColumn from '../StoryColumn';
import OtherFeaturesColumn from '../OtherFeaturesColumn';
import './Stories.css';

const Stories = () => {
    return (
        <div id="stories-layout">
            <div id="user-nav">
                <UserNav />
            </div>
            <div id="story-column">
                <StoryColumn />
            </div>
            <div id="other-features">
                <OtherFeaturesColumn />
            </div>
        </div>
    )
};

export default Stories;
