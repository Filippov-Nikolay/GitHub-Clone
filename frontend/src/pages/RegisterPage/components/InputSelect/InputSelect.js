import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Btn from '../../../../shared/Components/Btn/Btn.js'
import BtnSearch from '../../../../shared/Components/BtnSearch/BtnSearch'
import InputSearch from '../../../../shared/Components/InputSearch/InputSearch';
import { CheckSVG, CloseBurgerSVG, ArrowDownSvg, SearchSVG } from '../../../../shared/assets/svg/SvgComponents'

import './inputSelect.css';
import './adaptive.css';

export default function InputSelect({ label, icon = <ArrowDownSvg/>, note, options, defaultOptionIndex = 0, onSelect, isRequired = true }) {
    const [selectedIndex, setSelectedIndex] = useState(defaultOptionIndex);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearchValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    const toggleMenu = () => setIsOpen(prev => !prev);

    const handleSelect = (index) => {
        const realIndex = options.indexOf(filteredOptions[index]);
        setSelectedIndex(realIndex);
        onSelect?.(options[realIndex]);
        setIsOpen(false);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        if (value.trim() === '') {
            setFilteredOptions(options);
        } else {
            const filtered = options.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        }
    };

    // Автоопределение страны
    useEffect(() => {
        axios.get('https://ipapi.co/json/')
            .then(res => {
                const userCountry = res.data.country_name;
                const foundIndex = options.findIndex(opt => opt.toLowerCase() === userCountry.toLowerCase());
                if (foundIndex !== -1) {
                    setSelectedIndex(foundIndex);
                    onSelect?.(options[foundIndex]);
                }
            })
            .catch(err => {
                console.error('Ошибка при автоопределении страны:', err);
            });
    }, [options, onSelect]);

    return (
        <div className="input-select">
            {label && <label className="form-group__label">{label}{isRequired ? '*' : ''}</label>}
            <div className={`bg-for-close ${isOpen ? '' : 'bg-for-close--hidden'}`} onClick={toggleMenu}></div>
            <Btn
                btnText={options[selectedIndex] || label}
                icon={icon}
                onClick={toggleMenu}
            />
            <div className={`input-select__wrapper ${isOpen ? '' : 'input-select__wrapper--hidden'}`}>
                <h4 className="input-select__title">
                    <div className="input-select__title-wrapper">
                        Select { label }
                        <span className="input-select__close-svg" onClick={toggleMenu}><CloseBurgerSVG/></span>
                    </div>
                    <InputSearch 
                        isCloseSvg={false}
                        onChange={handleSearchChange}
                        search={search}
                    />
                </h4>
                
                <ul className="input-select__menu">
                    {filteredOptions.map((item, index) => (
                        <li key={ index } className="input-select__item" onClick={() => handleSelect(index)}>
                            <span className={`input-select__svg ${selectedIndex === index ? '' : 'input-select__svg--hidden'}`}><CheckSVG /></span>
                            <span className="input-select__text">{ item }</span>
                        </li>
                    ))}
                </ul>
            </div>
            {note && 
                <p className="form-group__note">{note}</p>
            }
        </div>
    )
}
