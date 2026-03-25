import React from 'react';
import './profile.css';
import DefaultAvatar from '../assets/img/avatar_account.png';

const Profile = ({ avatar, userName }) => {
    return (
        <div className="vb-profile">
            <img src={avatar || DefaultAvatar} 
  onError={(e) => { e.target.onerror = null; e.target.src = DefaultAvatar; }} alt="Profile" className="profile-picture" />
            <div className='app-link'>
                <div className="username">{userName ? `${userName} -` : ''}</div>
            </div>
        </div>
    );
};

export default Profile;
