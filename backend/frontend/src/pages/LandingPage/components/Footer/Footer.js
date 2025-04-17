import React, {} from "react";
import { 
    LogoGithub, LogoTwitter, LogoFacebook, 
    LogoLinkedIn, LogoYouTube, LogoTwitch, LogoTikTok, LogoGitHub
} from '../../assets/svg/svgComponents'

export function Footer() {
    const footerList = [
        {
            id: 1,
            listTitle: 'Product',
            listItem: ['Features', 'Enterprise', 'Copilot', 'Security', 'Pricing', 'Team', 'Resources', 'Roadmap', 'Compare GitHub']
        },
        {
            id: 2,
            listTitle: 'Platform',
            listItem: ['Developer API', 'Partners', 'Education', 'Electron', 'GitHub CLI', 'GitHub Desktop', 'GitHub Mobile']
        },
        {
            id: 3,
            listTitle: 'Support',
            listItem: ['Docs', 'Community Forum', 'Professional Services', 'Premium Support', 'Skills', 'Status', 'Contact GitHub']
        },
        {
            id: 4,
            listTitle: 'Company',
            listItem: ['About', 'Customer stories', 'Blog', 'The ReadME Project', 'Careers', 'Press', 'Inclusion', 'Social Impact', 'Shop']
        }
    ];
    const footerSocial = [
        {id: 1, href: '#', name: 'Twitter', svgSocial: <LogoTwitter></LogoTwitter>},
        {id: 2, href: '#', name: 'Facebook', svgSocial: <LogoFacebook></LogoFacebook>},
        {id: 3, href: '#', name: 'LinkedIn', svgSocial: <LogoLinkedIn></LogoLinkedIn>},
        {id: 4, href: '#', name: 'YouTube', svgSocial: <LogoYouTube></LogoYouTube>},
        {id: 5, href: '#', name: 'Twitch', svgSocial: <LogoTwitch></LogoTwitch>},
        {id: 6, href: '#', name: 'TikTok', svgSocial: <LogoTikTok></LogoTikTok>},
        {id: 7, href: '#', name: 'GitHub', svgSocial: <LogoGitHub></LogoGitHub>},
    ];

    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__item">
                        <div className="footer__wrapper">
                            <a className="footer__logo" href="#" aria-label='logo'><LogoGithub></LogoGithub></a>
                            <h3 className='footer__title'>Subscribe to our developer newsletter</h3>
                            <p className='footer__sub-text'>Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
                            <a className='footer__btn' href="#">Subscribe</a>
                        </div>
                    </div>
                    <div className="footer__item-wrapper">
                        {footerList.map((list, index) => (
                            <div className="footer__item" key={list.id}>
                                <ul className="footer-menu__list">
                                    <li className="footer-menu__item footer-menu__item--title">{list.listTitle}</li>
                                    {list.listItem.map((item, indexItem) => (
                                        <li className="footer-menu__item footer-menu__item--title" key={indexItem}>
                                            <a href="#" className="footer-menu__link">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-sub-content">
                <div className="container">
                    <div className="footer-sub-content__wrapper">
                        <div className="footer-sub-content__item">
                            <ul className="footer-sub-content-menu__list">
                                <li className="footer-sub-content-menu__item">© 2024 GitHub, Inc.</li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Terms</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Privacy</a>
                                    (<a className="footer-sub-content-menu__link" href="#">Updated 08/2022</a>)
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Sitemap</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">What is Git?</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Manage cookies</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Do not share my personal information</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-sub-content__item">
                            <ul className="footer-sub-content-menu__list">
                                {footerSocial.map((social, index) => (
                                    <li className="footer-sub-content-menu__item" key={social.id}>
                                        <a className="footer-sub-content-menu__link" href={social.href} aria-label={social.name}>{social.svgSocial}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}