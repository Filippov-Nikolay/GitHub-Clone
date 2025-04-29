import React, { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import '../../shared/Nav/nav.css';
import { OverviewSVG, RepositoriesSVG, ProjectsSVG, PackagesSVG, StarsSVG, DotsSvg } from '../assets/svg/SvgComponents';


export function Nav({ profileUserName }) {

    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Overview', icon: <OverviewSVG />, href: `/${profileUserName}` },
        { name: 'Repositories', icon: <RepositoriesSVG />, href: `/${profileUserName}?tab=repositories` },
        { name: 'Projects', icon: <ProjectsSVG />, href: '#' },
        { name: 'Packages', icon: <PackagesSVG />, href: '#' },
        { name: 'Stars', icon: <StarsSVG />, href: '#' }
    ];

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <nav className="profile-nav">
            <ul className="profile-nav__list-wrapper">
                {navItems.map((item, index) => (
                    <li key={index} className={`profile-nav__list-item ${location.pathname + location.search === item.href ? 'active' : ''}`}>
                        <Link to={item.href} className="profile-list__item-link">
                            <div className="profile-item--icon">{item.icon}</div>
                            <span className="profile-item-text">{item.name}</span>
                        </Link>
                    </li>
                ))}

                <li className="profile-nav__list-item profile-dropdown-toggle" onClick={toggleDropdown}>
                    <a href="#" className="profile-list__item-link">
                        <DotsSvg />
                    </a>
                    {showDropdown && (
                        <ul className="profile-dropdown-content">
                            {navItems.map((item, index) => (
                                <li key={index} className={`profile-dropdown-item ${location.pathname + location.search === item.href ? 'active' : ''}`} onClick={closeDropdown}>
                                    <Link to={item.href} className="profile-dropdown-item-link">
                                        {item.icon}
                                        <span className="profile-item-text">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}
