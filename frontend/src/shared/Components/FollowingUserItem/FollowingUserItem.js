import React from 'react';
import Btn from '../Btn/Btn.js';
import '../Following/following.css';
import { useNavigate } from 'react-router-dom';

export default function FollowingUserItem({ user, onFollowToggle, isAuthenticated, currentUserId }) {
  const isOwnSelf = user.id === currentUserId;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      onFollowToggle();
    }
  };

  return (
    <div className="following-user">
      <div className="following-user__avatar">
        <a href={`/${user.userName}`} className="following-user__avatar-link">
          <img
            className="following-user__avatar-img"
            src={user.avatar || '/default-avatar.png'}
            alt={`${user.name || user.userName} avatar`}
            loading="lazy"
          />
        </a>
      </div>

      <div className="following-user__info">
        <a className="following-user__name-link" href={`/${user.userName}`}>
          <span className="following-user__name">{user.name || user.userName}</span>{' '}
          <span className="following-user__username">{user.userName}</span>
        </a>
        {user.bio && (
          <div className="following-user__description">{user.bio}</div>
        )}
        {user.location && (
          <p className="following-user__location">{user.location}</p>
        )}
      </div>

      {!isOwnSelf && (
        <div className="following-user__actions">
          <Btn
            btnText={isAuthenticated ? (user.isFollowing ? 'Unfollow' : 'Follow') : 'Follow'}
            onClick={handleClick}
          />
        </div>
      )}
    </div>
  );
}
