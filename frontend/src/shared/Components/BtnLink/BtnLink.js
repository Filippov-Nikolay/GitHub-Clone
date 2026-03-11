import React from 'react';
import { Link } from 'react-router-dom';
import './btn.css';

export default function BtnLink({ btnHref = "#", btnText }) {
    const isExternal = typeof btnHref === 'string' && (
        /^(https?:|mailto:|tel:)/i.test(btnHref) || btnHref.startsWith('#')
    );

    if (isExternal) {
        return (
            <a href={btnHref} className="btn">{btnText}</a>
        );
    }

    return (
        <Link to={btnHref} className="btn">{btnText}</Link>
    )
}
