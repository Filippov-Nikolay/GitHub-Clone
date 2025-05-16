import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.js';
import style from '../../shared/Header/header.module.css';
import { LogoSVG, NotificationSVG, SearchSvg, SearchSVG, PathSvg, DotsSvg } from '../assets/svg/SvgComponents';
import DefaultAvatar from '../assets/img/avatar_account.png'
import BtnSearch from '../Components/BtnSearch/BtnSearch.js';
import { ModalWindowInput } from '../Components/ModalWindowInput/ModalWindowInput';

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

    const [isModalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
        setModalVisible(!isModalVisible);
    };

  return (
    <header className={style["profile"]}>
        <ModalWindowInput isActive={isModalVisible} setIsActive={setModalVisible} theme={'dark'}/>
        <div className={style["profile__wrapper"]}>
            <div className={style["profile__item"]}>
                <button className={style["burger"]} onClick={() => setIsLeftMenuOpen((prev) => !prev)}><div className={style["burger__svg"]}><DotsSvg/></div></button>
                <div className={style["logo"]}><a className={style["logo__link"]} href='/'><div className={style["logo__svg"]}><LogoSVG/></div><h2 className={style["logo__title"]}>Dashboard</h2></a></div>
            </div>
            <div className={style["profile__item"]}>
                <BtnSearch
                    btnClick={handleButtonClick}
                    svgComponent={<SearchSvg></SearchSvg>}
                    btnText={'Type / to search'}
                    additionalSvgComponent={<PathSvg></PathSvg>}
                />

                <ul className={style['profile-content__wrapper']}>
                    <li className={style['profile-content__item']}>
                        <button onClick={toggleNotifications} className={style['notification-btn']}>
                            <NotificationSVG style={{ fill: unreadCount > 0 ? 'red' : 'inherit' }} />
                            {unreadCount > 0 && <span className={style['notification-count']}>{unreadCount}</span>}
                        </button>

                        {showNotifications && (
                        <div className={style['notifications-dropdown']} ref={dropdownRef}>
                            {notifications.length > 0 ? (
                            <>
                                <ul className={style['notifications-list']}>
                                {notifications.map((notification, index) => (
                                    <li key={index} className={style['notification-item']}>{notification}</li>
                                ))}
                                </ul>
                                <button className={style['all-notifications-btn']} onClick={markAllAsRead}>It has been read</button>
                            </>
                            ) : (
                            <div className={style['empty-notifications']}>There are no notifications right now</div>
                            )}
                        </div>
                        )}
                    </li>
                    <li className={style['profile-content__item']} onClick={() => setIsRightMenuOpen((prev) => !prev)} style={{ cursor: 'pointer' }}>
                        <button className={style['profile-content__btn']}><img className={style['profile-content__logo']}  src={avatar ? avatar : DefaultAvatar} alt='Profile' /></button>
                    </li>
                </ul>
            </div>
        </div>

        <BurgerMenu position='right' isOpen={isRightMenuOpen} onClose={() => setIsRightMenuOpen(false)} avatar={avatar} name={name} userName={userName}/>
        <BurgerMenu position='left' isOpen={isLeftMenuOpen} onClose={() => setIsLeftMenuOpen(false)} avatar={avatar} />
    </header>
  );
}
