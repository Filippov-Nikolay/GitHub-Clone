import React from 'react';
import {
  LogoGithub,
  LogoTwitter,
  LogoFacebook,
  LogoLinkedIn,
  LogoYouTube,
  LogoTwitch,
  LogoTikTok,
  LogoGitHub,
} from '../../../../shared/assets/svg/SvgComponents';

const defaultLink = 'https://github.com';
const footerLinkMap = {
  Features: 'https://github.com/features',
  Enterprise: 'https://github.com/enterprise',
  Copilot: 'https://github.com/features/copilot',
  Security: 'https://github.com/security',
  Pricing: 'https://github.com/pricing',
  Team: 'https://github.com/team',
  Resources: 'https://github.com/resources',
  Roadmap: 'https://github.com/github/roadmap',
  'Compare GitHub': 'https://github.com/why-github',
  'Developer API': 'https://docs.github.com/en/rest',
  Partners: 'https://github.com/partners',
  Education: 'https://education.github.com',
  Electron: 'https://www.electronjs.org',
  'GitHub CLI': 'https://cli.github.com',
  'GitHub Desktop': 'https://desktop.github.com',
  'GitHub Mobile': 'https://github.com/mobile',
  Docs: 'https://docs.github.com',
  'Community Forum': 'https://github.community',
  'Professional Services': 'https://github.com/services',
  'Premium Support': 'https://github.com/premium-support',
  Skills: 'https://skills.github.com',
  Status: 'https://www.githubstatus.com',
  'Contact GitHub': 'https://support.github.com',
  About: 'https://github.com/about',
  'Customer stories': 'https://github.com/customer-stories',
  Blog: 'https://github.blog',
  'The ReadME Project': 'https://github.com/readme',
  Careers: 'https://github.careers',
  Press: 'https://github.com/about/press',
  Inclusion: 'https://github.com/about/diversity',
  'Social Impact': 'https://socialimpact.github.com',
  Shop: 'https://github.shop',
  Terms: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service',
  Privacy: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  'Updated 08/2022': 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
  Sitemap: 'https://github.com/sitemap',
  'What is Git?': 'https://github.com/git-guides',
  'Manage cookies': 'https://docs.github.com/en/site-policy/privacy-policies/github-cookies',
  'Do not share my personal information': 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
};

export function Footer() {
  const footerList = [
    {
      id: 1,
      listTitle: 'Product',
      listItem: ['Features', 'Enterprise', 'Copilot', 'Security', 'Pricing', 'Team', 'Resources', 'Roadmap', 'Compare GitHub'],
    },
    {
      id: 2,
      listTitle: 'Platform',
      listItem: ['Developer API', 'Partners', 'Education', 'Electron', 'GitHub CLI', 'GitHub Desktop', 'GitHub Mobile'],
    },
    {
      id: 3,
      listTitle: 'Support',
      listItem: ['Docs', 'Community Forum', 'Professional Services', 'Premium Support', 'Skills', 'Status', 'Contact GitHub'],
    },
    {
      id: 4,
      listTitle: 'Company',
      listItem: ['About', 'Customer stories', 'Blog', 'The ReadME Project', 'Careers', 'Press', 'Inclusion', 'Social Impact', 'Shop'],
    },
  ];

  const footerSocial = [
    { id: 1, href: 'https://x.com/github', name: 'Twitter', svgSocial: <LogoTwitter /> },
    { id: 2, href: 'https://www.facebook.com/GitHub', name: 'Facebook', svgSocial: <LogoFacebook /> },
    { id: 3, href: 'https://www.linkedin.com/company/github', name: 'LinkedIn', svgSocial: <LogoLinkedIn /> },
    { id: 4, href: 'https://www.youtube.com/github', name: 'YouTube', svgSocial: <LogoYouTube /> },
    { id: 5, href: 'https://www.twitch.tv/github', name: 'Twitch', svgSocial: <LogoTwitch /> },
    { id: 6, href: 'https://www.tiktok.com/@github', name: 'TikTok', svgSocial: <LogoTikTok /> },
    { id: 7, href: 'https://github.com', name: 'GitHub', svgSocial: <LogoGitHub /> },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__item">
            <div className="footer__wrapper">
              <a className="footer__logo" href="https://github.com" aria-label="logo">
                <LogoGithub />
              </a>
              <h3 className="footer__title">Subscribe to our developer newsletter</h3>
              <p className="footer__sub-text">Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
              <a className="footer__btn" href="https://github.blog/news-insights/product-news/subscribe-to-the-github-newsletter/">
                Subscribe
              </a>
            </div>
          </div>
          <div className="footer__item-wrapper">
            {footerList.map((list) => (
              <div className="footer__item" key={list.id}>
                <ul className="footer-menu__list">
                  <li className="footer-menu__item footer-menu__item--title">{list.listTitle}</li>
                  {list.listItem.map((item) => (
                    <li className="footer-menu__item footer-menu__item--title" key={item}>
                      <a href={footerLinkMap[item] || defaultLink} className="footer-menu__link">
                        {item}
                      </a>
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
                  <a className="footer-sub-content-menu__link" href={footerLinkMap.Terms}>
                    Terms
                  </a>
                </li>
                <li className="footer-sub-content-menu__item">
                  <a className="footer-sub-content-menu__link" href={footerLinkMap.Privacy}>
                    Privacy
                  </a>
                  (
                  <a className="footer-sub-content-menu__link" href={footerLinkMap['Updated 08/2022']}>
                    Updated 08/2022
                  </a>
                  )
                </li>
                <li className="footer-sub-content-menu__item">
                  <a className="footer-sub-content-menu__link" href={footerLinkMap.Sitemap}>
                    Sitemap
                  </a>
                </li>
                <li className="footer-sub-content-menu__item">
                  <a className="footer-sub-content-menu__link" href={footerLinkMap['What is Git?']}>
                    What is Git?
                  </a>
                </li>
                <li className="footer-sub-content-menu__item">
                  <a className="footer-sub-content-menu__link" href={footerLinkMap['Manage cookies']}>
                    Manage cookies
                  </a>
                </li>
                <li className="footer-sub-content-menu__item">
                  <a className="footer-sub-content-menu__link" href={footerLinkMap['Do not share my personal information']}>
                    Do not share my personal information
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-sub-content__item">
              <ul className="footer-sub-content-menu__list">
                {footerSocial.map((social) => (
                  <li className="footer-sub-content-menu__item" key={social.id}>
                    <a className="footer-sub-content-menu__link" href={social.href} aria-label={social.name}>
                      {social.svgSocial}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
