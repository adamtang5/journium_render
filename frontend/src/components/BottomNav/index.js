import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as userActions from '../../store/user';
import HomeSolidIcon from '../utils/icons/HomeHollowIcon';
import HomeHollowIcon from "../utils/icons/HomeHollowIcon";
import ReadHollowIcon from "../utils/icons/ReadHollowIcon";
import WriteHollowIcon from "../utils/icons/WriteHollowIcon";
import ProfileButton from "../ProfileButton";
import './BottomNav.css';

const BottomNav = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users[sessionUser.id]);

    useEffect(() => {
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    return (
        <div id="bottom-nav-icons" className="flex-row">
            <NavLink to="/">
                {({ isActive }) => isActive ? (
                    <HomeSolidIcon />
                ) : (
                    <HomeHollowIcon />
                )}
            </NavLink>
            {currentUser && (
                <>
                    <ProfileButton user={currentUser} />
                </>
            )}
        </div>
    )
};

export default BottomNav;
