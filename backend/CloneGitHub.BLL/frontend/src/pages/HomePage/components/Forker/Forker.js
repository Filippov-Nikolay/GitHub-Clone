import React from 'react';
import './forker.css';
import { RiGitForkLine } from "react-icons/ri";

const Forker = ({ forkerAvatar, forkerName,}) => {
    return (
                <div className="forker__card">
                <div className="forker__avatar-container">
                    <img src={forkerAvatar} alt={`${forkerName}'s avatar`} className="forker__avatar" />
                    <span className="forker__forkline"><RiGitForkLine /></span>
                </div>  
                <a href='#' className='vb-ankor'>{forkerName}</a>
                
                <span className='fork_text'> forked a repository ·</span></div>     
    );
};

export default Forker;
