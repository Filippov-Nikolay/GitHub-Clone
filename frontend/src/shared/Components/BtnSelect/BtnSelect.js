import React, {useState} from 'react';

import Btn from '../Btn/Btn'
import { CheckSVG, CloseBurgerSVG } from '../../assets/svg/SvgComponents'

import './btnSelect.css';
import './adaptive.css';

export default function BtnSelect({ label, icon, options, onSelect }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleSelect = (index) => {
        setSelectedIndex(index);

        // Сообщаем наружу
        onSelect?.(options[index]);
    };

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <div className="btn-select">
            <div className={`bg-for-close ${isOpen ? '' : 'bg-for-close--hidden'}`} onClick={toggleMenu}></div>
            <Btn
                btnText={label}
                icon={icon}
                onClick={toggleMenu}
            />
            <div className={`btn-select__wrapper ${isOpen ? '' : 'btn-select__wrapper--hidden'}`}>
                <h4 className="btn-select__title">
                    Select { label }
                    <span className="btn-select__close-svg" onClick={toggleMenu}><CloseBurgerSVG/></span>
                </h4>
                <ul className="btn-select__menu">
                    {options.map((item, index) => (
                        <li key={ index } className="btn-select__item" onClick={() => handleSelect(index)}>
                            <span className={`btn-select__svg ${selectedIndex === index ? '' : 'btn-select__svg--hidden'}`}><CheckSVG /></span>
                            <span className="btn-select__text">{ item }</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
