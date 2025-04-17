import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import './repositoryCard.css';

const RepositoryCard = ({ user, repoName, description, language, stars, userAvatar }) => {
    return (
        <div className="vb-repo-info">
            <div className='vb-repo-info-wrapper'>
                <div className="vb-repo-header">
                <img src={userAvatar} alt={`${user}'s avatar`} className="vb-repo-avatar" />
                    <span className="vb-repo-owner">{user}/</span>
                    <span className="vb-repo-name">{repoName}</span>
                </div>
                <div className="vb-description">{description}</div>
                <div className="vb-footer">
                    <span className="vb-language">
                        <span className="vb-language-color" style={{ backgroundColor: '#3572A5' }}></span>
                        {language}
                    </span>
                    <span className="vb-stars"><FaRegStar className='vb-star'/> {stars}</span>
                </div>
            </div>
                <div className='vb-repo-button'><button  className='vb-repo-button-left' ><FaRegStar />Star</button><button className='vb-repo-button-right'><FaCaretDown /></button> </div>
        </div>
            
       
    );
};

export default RepositoryCard;
