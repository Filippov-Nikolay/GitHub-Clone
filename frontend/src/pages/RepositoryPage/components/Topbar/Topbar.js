import React from 'react';
import './Topbar.css';
import './adaptive.css';

import {
  CopilotSVG, LogoSVG, IssuesSVG, PullRequestsSVG, NotificationSVG
} from "../../../../shared/assets/svg/SvgComponents";

import DefaultAvatarSVG from '../../../../shared/assets/img/avatar_account.png';

const Topbar = ({ repoName, username }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="menu-button">☰</button>
        <span className='logo'><LogoSVG /></span>
        <span className="username">{username}</span>
        <span className="separator">/</span>
        <span className="repo-name">{repoName}</span>
      </div>

      <div className="topbar-center">
        <input className="search-input" type="text" placeholder="Type / to search" />
      </div>

      <div className="topbar-right">
        <div className='copilot-btn'>
          <CopilotSVG className="button" />
          <hr className='hr-btn'/>
          <button className='arrow-btn'>&#9660;</button>
        </div>

        <hr/>

        <div className='add-btn'>
          +
          <hr className='hr-btn'/>
          <button className='arrow-btn'>&#9660;</button>
        </div>

        <div className='issue-btn'>
          <IssuesSVG/>
        </div>

        <div className='pull-requests-btn'>
          <PullRequestsSVG/>
        </div>

        <div className='notifications-btn'>
          <NotificationSVG/>
        </div>

        <div className='profile-logo'>
          <span className='logo'><img src={DefaultAvatarSVG} className="logo" alt='Avatar' /></span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
