import React, { useState } from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import SearchBar from '../../../../shared/SearchBar/SearchBar';
import './repoSearch.css';

const RepositorySearch = ({ repositories }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRepos, setFilteredRepos] = useState(repositories);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterRepositories(event.target.value);
    };

    const filterRepositories = (term) => {
        if (!term) {
            setFilteredRepos(repositories);
            return;
        }

        const filtered = repositories.filter(repo =>
            repo.repoName.toLowerCase().includes(term.toLowerCase()) ||
            repo.user.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredRepos(filtered);
    };

    return (
        <div className="repository-search">
            <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <div className="repository-list">
                {(filteredRepos || []).map((repo, index) => (
                    <RepositoryCard
                        key={index}
                        user={repo.user}
                        repoName={repo.repoName}
                        description={repo.description}
                        language={repo.language}
                        languageColor={repo.languageColor}
                        stars={repo.stars}
                        userAvatar={repo.userAvatar}
                    />
                ))}
            </div>
        </div>
    );
};

export default RepositorySearch;
