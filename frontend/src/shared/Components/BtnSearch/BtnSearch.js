import { React } from 'react';
import './btnSearch.css';

export default function BtnSearch({ btnClick = null, svgComponent, btnText, additionalSvgComponent, bgColor = "#2e374ad1" }) {
    return (
        <button className="btn-search" onClick={btnClick} style={{ backgroundColor: bgColor }}>
            <div className="btn-search__wrapper">
                <span className="btn-icon__span btn-icon__span--search">{svgComponent}</span>
                <span className="nav__btn-text">{btnText}</span>
            </div>
            {additionalSvgComponent && <span className="btn-icon__span">{additionalSvgComponent}</span>}
        </button>
    )
}