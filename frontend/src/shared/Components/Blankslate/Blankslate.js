import { React } from 'react';
import './blankslate.css'; 

export default function Blankslate({ SvgComponent, title, description, isBtn = true, btnText, btnHref="#", isLink = false, linkText, linkHref="#" }) {
    return (
        <div className="blankslate">
            <div className="blankslate__content">
                <div className="blankslate__svg">{SvgComponent}</div>
                <h2 className="blankslate__title">{title}</h2>
                <p className="blankslate__description">{description} {isLink ? <a href={linkHref} className='blankslate__link'>{linkText}</a> : null}</p>
                {isBtn ? 
                <a href={btnHref} className="btn blankslate__btn">{btnText}</a> 
                : null}
            </div>
        </div>
    );
}