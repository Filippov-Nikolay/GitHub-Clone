import React from 'react';
import './latestChangesCard.css';

const LatestChangesCard = ({ changes }) => {
    return (
        <div className="latest-changes">
            <h3 className="latest-changes__title">Latest changes</h3>
            <div className="latest-changes__list">
                {changes.map((change, index) => (
                    <div key={index} className="latest-changes__item">
                        <div className="latest-changes__marker"></div>
                        <div className="latest-changes__content">{change}</div>
                    </div>
                ))}
            </div>
            <a href="#" className="latest-changes__link">View changelog →</a>
        </div>
    );
};

export default LatestChangesCard;
