import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as userActions from '../../store/user';
import JourniumLogo from '../utils/JourniumLogo';
import HomeSolidIcon from '../utils/icons/HomeSolidIcon';
import HomeHollowIcon from '../utils/icons/HomeHollowIcon';
// import BookmarksHollowIcon from '../utils/icons/BookmarksHollowIcon';
import ReadHollowIcon from '../utils/icons/ReadHollowIcon';
import WriteHollowIcon from '../utils/icons/WriteHollowIcon';
import ProfileButton from '../ProfileButton';
import './UserNav.css';

const UserNav = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users[sessionUser.id]);

    useEffect(() => {
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    return (
        <div id="user-nav-icons" className="flex-column">
            <div className="start">
                <NavLink to="/">
                    <JourniumLogo />
                </NavLink>
            </div>
            <div className="user-nav-actives flex-column">
                {/* <NavLink
                    to="/"
                    children={({ isActive }) => isActive ? (
                        <HomeSolidIcon />
                    ) : (
                        <HomeHollowIcon />
                    )}
                /> */}
                {/* <NavLink to="/lists">
                    <BookmarksHollowIcon />
                </NavLink> */}
                <NavLink to="/">
                    <ReadHollowIcon />
                </NavLink>
                <NavLink to="/new-story">
                    <WriteHollowIcon />
                </NavLink>
            </div>
            <div className="end">
                {currentUser && (
                    <>
                        <ProfileButton user={currentUser} />
                    </>
                )}
            </div>
        </div>
    )
};

export default UserNav;
