import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'; // импортируйте Link для навигации
import {
  CommunitySVG, CopilotSVG, DocsSVG, EnterprisesSVG, FeaturePreviewSVG,
  GistsSVG, LogoSVG, OrganizationsSVG, ProfileSVG, ProjectsSVG, RepositorySVG,
  SettingsSVG, SponsorSVG, StarSvg, SupportSVG, TryEnterpriseSVG, WebsiteSVG,
  SignOutSVG, SwitchSVG, CloseBurgerSVG, HomeSVG, IssuesSVG, PullRequestsSVG,
  DiscussionsSVG, CodespacesSVG, ExploreSVG, MarketplaceSVG, SearchSVG
} from '../assets/svg/SvgComponents';
import './BurgerMenu.css';
import { FooterBurgerMenu } from './components/FooterBurgerMenu/FooterBurgerMenu.js';
import DefaultAvatar from '../assets/img/avatar_account.png'

export function BurgerMenu({ isOpen, onClose, position = 'left', avatar, nickname }) {
  const username = Cookies.get('dotcom_user');
  if (!isOpen) return null;

  const repositories = [
    { name: 'repo1', avatar: 'https://via.placeholder.com/30' },
    { name: 'repo2', avatar: 'https://via.placeholder.com/30' },
    { name: 'repo3', avatar: 'https://via.placeholder.com/30' },
  ];

  const leftMenuItems = [
    { text: 'Home', icon: <HomeSVG /> },
    { text: 'Issues', icon: <IssuesSVG /> },
    { text: 'Pull requests', icon: <PullRequestsSVG /> },
    { text: 'Projects', icon: <ProjectsSVG /> },
    { text: 'Discussions', icon: <DiscussionsSVG /> },
    { text: 'Codespaces', icon: <CodespacesSVG /> },
    { text: 'Copilot', icon: <CopilotSVG /> },
  ];

  const bottomLeftMenuItems = [
    { text: 'Explore', icon: <ExploreSVG /> },
    { text: 'Marketplace', icon: <MarketplaceSVG /> },
  ];

  const rightMenuItems = [
    { text: 'Your profile', icon: <ProfileSVG />, getPath: (username) => `/${username}` },
    { text: 'Your repository', icon: <RepositorySVG /> },
    { text: 'Your Copilot', icon: <CopilotSVG /> },
    { text: 'Your projects', icon: <ProjectsSVG /> },
    { text: 'Your stars', icon: <StarSvg /> },
    { text: 'Your gists', icon: <GistsSVG /> },
    { text: 'Your organizations', icon: <OrganizationsSVG /> },
    { text: 'Your enterprises', icon: <EnterprisesSVG /> },
    { text: 'Your sponsors', icon: <SponsorSVG /> },
  ];

  const bottomRightMenuItems = [
    { text: 'Try Enterprises', icon: <TryEnterpriseSVG /> },
    { text: 'Feature preview', icon: <FeaturePreviewSVG /> },
    { text: 'Settings', icon: <SettingsSVG /> },
  ];

  const footerMenuItems = [
    { text: 'GitHub Website', icon: <WebsiteSVG /> },
    { text: 'GitHub Docs', icon: <DocsSVG /> },
    { text: 'GitHub Support', icon: <SupportSVG /> },
    { text: 'GitHub Community', icon: <CommunitySVG /> },
  ];

  return (
    <>
      <div className="burger-menu__overlay" onClick={onClose}></div>
      
      <div className={`burger-menu burger-menu--${position} ${isOpen ? 'burger-menu--open' : ''}`}>
        {position === 'left' && (
          <>
            <div className="burger-menu__header">
              <div className="burger-menu__logo-wrapper">
                <span className="burger-menu__logo"><LogoSVG /></span>
              </div>
              <button className="burger-menu__close-btn" onClick={onClose}><CloseBurgerSVG /></button>
            </div>

            <ul className="burger-menu__list">
              {leftMenuItems.map((item, index) => (
                <li key={index} className="burger-menu__item">
                  <a href="#" className="burger-menu__item">
                    <span className="burger-menu__icon">{item.icon}</span>
                    <span className="burger-menu__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="burger-menu__divider"></div>

            <ul className="burger-menu__list">
              {bottomLeftMenuItems.map((item, index) => (
                <li key={index} className="burger-menu__item">
                  <a href="#" className="burger-menu__item">
                    <span className="burger-menu__icon">{item.icon}</span>
                    <span className="burger-menu__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="burger-menu__divider"></div>

            <div className="burger-menu__repositories">
              <div className="burger-menu__repositories-header">
                <span className="burger-menu__repositories-title">Repositories</span>
                <span className="burger-menu__search-icon"><SearchSVG /></span>
              </div>
              <ul className="burger-menu__repositories-list">
                {repositories.map((repo, index) => (
                  <li key={index} className="burger-menu__repository-item">
                    <a href="#" className="burger-menu__item">
                      <img src={repo.avatar} alt="Repo avatar" className="burger-menu__repository-avatar" />
                      <span>{repo.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <span className="burger-menu__repositories-title">Show more</span>
            </div>

            <div className="burger-menu__footer">
              <FooterBurgerMenu />
            </div>
          </>
        )}

        {position === 'right' && (
          <>
            <div className="burger-menu__header">
              <div className="burger-menu__logo-wrapper">
              <img src={avatar ? avatar : DefaultAvatar} alt="Profile" className="burger-menu__logo" />
                <div className="burger-menu__user-info">
                  <span className="burger-menu__user-username">{username}</span>
                  <span className="burger-menu__user-nickname">{nickname}</span>
                </div>
              </div>
              <div className="burger-menu__actions">
                <button className="burger-menu__action-btn"><SwitchSVG /></button>
                <button className="burger-menu__close-btn" onClick={onClose}><CloseBurgerSVG /></button>
              </div>
            </div>

            <div className="burger-menu__divider"></div>

            <ul className="burger-menu__list">
              {rightMenuItems.map((item, index) => (
                <li key={index} className="burger-menu__item">
                  {item.getPath ? (
                    <Link to={item.getPath(username)} className="burger-menu__item">
                      <span className="burger-menu__icon">{item.icon}</span>
                      <span className="burger-menu__text">{item.text}</span>
                    </Link>
                  ) : (
                    <a href="#" className="burger-menu__item">
                      <span className="burger-menu__icon">{item.icon}</span>
                      <span className="burger-menu__text">{item.text}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="burger-menu__divider"></div>

            <ul className="burger-menu__list">
              {bottomRightMenuItems.map((item, index) => (
                <li key={index} className="burger-menu__item">
                  <a href="#" className="burger-menu__item">
                    <span className="burger-menu__icon">{item.icon}</span>
                    <span className="burger-menu__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="burger-menu__divider"></div>

            <ul className="burger-menu__list">
              {footerMenuItems.map((item, index) => (
                <li key={index} className="burger-menu__item">
                  <a href="#" className="burger-menu__item">
                    <span className="burger-menu__icon">{item.icon}</span>
                    <span className="burger-menu__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="burger-menu__divider"></div>

            <ul className="burger-menu__list">
              <li className="burger-menu__item">
                <span className="burger-menu__icon"><SignOutSVG /></span>
                <span className="burger-menu__text">Sign out</span>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
