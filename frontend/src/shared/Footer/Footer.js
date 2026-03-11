import React from 'react';
import { Link } from 'react-router-dom';
import '../../shared/Footer/footer.css';
import { LogoFooterSvg } from '../assets/svg/SvgComponents';

export function Footer() {
    const footerLinks = [
        'Terms',
        'Privacy',
        'Security',
        'Status',
        'Docs',
        'Contact GitHub',
        'Pricing',
        'Api',
        'Training',
        'Blog',
        'About'
    ];

    return (
        <footer className='profile-footer'>
            <div className='profile-footer__container'>
                <div className='profile-footer__wrapper'>
                    <Link to='/' className='profile-footer__logo'>
                        <LogoFooterSvg />
                    </Link>
                    <div className='profile-footer__container--name'>
                        © 2023 GitHub, Inc.
                    </div>
                </div>
                <ul className='profile-footer__list'>
                    {footerLinks.map((linkText, index) => (
                        <li key={index} className='profile-footer__item'>
                            <a href='#' className='profile-footer__link'>
                                {linkText}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
