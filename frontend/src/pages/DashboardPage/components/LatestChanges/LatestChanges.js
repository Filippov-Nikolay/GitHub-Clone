import React from 'react';
import LatestChangesCard from '../LatestChangesCard/LatestChangesCard';
import './latestChanges.css';

const LatestChanges = () => {
    const changes = [
        {
            text: "Scheduled Codespaces maintenance on May 7 and 8",
            link: "#",
            date: "12 hours ago"
        },
        {
            text: "Improvements to Changelog experience",
            link: "#",
            date: "yesterday"
        },
        {
            text: "Dependency graph deduplication is now generally available",
            link: "#",
            date: "2 days ago"
        },
        {
            text: "Track progress on code scanning alerts with the new development section",
            link: "#",
            date: "5 days ago"
        },
    ];

    return (
        <LatestChangesCard changes={changes} />
    );
};

export default LatestChanges;
