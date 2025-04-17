import React from 'react';
import './aside.css';
import { FollowersSVG, GeoSVG, LinksSVG, InstagramSVG, LinkedInSVG, YouTubeSVG, ClockSVG } from '../assets/svg/SvgComponents'; // Добавьте иконки
import Achiev from '../assets/svg/Achiev.svg';
import Emblem1 from '../assets/svg/Emblem1.svg';
import Emblem2 from '../assets/svg/Emblem2.svg';
import Emblem3 from '../assets/svg/Emblem3.svg';
import Emblem4 from '../assets/svg/Emblem4.svg';

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
        const username = url.match(instagramRegex)[1];
        return { username, icon: 'instagram', url: `https://instagram.com/${username}` };
    }

    if (linkedinRegex.test(url)) {
        const username = url.match(linkedinRegex)[1];
        return { username, icon: 'linkedin', url: `https://linkedin.com/${username}` };
    }

    if (youtubeRegex.test(url)) {
        const username = url.match(youtubeRegex)[1];
        return { username, icon: 'youtube', url: `https://youtube.com/${username}` };
    }

    return { username: url, icon: 'default', url };
};

function getCurrentTimeInTimeZone(timezone) {
    try {
        return new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date());
    } catch (error) {
        return 'Invalid timezone';
    }
}

export function Aside({ data, onEdit }) {

    const renderSocialLink = (socialLink) => {
        const { username, icon, url } = extractSocialData(socialLink);
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
                <span className='profile-link__social'>{username}</span>
            </a>
        );
    };

    return (
        <aside className='profile-aside'>
            <div className='profile-aside__main'>
                <div className='profile-aside__wrapper'>
                    <div className='profile-aside__logo'>
                        <img src={`https://localhost:7044${data.avatar}`} alt='Logo Profile' />
                    </div>
                    <div className='profile-aside__name'>
                        <h2 className='profile-aside__name-main'>{data.name}</h2>
                        <h3 className='profile-aside__name-sub'>{data.pronouns}</h3>
                    </div>
                </div>
                {data.bio && (
                    <div className='profile-aside__bio'>
                        <span className='profile-aside__bio-text'>{data.bio}</span>
                    </div>
                )}
                <div className='profile-aside__func'>
                    <button className='profile-aside__btn-edit' onClick={onEdit}>Edit profile</button>
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
                {data.showTime && data.timezone && (
                    <div className="profile-aside__info">
                        <div className="profile-aside__content-wrapper">
                            <ClockSVG /> <span className="profile-time__current">{getCurrentTimeInTimeZone(data.timezone)}</span>
                        </div>
                    </div>
                )}
                {data.website && (
                    <div className='profile-aside__info'>
                        <div className='profile-aside__content-wrapper'>
                            <LinksSVG /> <span className='profile-link__social'>{data.website}</span>
                        </div>
                    </div>
                )}
                {data.social1 && renderSocialLink(data.social1)}
                {data.social2 && renderSocialLink(data.social2)}
                {data.social3 && renderSocialLink(data.social3)}
                {data.social4 && renderSocialLink(data.social4)}
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
