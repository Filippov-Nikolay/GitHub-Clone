import React from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import './exploreReposCard.css';

const ExploreRepositoriesCard = ({ repositories }) => {
    return (
        <div className="explore-repositories">
            <h2 className="explore-repositories__title">Explore repositories</h2>
            <div className="explore-repositories__list">
                {repositories.map((repo, index) => (
                    <RepositoryCard
                        key={index}
                        user={repo.user}
                        repoName={repo.repoName}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stars}
                        userAvatar={repo.userAvatar}
                        languageColor={repo.languageColor}
                    />
                ))}
            </div>
            <a href="#" className="explore-repositories__link">Explore more →</a>
        </div>
    );
};

export default ExploreRepositoriesCard;
