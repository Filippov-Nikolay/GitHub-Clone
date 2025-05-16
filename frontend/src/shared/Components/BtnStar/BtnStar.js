import React from 'react';
import { ArrowDownSvg, StarSvg } from '../../assets/svg/SvgComponents';

import './btnStar.css';
import './adaptive.css';

export default function BtnStar() {
    return (
        <div className="btn-star">
            <div className="btn-star__wrapper">
                <button type="button" className="btn-star__btn">
                    <StarSvg/>
                    <div className="btn-star__span">Star</div>
                </button>
                <button type="button" className="btn-star__btn"><ArrowDownSvg/></button>
            </div>
        </div>
    )
}
