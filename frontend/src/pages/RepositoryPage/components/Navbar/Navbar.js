import React from 'react';
import './Navbar.css';
import './adaptive.css';

import {
  IssuesSVG,
  PullRequestsSVG,
  ActionsSvg,
  ProjectsSVG,
  SecuritySVG,
  InsightsSVG,
  SettingsSVG
} from "../../../../shared/assets/svg/SvgComponents";

import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const urlParts = window.location.pathname.split('/');
  const username = urlParts[2];
  const repoName = urlParts[3];

  if (!username || !repoName) return null;


const navItems = [
  { name: 'Code', icon: <>&#60; &#62;</>, to: `/repository/${username}/${repoName}`, clickable: true },
  { name: 'Issues', icon: <IssuesSVG />, to: `/repository/${username}/${repoName}/issues`, clickable: false },
  { name: 'Pull requests', icon: <PullRequestsSVG />, to: `/repository/${username}/${repoName}/pulls`, clickable: false },
  { name: 'Actions', icon: <ActionsSvg />, to: `/repository/${username}/${repoName}/actions`, clickable: false },
  { name: 'Projects', icon: <ProjectsSVG />, to: `/repository/${username}/${repoName}/projects`, clickable: false },
  { name: 'Security', icon: <SecuritySVG />, to: `/repository/${username}/${repoName}/security`, clickable: false },
  { name: 'Insights', icon: <InsightsSVG />, to: `/repository/${username}/${repoName}/insights`, clickable: false },
  { name: 'Settings', icon: <SettingsSVG />, to: `/repository/${username}/${repoName}/settings`, clickable: true },
];



  return (
    <div>
      <div className='navigation-bar'>
        {navItems.map((item, index) => (
  item.clickable ? (
    <NavLink
      key={index}
      to={item.to}
      className={({ isActive }) =>
        isActive ? 'nav-button active' : 'nav-button'
      }
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
      end={item.name === 'Code'} // точное совпадение для Code
    >
      <div className='wrapper'>{item.icon}</div>
      <div className='button-text'>{item.name}</div>
    </NavLink>
  ) : (
    <div
      key={index}
      className='nav-button disabled'
      style={{ display: 'flex', alignItems: 'center', cursor: 'default', opacity: 0.5, pointerEvents: 'none' }}
      title="Not clickable"
    >
      <div className='wrapper'>{item.icon}</div>
      <div className='button-text'>{item.name}</div>
    </div>
  )
))}

      </div>
    </div>
  );
};

export default NavigationBar;
