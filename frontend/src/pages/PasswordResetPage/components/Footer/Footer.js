import React from 'react';

const footerLinks = [
  { href: 'https://docs.github.com/en/site-policy/github-terms/github-terms-of-service', label: 'Terms' },
  { href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement', label: 'Privacy' },
  { href: 'https://support.github.com/', label: 'Contact GitHub Support' },
  { href: 'https://docs.github.com/en/site-policy/privacy-policies/github-cookies', label: 'Manage cookies' },
  { href: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement', label: 'Do not share my personal information' },
];

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          {footerLinks.map((item) => (
            <li key={item.label} className="footer__item">
              <a href={item.href} className="footer__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
