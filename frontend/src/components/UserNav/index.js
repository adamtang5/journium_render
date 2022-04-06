import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeHollowIcon from '../utils/icons/HomeHollowIcon';
import BookmarksHollowIcon from '../utils/icons/BookmarksHollowIcon';
import ReadHollowIcon from '../utils/icons/ReadHollowIcon';
import WriteHollowIcon from '../utils/icons/WriteHollowIcon';
import ProfileButton from '../ProfileButton';
import './UserNav.css';

const UserNav = () => {
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);

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
            <ProfileButton user={currentUser} />
        </ul>
    )
};

export default UserNav;
