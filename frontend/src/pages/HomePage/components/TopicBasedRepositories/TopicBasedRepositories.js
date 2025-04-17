import React from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { GoTelescope } from "react-icons/go";
import './topicBasedRepositories.css';
import avatar1 from '../../../../shared/assets/img/Image_repo.png'

const topicBasedRepositories = [
    { 
        user: "Author5",
        repoName: "lightning", 
        description: "Deep learning framework to train, deploy, and ship AI products Lightning fast.", 
        language: "Python", 
        stars: 22000, 
        forkedBy: "UserE", 
        userAvatar: avatar1 
    },
    // other repositories
];

const TopicBasedRepositories = () => {
    return (
        <div className="topicBasedRepositories">
            <h2 className="topicBasedRepositories__title"><GoTelescope /> Based on your topics</h2>
            <ul className="topicBasedRepositories__list">
                {topicBasedRepositories.map((repo, index) => (
                    <RepositoryCard 
                        key={index}
                        user={repo.user}
                        repoName={repo.repoName}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stars}
                        forkedBy={repo.forkedBy}
                        userAvatar={repo.userAvatar}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TopicBasedRepositories;
