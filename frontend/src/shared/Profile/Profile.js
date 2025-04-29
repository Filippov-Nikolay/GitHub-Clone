import React from 'react';
import './profile.css';
import DefaultAvatar from '../assets/img/avatar_account.png';

const Profile = ({ avatar, userName }) => {
    return (
        <div className="vb-profile">
            <img src={avatar || DefaultAvatar} alt="Profile" className="profile-picture" />
            <a className='app-link' href="#">
                <div className="username">{userName ? `${userName} -` : ''}</div>
            </a>
        </div>
    );
};

export default Profile;
