import { React } from 'react';
import './btnSearch.css';

export default function BtnSearch({ btnClick = null, svgComponent, btnText, additionalSvgComponent, bgColor = "#2e374ad1" }) {
    return (
        <button className="btn-search" onClick={btnClick} style={{ backgroundColor: bgColor }}>
            <div className="btn-search__wrapper">
                <span className="btn-search__span btn-search__span--search">{svgComponent}</span>
                <span className="btn-search__text">{btnText}</span>
            </div>
            {additionalSvgComponent && <span className="btn-search__span">{additionalSvgComponent}</span>}
        </button>
    )
}
