import React from 'react';
import './btn.css';

export default function Btn({ btnText, icon, onClick }) {
    return (
        <button className="btn" onClick={onClick} type='button'>
            <span className="btn__text">{ btnText }</span>
            {icon && <span className="btn__svg">{icon}</span>}
        </button>
    )
}
