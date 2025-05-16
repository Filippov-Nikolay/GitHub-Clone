import React from 'react';

import './repoOwnerLink.css';
import './adaptive.css';

export default function RepoOwnerLink({ srcImg, userName, nameRepository }) {
    return (
        <div className="repo-owner-link">
            <div className="repo-owner-link__img-wrapper">
                <img src={srcImg} alt="" className="repo-owner-link__img"/>
            </div>
            <a href={userName + '/' + nameRepository} className="repo-owner-link__link">
                <div className="repo-owner-link__text">{userName}/{nameRepository}</div>
            </a>
        </div>
    )
}
