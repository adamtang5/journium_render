import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../store/user';
import HomeHollowIcon from '../utils/icons/HomeHollowIcon';
import BookmarksHollowIcon from '../utils/icons/BookmarksHollowIcon';
import ReadHollowIcon from '../utils/icons/ReadHollowIcon';
import WriteHollowIcon from '../utils/icons/WriteHollowIcon';
import ProfileButton from '../ProfileButton';
import './UserNav.css';

const UserNav = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);

    useEffect(() => {
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <NavLink to="/">
                <HomeHollowIcon />
            </NavLink>
            <NavLink to="/lists">
                <BookmarksHollowIcon />
            </NavLink>
            <NavLink to="/">
                <ReadHollowIcon />
            </NavLink>
            <NavLink to="/new-story">
                <WriteHollowIcon />
            </NavLink>
            {currentUser && (
                <>
                    <ProfileButton user={currentUser} />
                </>
            )}
        </ul>
    )
};

export default UserNav;
