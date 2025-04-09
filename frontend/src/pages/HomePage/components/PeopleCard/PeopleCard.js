import React from 'react';
import './peopleCard.css';

const Users = ({ user,userName,userAvatar,description }) => {
    return (
        <div className="vb-user-info">
            <div className='vb-user-info-wrapper'>
                <div className="vb-user-header">
                <img src={userAvatar} alt={`${user}'s avatar`} className="vb-user-avatar" />
                    
                    
                </div>
                <span className="vb-user-owner">{user}</span> <span className="vb-user-name">{userName}</span>
                <div className="vb-user-description">{description}</div>
            </div>
                <div className='users-button-wrapper'><button className='vb-users-button' >Follow</button> </div>
        </div>
            
       
    );
};

export default Users;
