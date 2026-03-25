import React from 'react';
import { LogoFooterSvg } from '../../../assets/svg/SvgComponents';
import './FooterBurgerMenu.css';

const footerLinks = [
  { label: 'Terms', href: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service' },
  { label: 'Privacy', href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' },
  { label: 'Security', href: 'https://github.com/security' },
  { label: 'Status', href: 'https://www.githubstatus.com' },
  { label: 'Docs', href: 'https://docs.github.com' },
  { label: 'Contact GitHub', href: 'https://support.github.com/' },
  { label: 'Pricing', href: 'https://github.com/pricing' },
  { label: 'Api', href: 'https://docs.github.com/en/rest' },
  { label: 'Training', href: 'https://skills.github.com' },
  { label: 'Blog', href: 'https://github.blog' },
  { label: 'About', href: 'https://github.com/about' },
];

export function FooterBurgerMenu() {
  return (
    <footer className="profile-footer">
      <div className="profile-footer__container">
        <div className="profile-footer__wrapper">
          <div className="profile-footer__logo">
            <LogoFooterSvg />
          </div>
          <div className="profile-footer__container--name">© 2023 GitHub, Inc.</div>
        </div>

        <ul className="profile-footer__list">
          {footerLinks.map((item) => (
            <li key={item.label} className="profile-footer__item">
              <a href={item.href} className="profile-footer__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
