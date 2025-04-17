import React from 'react';
import './profile.css';
import img_avatar from '../assets/img/avatar_account.png'

//Profile JS code
const Profile = () => {
    return (
        <div className="vb-profile">
            <img src= {img_avatar} alt="Profile" className="profile-picture" />
            <a className='app-link' href="#"><div className="username">chiragsingla17 -</div></a>
        </div>
    );
};

export default Profile;
