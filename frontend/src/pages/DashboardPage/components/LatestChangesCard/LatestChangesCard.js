import React from 'react';
import './latestChangesCard.css';

const LatestChangesCard = ({ changes }) => {
    return (
        <div className="latest-changes">
            <h3 className="latest-changes__title">Latest changes</h3>

            <ul className="latest-changes-list">
                {changes.map((item, index) => (
                <li key={index} className="latest-changes-list__item">
                    <div className="latest-changes-list__timeline">
                        <div className="latest-changes-list__marker"></div>
                    </div>
                    <div className="latest-changes-list__content">
                        <div className="latest-changes-list__date">{item.date}</div>
                        <a className="latest-changes-list__text" href={item.link}>{item.text}</a>
                    </div>
                </li>
                ))}
                <li className="latest-changes-list__item">
                    <div className="latest-changes-list__timeline">
                        <div className="latest-changes-list__marker latest-changes-list__marker--transparent"></div>
                    </div>
                    <a href="#" className="latest-changes__link">View changelog →</a>
                </li>
            </ul>
        </div>
    );
};

export default LatestChangesCard;
