import { React } from 'react';
import './btnPrimary.css';

export default function BtnPrimary({ btnText, btnHref="#", iconSvg, positionIcon }) {
    return (
        <a href={btnHref} className="btn-primary">
            {positionIcon == "left" && <span className="btn-primary__svg">{iconSvg}</span>}
            {btnText}
            {positionIcon == "right" && <span className="btn-primary__svg">{iconSvg}</span>}
        </a> 
    )
}
