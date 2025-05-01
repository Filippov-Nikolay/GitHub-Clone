import { React } from 'react';
import './blankslate.css'; 

export default function Blankslate({ SvgComponent, isBorder = true, title, description, btnComponent}) {
    return (
        <div className="blankslate" style={{ border: isBorder ? undefined  : 'none' }}>
            <div className="blankslate__content">
                <div className="blankslate__svg">{SvgComponent}</div>
                <h2 className="blankslate__title">{title}</h2>
                <p className="blankslate__description">{description}</p>
                { btnComponent == null ? null : btnComponent }
            </div>
        </div>
    );
}