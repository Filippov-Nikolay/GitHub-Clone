import React from 'react';
import './Navbar.css';
import './adaptive.css';

import {
  IssuesSVG, PullRequestsSVG, ActionsSvg, ProjectsSVG,  SecuritySVG, InsightsSVG, SettingsSVG
} from "../../../../shared/assets/svg/SvgComponents";


const NavigationBar = () => {
  return (

<div>

  <div className='navigation-bar'>

    <button className='nav-button'>
    <div className='wrapper arrows'>&#60; &#62;</div>
    <div className='button-text'>Code</div>
    </button>


    <button className='nav-button'>
    <div className='wrapper'><IssuesSVG/></div>
    <div className='button-text'>Issues</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><PullRequestsSVG/></div>
    <div className='button-text'>Pull requests</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><ActionsSvg/></div>
    <div className='button-text'>Actions</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><ProjectsSVG/></div>
    <div className='button-text'>Projects</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><SecuritySVG/></div>
    <div className='button-text'>Security</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><InsightsSVG/></div>
    <div className='button-text'>Insights</div>
    </button>

    <button className='nav-button'>
    <div className='wrapper'><SettingsSVG/></div>
    <div className='button-text'>Settings</div>
    </button>

  </div>

</div>
  );
};

export default NavigationBar;