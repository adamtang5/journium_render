import React from 'react';
import UserNav from '../UserNav';
import StoriesPageMainColumn from './StoriesPageMainColumn';
import OtherFeaturesColumn from './OtherFeaturesColumn';

const Stories = () => {
    return (
        <div id="stories-layout">
            <div id="user-nav">
                <UserNav />
            </div>
            <div id="story-column" className="flex-column">
                <StoriesPageMainColumn />
            </div>
            <div id="other-features">
                <OtherFeaturesColumn />
            </div>
        </div>
    )
};

export default Stories;
