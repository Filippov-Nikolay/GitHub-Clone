import React, { useState, useEffect, useRef } from 'react';
import '../../shared/Header/header.css';
import { LogoSVG, NotificationSVG, SearchSvg, SearchSVG, PathSvg } from '../assets/svg/SvgComponents';
import LogoProfile from '../assets/img/LogoProfile.png';

// Перемешивает элементы массива в случайном порядке.
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Выбирает случайное количество элементов из начала перемешанного массива
const getRandomSubset = (array) => {
  const shuffled = shuffleArray(array);
  const randomLength = Math.floor(Math.random() * (shuffled.length + 1));
  return shuffled.slice(0, randomLength);
};

export function Header() {
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

  // Состояние уведомлений
  const [notifications, setNotifications] = useState(getRandomSubset(initialNotifications));
  const [unreadCount, setUnreadCount] = useState(notifications.length); // Количество непрочитанных уведомлений
  const [showNotifications, setShowNotifications] = useState(false); // Состояние для отображения/скрытия выпадающего списка уведомлений
  const [showEmptyMessage, setShowEmptyMessage] = useState(false); // Состояние для отображения сообщения "Уведомлений сейчас нет"

  // Ref для ссылки на элемент выпадающего списка уведомлений
  const dropdownRef = useRef(null);

  // Функции для управления состоянием уведомлений
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications); // Переключение состояния отображения выпадающего списка уведомлений
  };

  const markAllAsRead = () => {
    setUnreadCount(0); // Установка количества непрочитанных уведомлений в 0
    setNotifications([]); // Очистка списка уведомлений
    setShowEmptyMessage(true); // Показать сообщение "Уведомлений сейчас нет"
    setShowNotifications(false); // Скрытие выпадающего списка уведомлений
  };

  const closeNotifications = () => {
    setShowNotifications(false); // Скрытие выпадающего списка уведомлений
  };

  // useEffect для обработки кликов вне выпадающего списка уведомлений
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside); // Добавление события mousedown при открытом выпадающем списке уведомлений
    } else {
      document.removeEventListener('mousedown', handleClickOutside); // Удаление события mousedown при закрытом выпадающем списке уведомлений
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Очистка события mousedown при размонтировании компонента или при изменении зависимости
    };
  }, [showNotifications]);

  return (
    <header className='profile-header'>
      <div className='profile-header__wrapper'>
        <div className='profile-header__logo'>
          <a href='/Clone__GitHub/vb-app'><LogoSVG /></a>
        </div>
        <div className='profile-header__search-wrapper'>
          {/* Можешь подключить мою навигацию. Уже) */}
          <button className="profile-btn-input">
            <div className="profile-btn-wrapper">
              <span className="profile-btn-span profile-btn-span--search"><SearchSvg /></span>
              <span className="profile-btn-text">Search or jump to...</span>
            </div>
            <span className="profile-btn-span"><PathSvg /></span>
          </button>
          <button className='profile-btn__search'><SearchSVG /></button>
        </div>
        <div className='profile-header__content'>
          {/* Создать массив объектов и использовать map */}
          <ul className='profile-content__wrapper'>
            <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Pull requests</a></li>
            <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Issues</a></li>
            <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Codespaces</a></li>
            <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Marketplace</a></li>
            <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Explore</a></li>
          </ul>
        </div>
      </div>
      <div className='profile-header__items'>
        <ul className='profile-content__wrapper'>
          {/* Вынести "уведомления", как отдельный компонент */}
          <li className='profile-content__item'>
            <button onClick={toggleNotifications} className='notification-btn'>
              {/* Переделать NotificationSVG. Реализовать через класс. Сделать обёртку для NotificationSVG
              в которой будет класс с модификатором --red, --inherit*/}
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
                  <div className='empty-notifications'>
                    There are no notifications right now
                  </div>
                )}
              </div>
            )}
          </li>
          <li className='profile-content__item'>
            <a href='/Clone__GitHub/profile'><img className='profile-content__logo' src={LogoProfile} alt="Profile" /></a>
          </li>
        </ul>
      </div>
    </header>
  );
}
