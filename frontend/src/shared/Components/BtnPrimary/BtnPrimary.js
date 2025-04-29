import { React } from 'react';
import './btnPrimary.css';

export default function BtnPrimary({ btnText, btnHref="#" }) {
    return (
        <a href={btnHref} className="btn-primary">{btnText}</a> 
    )
}