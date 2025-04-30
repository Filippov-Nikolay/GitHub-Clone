import React from 'react';
import './aside.css';
import { useNavigate } from 'react-router-dom';

import { FollowersSVG, GeoSVG, LinksSVG, InstagramSVG, LinkedInSVG, YouTubeSVG, ClockSVG } from '../assets/svg/SvgComponents'; // Добавьте иконки
import Achiev from '../assets/svg/Achiev.svg';
import Emblem1 from '../assets/svg/Emblem1.svg';
import Emblem2 from '../assets/svg/Emblem2.svg';
import Emblem3 from '../assets/svg/Emblem3.svg';
import Emblem4 from '../assets/svg/Emblem4.svg';
import DefaultAvatar from '../assets/img/avatar_account.png'

const emblemList = [Emblem1, Emblem2, Emblem3, Emblem4];

function EmblemOrganizations() {
    return (
        <div className='profile-aside__organizations'>
            <h3 className='profile-aside__title-name'>Organizations</h3>
            <ul className='profile-organizations-emblem__list'>
                {emblemList.map((emblem, index) => (
                    <li key={index} className='profile-organizations-emblem__item'>
                        <a href='#'>
                            <img className='profile-organizations-emblem__img' src={emblem} alt={`Emblem${index + 1}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const extractSocialData = (url) => {
    const instagramRegex = /instagram\.com\/([^\/]+)/;
    const linkedinRegex = /linkedin\.com\/(in\/[^\/?#]+)/i;
    const youtubeRegex = /youtube\.com\/(@[^\/?#]+)/i;

    if (instagramRegex.test(url)) {
        const linkName = url.match(instagramRegex)[1];
        return { linkName, icon: 'instagram', url: `https://instagram.com/${linkName}` };
    }

    if (linkedinRegex.test(url)) {
        const linkName = url.match(linkedinRegex)[1];
        return { linkName, icon: 'linkedin', url: `https://linkedin.com/${linkName}` };
    }

    if (youtubeRegex.test(url)) {
        const linkName = url.match(youtubeRegex)[1];
        return { linkName, icon: 'youtube', url: `https://youtube.com/${linkName}` };
    }

    return { linkName: url, icon: 'default', url };
};

export function Aside({ data, onEdit, isOwnProfile, isAuthenticated }) {

    // Функция для получения времени в зависимости от часового пояса
    const getCurrentTimeInTimeZone = (timezone) => {
        try {
            return new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
            }).format(new Date());
        } catch (error) {
            return 'Invalid timezone';
        }
    };

    const navigate = useNavigate();

    const handleFollowClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            // Заглушка — здесь будет логика подписки
            console.log('Follow clicked — заглушка');
        }
    }

    const renderSocialLink = (socialLink) => {
        const { linkName, icon, url } = extractSocialData(socialLink);
        let IconComponent;

        switch (icon) {
            case 'instagram':
                IconComponent = InstagramSVG;
                break;
            case 'linkedin':
                IconComponent = LinkedInSVG;
                break;
            case 'youtube':
                IconComponent = YouTubeSVG;
                break;
            default:
                IconComponent = LinksSVG;
                break;
        }

        return (
            <a className='profile-aside__content-wrapper' href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent />
                <span className='profile-link__social'>{linkName}</span>
            </a>
        );
    };

    if (!data) return <div>Loading profile...</div>;

    return (
        <aside className='profile-aside'>
            <div className='profile-aside__main'>
                <div className='profile-aside__wrapper'>
                    <div className='profile-aside__logo'>
                        <img src={data?.avatar ? data.avatar : DefaultAvatar} />
                    </div>
                    <div className='profile-aside__name'>
                        <h2 className='profile-aside__name-main'>{data.name}</h2>
                        <div className='profile-aside__gendeer-wrapper'>
                            <h3 className='profile-aside__name-sub'>{data.userName}</h3>
                            <h3 className='profile-aside__name-sub'> {data.pronouns}</h3>
                        </div>
                    </div>
                </div>
                {data.bio && (
                    <div className='profile-aside__bio'>
                        <span className='profile-aside__bio-text'>{data.bio}</span>
                    </div>
                )}
                <div className='profile-aside__func'>
                {isOwnProfile ? (
                        <button className='profile-aside__btn-edit' onClick={onEdit}>Edit profile</button> 
                    ) : (
                        <button className='profile-aside__btn-edit' onClick={handleFollowClick}>Follow</button> 
                    )}
                    <div className='profile-aside__content-wrapper'>
                        <a href='#' className='profile-aside__links'>
                            <FollowersSVG /><span className='profile-aside__links-follow'> 12</span> followers
                        </a>
                        <a href='#' className='profile-aside__links'>
                            <span className='profile-aside__links-follow'>3</span> following
                        </a>
                    </div>
                </div>
                {data.location && (
                    <div className='profile-aside__info'>
                        <div className='profile-aside__content-wrapper'>
                            <GeoSVG /> <span className='profile-country__name'>{data.location}</span>
                        </div>
                    </div>
                )}
                {data.currentLocationTime && data.timezone && (
                    <div className="profile-aside__info">
                        <div className="profile-aside__content-wrapper">
                            <ClockSVG /> <span className="profile-time__current">{data.timezone ? getCurrentTimeInTimeZone(data.timezone) : 'No timezone set'}</span>
                        </div>
                    </div>
                )}
                {data.webSite && (
                    <div className='profile-aside__info'>
                        <div className='profile-aside__content-wrapper'>
                            <LinksSVG /> <span className='profile-link__social'>{data.webSite}</span>
                        </div>
                    </div>
                )}
                {data.linkToSocial1 && renderSocialLink(data.linkToSocial1)}
                {data.linkToSocial2 && renderSocialLink(data.linkToSocial2)}
                {data.linkToSocial3 && renderSocialLink(data.linkToSocial3)}
                {data.linkToSocial4 && renderSocialLink(data.linkToSocial4)}
                <div className='profile-aside__achievements'>
                    <h3 className='profile-aside__title-name'>Achievements</h3>
                    <div className='profile-aside__achiev-logo'>
                        <img src={Achiev} alt='profile-Achievements' />
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
