import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as userActions from '../../store/user';
import JourniumLogo from "../JourniumLogo";
import ProfileButton from "../ProfileButton";
import './WriterTopNav.css'

const WriterTopNav = ({ handlePublish }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);

    useEffect(() => {
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    return (
        <div id="writer-top-nav" className="flex-row">
            <div id="writer-top-left" className="flex-row">
                <NavLink to="/">
                    <JourniumLogo />
                </NavLink>
                <span>Drafting</span>
            </div>
            <div id="writer-top-right" className="flex-row">
                <button className="publish" onClick={handlePublish}>
                    Publish
                </button>
                {currentUser && (
                    <>
                        <ProfileButton user={currentUser} />
                    </>
                )}
            </div>
        </div>
    )
};

export default WriterTopNav;
