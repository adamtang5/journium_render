import React from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import * as userActions from '../../store/user';
import Avatar from '../atomic/Avatar';
import DisplayName from '../atomic/DisplayName';
import ResourceDate from '../atomic/ResourceDate';

const ProfileDropdown = ({ user }) => {
    const dispatch = useDispatch();
    const logout = e => {
        e.preventDefault();
        dispatch(userActions.clearUsers());
        dispatch(sessionActions.logout());
    };

    return (
        <div className="profile-dropdown flex-column">
            <div className="profile-dropdown-card flex-row">
                <div className="card-avatar">
                    <Avatar user={user} />
                </div>
                <div className="card-text flex-column">
                    <DisplayName user={user} />
                    <div className="member-since flex-row">
                        <div>Member since </div>
                        <ResourceDate resource={user} />
                    </div>
                </div>
            </div>
            <div className="profile-dropdown-links flex-column">
                {/* <div>
                    <Link to="/">Write a story</Link>
                </div>
                <div>
                    <Link to="/">Stories</Link>
                </div>
                <div>
                    <Link to="/">Settings</Link>
                </div> */}
                <div>
                    <button className="auth-button" onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileDropdown;
