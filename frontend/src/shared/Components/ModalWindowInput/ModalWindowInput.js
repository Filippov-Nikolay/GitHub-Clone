import React, { useState } from "react";
import { ActionsSvg, SearchSvg, CloseSvg } from '../../../shared/assets/svg/SvgComponents'
import './modalWindowInput.css';

export function ModalWindowInput({isActive, setIsActive, theme = 'dark'}) {
    const [search, setSearchValue] = useState("");
    const [isSearchShow, setIsSearch] = useState(false);

    function HandleSearchChange(event) {
        const value = event.target.value;
        setSearchValue(value);
        setIsSearch(value.length !== 0);
    }

    const handleBackgroundClick = () => {
        setIsActive(false); 
    };

    return (
        <div className="modal-window-input">
            <div className={`modal-window-input__content ${!isActive ? 'modal-window-input__content--hide' : ''} modal-window-input__content--${theme}`}>
                <div className="modal-window-input__bg" onClick={handleBackgroundClick}></div>
                <div className="modal-window-input__item">
                    <div className="modal-window-input__wrapper-input">
                        <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                        <input className={`modal-window-input__input modal-window-input__input--${theme}`} type="text" onChange={HandleSearchChange}/>
                        <span className="modal-window-input__search-span modal-window-input__search-span--close"><CloseSvg></CloseSvg></span>
                    </div>
                    <div className="modal-window-input__action-list-content">
                        <a className={isSearchShow ? "modal-window-input__action-list-link" : "modal-window-input__action-list-link modal-window-input__action-list-link--hide"} href="#">
                            <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                            <span className={`modal-window-input__action-list-output modal-window-input__action-list-output--${theme}`}>{search}</span>
                            <span className="modal-window-input__action-list-hint">Search all of GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="modal-window-input__item">
                    <ul className="sub-menu__modal-window modal-window-list">
                        <li className='modal-window-list__title-li'>Explore</li>
                        <li className="modal-window-list__item">
                            <a href="#" className={`modal-window-list__link modal-window-list__link--${theme}`}>
                                <ActionsSvg></ActionsSvg>
                                <div className="modal-window-list__wrapper">
                                    <h6 className={`modal-window-list__title modal-window-list__title--${theme}`}>Actions</h6>
                                </div>
                                <span className="modal-window-input__action-list-hint">Learn More</span>
                            </a>
                        </li>
                        <li className="modal-window-list__item">
                            <a href="#" className={`modal-window-list__link modal-window-list__link--${theme}`}>
                                <ActionsSvg></ActionsSvg>
                                <div className="modal-window-list__wrapper">
                                    <h6 className={`modal-window-list__title modal-window-list__title--${theme}`}>Actions</h6>
                                </div>
                                <span className="modal-window-input__action-list-hint">Learn More</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="modal-window-input__item">
                    <a className="modal-window-input__link" href="#">Search syntax tips</a>
                </div>
            </div>
        </div>
    )
}