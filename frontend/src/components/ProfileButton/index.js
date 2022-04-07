import React, { useState, useEffect } from "react";
import Avatar from "../atomic/Avatar";
import ProfileDropdown from "../ProfileDropdown";
import './ProfileButton.css';

const ProfileButton = ({ user }) => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    return (
        <>
            <button className="profile-button" onClick={openMenu}>
                <Avatar user={user} />
            </button>
            {showMenu && (
                <ProfileDropdown user={user} />
            )}
        </>
    )
};

export default ProfileButton;
