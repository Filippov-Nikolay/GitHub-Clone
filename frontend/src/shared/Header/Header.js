import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.js';
import style from '../../shared/Header/header.module.css';
import { LogoSVG, NotificationSVG, SearchSvg, SearchSVG, PathSvg, DotsSvg } from '../assets/svg/SvgComponents';
import DefaultAvatar from '../assets/img/avatar_account.png'
import BtnSearch from '../Components/BtnSearch/BtnSearch.js';
import { ModalWindowInput } from '../Components/ModalWindowInput/ModalWindowInput';
import { useLocation } from 'react-router-dom';


export function Header({ avatar, name, userName, pageUserName, recentlyUserName  }) {

  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);



  const location = useLocation();

  const isDashboard = location.pathname === '/';
  const headerTitle = isDashboard ? 'Dashboard' : pageUserName || userName || '';


    const [isModalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
        setModalVisible(!isModalVisible);
    };

  return (
    <header className={style["profile"]}>
        <ModalWindowInput isActive={isModalVisible} setIsActive={setModalVisible} theme={'dark'} userName={recentlyUserName}/>
        <div className={style["profile__wrapper"]}>
            <div className={style["profile__item"]}>
                <button className={style["burger"]} onClick={() => setIsLeftMenuOpen((prev) => !prev)}><div className={style["burger__svg"]}><DotsSvg/></div></button>
                <div className={style["logo"]}><a className={style["logo__link"]} href='/'><div className={style["logo__svg"]}><LogoSVG/></div><h2 className={style["logo__title"]}>{headerTitle}</h2></a></div>
            </div>
            <div className={style["profile__item"]}>
                <BtnSearch
                    btnClick={handleButtonClick}
                    svgComponent={<SearchSvg></SearchSvg>}
                    btnText={'Type / to search'}
                    additionalSvgComponent={<PathSvg></PathSvg>}
                />

                <ul className={style['profile-content__wrapper']}>
                    <li className={style['profile-content__item']} onClick={() => setIsRightMenuOpen((prev) => !prev)} style={{ cursor: 'pointer' }}>
                        <button className={style['profile-content__btn']}><img className={style['profile-content__logo']}  src={avatar || DefaultAvatar} 
  onError={(e) => { e.target.onerror = null; e.target.src = DefaultAvatar; }} alt='Profile' /></button>
                    </li>
                </ul>
            </div>
        </div>

        <BurgerMenu position='right' isOpen={isRightMenuOpen} onClose={() => setIsRightMenuOpen(false)} avatar={avatar} name={name} userName={userName}/>
        <BurgerMenu position='left' isOpen={isLeftMenuOpen} onClose={() => setIsLeftMenuOpen(false)} avatar={avatar} />
    </header>
  );
}
