import React from 'react';
import FollowingUserItem from '../FollowingUserItem/FollowingUserItem.js';

export default function Following({ users, isAuthenticated, onFollowToggle, tab, currentUserId }) {
  if (!users || users.length === 0) {
    return <p>{tab === 'followers' ? '' : ''}</p>;
  }

  return (
    <div className="following-list">
      {users.map(user => (
        <FollowingUserItem
          key={user.id}
          user={user}
          onFollowToggle={() => onFollowToggle(user.id, user.isFollowing)}
          isAuthenticated={isAuthenticated}
          currentUserId={currentUserId}
        />
      ))}
    </div>
  );
}

