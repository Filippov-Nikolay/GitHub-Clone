import React from 'react';
import LatestChangesCard from '../LatestChangesCard/LatestChangesCard';
import './latestChanges.css';

const LatestChanges = () => {
    const changes = [
        "Secret scanning changes to how you opt in to notifications",
        "Code scanning shows more accurate and relevant alerts on pull requests",
        "SSH Certificate requirement update",
        "Fixed bug that allowed removed users to retain access to the organization"
    ];

    return (
        <div className="latest_changes">
            <LatestChangesCard changes={changes} />
        </div>
    );
};

export default LatestChanges;
