import React from 'react';
import './aside.css';
import { FollowersSVG, GeoSVG, LinksSVG } from '../assets/svg/SvgComponents';
import Achiev from '../assets/svg/Achiev.svg'
import LogoProfile from '../assets/img/LogoProfile.png';
import Emblem1 from '../assets/svg/Emblem1.svg';
import Emblem2 from '../assets/svg/Emblem2.svg';
import Emblem3 from '../assets/svg/Emblem3.svg';
import Emblem4 from '../assets/svg/Emblem4.svg';

function EmblemOrganizations() {
    return (
        <div className='profile-aside__organizations'>
            <h3 className='profile-aside__title-name'>Organizations</h3>

            {/* Реализовать через map */}
            <ul className='profile-organizations-emblem__list'>
                <li className='profile-organizations-emblem__item'>
                    <a href='#'>
                        <img className='profile-organizations-emblem__img' src={Emblem1} alt='Emblem1'/>
                    </a>
                </li>
                <li className='profile-organizations-emblem__item'>
                    <a href='#'>
                        <img className='profile-organizations-emblem__img' src={Emblem2} alt='Emblem2'/>
                    </a>
                </li>
                <li className='profile-organizations-emblem__item'>
                    <a href='#'>
                        <img className='profile-organizations-emblem__img' src={Emblem3} alt='Emblem3'/>
                    </a>
                </li>
                <li className='profile-organizations-emblem__item'>
                    <a href='#'>
                        <img className='profile-organizations-emblem__img' src={Emblem4} alt='Emblem4'/>
                    </a>
                </li>
            </ul>    
        </div>
    );
}

export function Aside() {
    return (
        <aside className='profile-aside'>
                <div className='profile-aside__editor'>
                    {/* soon */}
                </div>
                <div className='profile-aside__main'>
                    <div className='profile-aside__wrapper'>
                        <div className='profile-aside__logo'>   
                            <img src={LogoProfile} alt='Logo Profile'/>
                        </div>
                        <div className='profile-aside__name'>
                            <h2 className='profile-aside__name-main'>chirag singla</h2>
                            <h3 className='profile-aside__name-sub'>chiragsingla17</h3>
                        </div>
                    </div>
                    <div className='profile-aside__bio'>
                        <span className='profile-aside__bio-text'>Currently working in KAN LABs, NYC USA as an ML Engineer(Remote)</span>
                    </div>
                    <div className='profile-aside__func'>
                        <button className='profile-aside__btn-edit'>Edit profile</button>
                        <div className='profile-aside__content-wrapper'>
                            <a href='#' className='profile-aside__links'>
                                <FollowersSVG /><span className='profile-aside__links-follow'> 12</span> followers
                            </a>
                            <a href='#' className='profile-aside__links'>
                                 <span className='profile-aside__links-follow'>3</span> following
                            </a>
                        </div>
                    </div>
                    <div className='profile-aside__info'>
                        <div className='profile-aside__content-wrapper'>
                            <GeoSVG /> <span className='profile-country__name'> Delhi</span>
                        </div>
                        <div className='profile-aside__content-wrapper'>
                            <LinksSVG />  <span className='profile-link__social'>https://neuralai.co/</span>
                        </div>
                    </div>
                    <div className='profile-aside__achievements'>
                        <h3 className='profile-aside__title-name'>Achievements</h3>
                        <div className='profile-aside__achiev-logo'>
                            <img src={Achiev} alt='profile-Achievements'/>
                        </div>
                        <div className='profile-aside__content-wrapper'>
                            <button className='profile-aside__btn-beta'>Beta</button>
                            <a href='#' className='profile-aside__link-feedback'>Send feedback</a>
                     </div>
                    </div>
                    <EmblemOrganizations />
                </div>
        </aside>
    );
}