import React, { useState, useEffect } from "react";
import axios from "axios";
import { ActionsSvg, SearchSvg, CloseSvg, BookSVG, ProfileSVG } from '../../../shared/assets/svg/SvgComponents';
import './modalWindowInput.css';
import InputSearch  from '../InputSearch/InputSearch.js'
import { searchUsers } from './Services/userSearchService.js';

export function ModalWindowInput({ isActive, setIsActive, theme = 'dark', userName}) {
    const [search, setSearchValue] = useState("");
    const [isSearchShow, setIsSearch] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const HandleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        setIsSearch(value.length > 0);
    };

    const saveRecentUser = (user) => {
    const key = 'recent_users';
    let recentUsers = JSON.parse(localStorage.getItem(key)) || [];


    recentUsers = recentUsers.filter(u => u.userName !== user.userName);

    recentUsers.unshift(user);

    recentUsers = recentUsers.slice(0, 5);

    localStorage.setItem(key, JSON.stringify(recentUsers));
};

const [localRecentUsers, setLocalRecentUsers] = useState([]);

useEffect(() => {
    if (userName && isActive) {
        const stored = localStorage.getItem('recent_users');
        if (stored) {
            setLocalRecentUsers(JSON.parse(stored));
        }
    }
}, [isActive, userName]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim().length > 0) {
                searchUsers(search)
                    .then(setSearchResults)
                    .catch(() => setSearchResults([]));
            } else {
                setSearchResults([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    const handleBackgroundClick = () => {
        setIsActive(false);
    };

    return (
        <div className="modal-window-input">
            <div className={`modal-window-input__content ${!isActive ? 'modal-window-input__content--hide' : ''} modal-window-input__content--${theme}`}>
                <div className="modal-window-input__bg" onClick={handleBackgroundClick}></div>
                <div className="modal-window-input__item">
                    {/* <div className="modal-window-input__wrapper-input">
                        <span className="modal-window-input__search-span"><SearchSvg /></span>
                        <input
                            className={`modal-window-input__input modal-window-input__input--${theme}`}
                            type="text"
                            value={search}
                            onChange={HandleSearchChange}
                            placeholder="Search users"
                        />
                        <span className="modal-window-input__search-span modal-window-input__search-span--close">
                            <CloseSvg />
                        </span>
                    </div> */}
                    <InputSearch
                        onChange={HandleSearchChange}
                        search={search}
                        theme={"dark"}
                        placeholder={"Search users"}
                    />
                    <div className="modal-window-input__action-list-content">
                        {isSearchShow && searchResults.map((user, index) => (
                            <a key={index} className="modal-window-input__action-list-link" href={`/${user.userName}`} onClick={() => saveRecentUser(user)}>
                                <span className="modal-window-input__search-span"><SearchSvg /></span>
                                <span className={`modal-window-input__action-list-output modal-window-input__action-list-output--${theme}`}>
                                    {user.userName}
                                </span>
                                <span className="modal-window-input__action-list-hint">{user.email}</span>
                            </a>
                        ))}
                        {isSearchShow && searchResults.length === 0 && (
                            <div className="modal-window-input__no-results">No users found</div>
                        )}
                    </div>
                </div>

                <div className="modal-window-input__item">
                    <ul className="sub-menu__modal-window modal-window-list">
                        <li className='modal-window-list__title-li'>
        {userName ? 'Owners' : 'Explore'}
    </li>

    {userName && localRecentUsers.length > 0 ? (
        localRecentUsers.map((user, index) => (
            <li className="modal-window-list__item" key={index}>
                <a href={`/${user.userName}`} className={`modal-window-list__link modal-window-list__link--${theme}`}>
                    <span className="modal-window-list__icon"><ProfileSVG /></span>
                    <div className="modal-window-list__wrapper">
                        <h6 className={`modal-window-list__title modal-window-list__title--${theme}`}>{user.userName}</h6>
                    </div>
                    <span className="modal-window-input__action-list-hint">{user.email}</span>
                </a>
            </li>
        ))
    ) : (
        <>
            <li className="modal-window-list__item">
                <a href="#" className={`modal-window-list__link modal-window-list__link--${theme}`}>
                    <ActionsSvg />
                    <div className="modal-window-list__wrapper">
                        <h6 className={`modal-window-list__title modal-window-list__title--${theme}`}>Actions</h6>
                    </div>
                    <span className="modal-window-input__action-list-hint">Learn More</span>
                </a>
            </li>
            <li className="modal-window-list__item">
                <a href="#" className={`modal-window-list__link modal-window-list__link--${theme}`}>
                    <ActionsSvg />
                    <div className="modal-window-list__wrapper">
                        <h6 className={`modal-window-list__title modal-window-list__title--${theme}`}>Actions</h6>
                    </div>
                    <span className="modal-window-input__action-list-hint">Learn More</span>
                </a>
            </li>
        </>
    )}
                    </ul>
                </div>

                <div className="modal-window-input__item">
                    <a className="modal-window-input__link" href="https://docs.github.com/ru/search-github/github-code-search/understanding-github-code-search-syntax">Search syntax tips</a>
                </div>
            </div>
        </div>
    );
}
