import React from 'react';
import './following.css';

// Компонент для отображения одного пользователя
function FollowingUserItem({ user }) {
  // user: { id, name, username, avatar, description, location, isFollowing }

  return (
    <div className="following-user">
      <div className="following-user__avatar">
        <a href={`/profile/${user.username}`} className="following-user__avatar-link">
          <img
            className="following-user__avatar-img"
            src={user.avatar || '/default-avatar.png'}
            alt={`${user.name || user.username} avatar`}
          />
        </a>
      </div>

      <div className="following-user__info">
        <a className="following-user__name-link" href={`/${user.username}`}>
          <span className="following-user__name">{user.name || user.username}</span>{' '}
          <span className="following-user__username">{user.username}</span>
        </a>
        <div className="following-user__description">
          {user.description || ''}
        </div>
        <p className="following-user__location">{user.location || ''}</p>
      </div>

      <div className="following-user__actions">
        {user.isFollowing ? (
          <button className="following-user__button following-user__button--disabled" disabled>
            Following
          </button>
        ) : (
          <button className="following-user__button">Follow</button>
        )}
      </div>
    </div>
  );
}

// Основной компонент, показывающий список подписок
export default function FollowingList() {
  const users = [
    {
      id: 1,
      name: 'Dmitrii',
      username: 'Dmitrii',
      avatar: 'https://i.pravatar.cc/50?img=1',
      description:
        'Full-Stack Developer 💻 | C++, C#, TypeScript | Angular · React · Node.js | ASP.NET · SQL · .NET · UML',
      location: 'Germany',
      isFollowing: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://i.pravatar.cc/50?img=2',
      description: 'Frontend Engineer | React, Angular',
      location: '',
      isFollowing: false,
    },
  ];

  return (
    <div className="following-list">
      {users.map(user => (
        <FollowingUserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
