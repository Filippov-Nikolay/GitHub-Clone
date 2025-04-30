import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.js';
import '../../shared/Header/header.css';
import { LogoSVG, NotificationSVG, SearchSvg, SearchSVG, PathSvg, DotsSvg } from '../assets/svg/SvgComponents';
import DefaultAvatar from '../assets/img/avatar_account.png'

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomSubset = (array) => {
  const shuffled = shuffleArray(array);
  const randomLength = Math.floor(Math.random() * (shuffled.length + 1));
  return shuffled.slice(0, randomLength);
};

const initialNotifications = [
  'You were mentioned in a comment by @username.',
  'Your post was liked by @username.',
  'You have a new follower: @username.',
  'Your post received a new comment from @username.',
  'New discussion in the group "Group Name"',
  'Project "Project Name" has been updated.',
  'Your post is trending in the community.',
  'You`ve been invited to join the "Event/Group Name".',
  'Your notification settings have been updated.',
  'Explore our new feature: [Feature Name].'
];

export function Header({ avatar, name, userName }) {

  
  const [notifications, setNotifications] = useState(() => getRandomSubset(initialNotifications));
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleNotifications = useCallback(() => {
    setShowNotifications((prev) => !prev);
  }, []);

  const markAllAsRead = useCallback(() => {
    setUnreadCount(0);
    setNotifications([]);
    setShowNotifications(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  const headerLinks = useMemo(() => (
    ['Pull requests', 'Issues', 'Codespaces', 'Marketplace', 'Explore']
  ), []);

  return (
    <header className='profile-header'>
      <div className='profile-header__wrapper'>
      <div className='profile-header__logo-group'>
        <button className='profile-header__dots' onClick={() => setIsLeftMenuOpen((prev) => !prev)}>
          <DotsSvg />
        </button>
        <div className='profile-header__logo'>
          <a href='#'><LogoSVG /></a>
        </div>
      </div>
        <div className='profile-header__search-wrapper'>
          <button className='profile-btn-input'>
            <div className='profile-btn-wrapper'>
              <span className='profile-btn-span profile-btn-span--search'><SearchSvg /></span>
              <span className='profile-btn-text'>Search or jump to...</span>
            </div>
            <span className='profile-btn-span'><PathSvg /></span>
          </button>
          <button className='profile-btn__search'><SearchSVG /></button>
        </div>
        <div className='profile-header__content'>
          <ul className='profile-content__wrapper'>
            {headerLinks.map((text) => (
              <li key={text} className='profile-content__item'>
                <a className='profile-content__item-link' href='#'>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='profile-header__items'>
        <ul className='profile-content__wrapper'>
          <li className='profile-content__item'>
            <button onClick={toggleNotifications} className='notification-btn'>
              <NotificationSVG style={{ fill: unreadCount > 0 ? 'red' : 'inherit' }} />
              {unreadCount > 0 && <span className='notification-count'>{unreadCount}</span>}
            </button>

            {showNotifications && (
              <div className='notifications-dropdown' ref={dropdownRef}>
                {notifications.length > 0 ? (
                  <>
                    <ul className='notifications-list'>
                      {notifications.map((notification, index) => (
                        <li key={index} className='notification-item'>{notification}</li>
                      ))}
                    </ul>
                    <button className='all-notifications-btn' onClick={markAllAsRead}>It has been read</button>
                  </>
                ) : (
                  <div className='empty-notifications'>There are no notifications right now</div>
                )}
              </div>
            )}
          </li>
          <li className='profile-content__item' onClick={() => setIsRightMenuOpen((prev) => !prev)} style={{ cursor: 'pointer' }}>
            <button><img className='profile-content__logo'  src={avatar ? avatar : DefaultAvatar} alt='Profile' /></button>
          </li>
        </ul>
      </div>

      <BurgerMenu position='right' isOpen={isRightMenuOpen} onClose={() => setIsRightMenuOpen(false)} avatar={avatar} name={name} userName={userName}/>
      <BurgerMenu position='left' isOpen={isLeftMenuOpen} onClose={() => setIsLeftMenuOpen(false)} avatar={avatar} />
    </header>
  );
}