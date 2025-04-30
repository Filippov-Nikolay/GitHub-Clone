import React from "react";
import { FileSVG, LogoSVG, FolderSVG, HistorySVG } from "../../../../shared/assets/svg/SvgComponents";
import './RepositoryFiles.css';
import './adaptive.css';

const RepositoryFiles = ({username}) => {
return(
    // <div className="files-main">
    //     <div><ProfileLogoSVG/></div>
    // </div>

   

    <div className="gh-wrapper">
    <div className="gh-container">
      <div className="gh-header">
        <LogoSVG alt="avatar" className="gh-avatar" />
        <div className="gh-meta">
          <div className="gh-user">{username}</div>
          <div className="gh-branch">first</div>
          <div className="gh-commit">158aa03 <span className="gh-dot">•</span> 2 years ago</div>
          <div className="gh-commits"><HistorySVG/> 1 commit</div>
        </div>
      </div>

      <div className="gh-table">
        <div className="gh-row">
          <div className="gh-icon"><FolderSVG/></div>
          <div className="gh-filename">project.xcodeproj</div>
          <div className="gh-time">2 years ago</div>
        </div>
        <div className="gh-row">
          <div className="gh-icon"><FolderSVG/></div>
          <div className="gh-filename">project</div>
          <div className="gh-time">2 years ago</div>
        </div>
        <div className="gh-row">
          <div className="gh-icon"><FileSVG/></div>
          <div className="gh-filename">.DS_Store</div>
          <div className="gh-time">2 years ago</div>
        </div>
        <div className="gh-row">
          <div className="gh-icon"><FileSVG/></div>
          <div className="gh-filename">header.h</div>
          <div className="gh-time">2 years ago</div>
        </div>
      </div>
    </div>
  </div>
);
}

export default RepositoryFiles