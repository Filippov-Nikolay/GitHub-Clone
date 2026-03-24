import React from 'react';
import { Link } from 'react-router-dom';
import './btnPrimary.css';

export default function BtnPrimary({ btnText, btnHref="#", iconSvg, positionIcon }) {
    const isExternal = typeof btnHref === 'string' && (
        /^(https?:|mailto:|tel:)/i.test(btnHref) || btnHref.startsWith('#')
    );

    if (isExternal) {
        return (
            <a href={btnHref} className="btn-primary">
                {positionIcon == "left" && <span className="btn-primary__svg">{iconSvg}</span>}
                {btnText}
                {positionIcon == "right" && <span className="btn-primary__svg">{iconSvg}</span>}
            </a>
        );
    }

    return (
        <Link to={btnHref} className="btn-primary">
            {positionIcon == "left" && <span className="btn-primary__svg">{iconSvg}</span>}
            {btnText}
            {positionIcon == "right" && <span className="btn-primary__svg">{iconSvg}</span>}
        </Link>
    )
}
