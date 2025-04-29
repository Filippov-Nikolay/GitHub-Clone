import { React } from 'react';
import './btn.css';

export default function Btn({ btnHref = "#", btnText }) {
    return (
        <a href={btnHref} className="btn">{ btnText }</a>
    )
}