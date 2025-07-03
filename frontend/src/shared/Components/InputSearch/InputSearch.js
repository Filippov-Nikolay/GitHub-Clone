import React from 'react';

import { SearchSVG, CloseSvg } from '../../assets/svg/SvgComponents'

import './inputSearch.css';
import './adaptive.css';

export default function InputSearch({ theme, search, onChange, placeholder, isCloseSvg = true }) {
    

    return (
        <div className="input-search__wrapper-input">
            <span className="input-search__search-span"><SearchSVG /></span>
            <input
                className={`input-search__input input-search__input--${theme}`}
                type="text"
                value={search}
                onChange={onChange}
                placeholder={placeholder}
            />
            <span className="input-search__search-span input-search__search-span--close">
                {isCloseSvg && <CloseSvg />}
            </span>
        </div>
    )
}
