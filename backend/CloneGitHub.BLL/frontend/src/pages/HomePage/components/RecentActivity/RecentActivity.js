import React from 'react';
import './recentActivity.css';
import img_recent from '../../sources/images/Frame.png'
const RecentActivity = () => {
    return (
        <div className="recent-activity">
            <h2>Recent activity</h2>
         <div className="recent-image-text">   
            <img src= {img_recent} alt="recent" className="recent-picture" />
            <div>
            <a href="#" className='recent-name'> <p><strong>BuilderIO/figma-html</strong></p></a>
            <p>When importing JSON Files, Layers not structured properly</p>
            </div>
         </div>
        </div>
    );
};

export default RecentActivity;
