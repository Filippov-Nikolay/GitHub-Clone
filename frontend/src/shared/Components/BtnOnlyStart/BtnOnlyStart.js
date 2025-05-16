import React from 'react';
import { StarSvg } from '../../assets/svg/SvgComponents'

import './btnOnlyStart.css';
import './adaptive.css';

export default function BtnOnlyStart() {
    return (
        <div className="btn-only-star">
            <div className="btn-only-star__wrapper">
                <button type="button" className="btn-only-star__btn">
                    <StarSvg/>
                </button>
            </div>
        </div>
    )
}
