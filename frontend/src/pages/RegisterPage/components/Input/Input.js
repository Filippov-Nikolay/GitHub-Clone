import React from 'react';

import { ErrorSVG } from '../../../../shared/assets/svg/SvgComponents';

import './input.css';
import './adaptive.css';

export default function Input({ label, placeholder, type="text", note, msgErrorTitle, msgError, isRequired = true, value, onChange }) {
    const hasError = msgError || msgErrorTitle;

    return (
        <div className="form-group">
            {label && <label className="form-group__label">{label}{isRequired ? '*' : ''}</label>}
            <input
                required={isRequired}
                className={`form-group__input ${hasError ? 'form-group__input--error' : ''}`}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {(msgError || msgErrorTitle) &&
                <div className="form-group__msg-error-wrapper">
                    {msgErrorTitle && <h4 className="form-group__msg-error-title">
                        <div className="form-group__msg-error-svg"><ErrorSVG/></div>
                        {msgErrorTitle}
                    </h4>}
                    {msgError && <p className="form-group__msg-error-text">{msgError}</p>}
                </div>
            }
            {note && 
                <p className="form-group__note">{note}</p>
            }
        </div>
    )
}
