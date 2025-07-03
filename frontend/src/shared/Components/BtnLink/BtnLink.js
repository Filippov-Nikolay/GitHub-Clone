import { React } from 'react';
import './btn.css';

export default function BtnLink({ btnHref = "#", btnText }) {
    return (
        <a href={btnHref} className="btn">{ btnText }</a>
    )
}
