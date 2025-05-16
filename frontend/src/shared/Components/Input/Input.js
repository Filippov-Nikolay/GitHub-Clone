import React from 'react';

import './input.css';
import './adaptive.css';

export default function Input({ placeholder }) {
    return (
        <input className="input" type="text" placeholder={placeholder}/>
    )
}
