import React, { useState, useEffect } from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import SearchBar from '../../../../shared/SearchBar/SearchBar';
import './repoSearch.css';

const RepositorySearch = ({ repositories }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState("All");
    const [sort, setSort] = useState("Last updated");
    const [filteredRepos, setFilteredRepos] = useState(repositories);

    useEffect(() => {
        filterRepositories(searchTerm, type, sort);
    }, [searchTerm, type, sort, repositories]);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    const filterRepositories = (term, type, sort) => {
        let result = [...repositories];

        if (term) {
            result = result.filter(repo =>
                repo.repoName.toLowerCase().includes(term.toLowerCase()) ||
                repo.user.toLowerCase().includes(term.toLowerCase())
            );
        }

        if (type === "Public") {
            result = result.filter(repo => !repo.isPrivate);
        } else if (type === "Private") {
            result = result.filter(repo => repo.isPrivate);
        }

        if (sort === "Name") {
            result.sort((a, b) => a.repoName.localeCompare(b.repoName));
        } else if (sort === "Last updated") {
            result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        }

        setFilteredRepos(result);
    };

    return (
        <div className="repository-search">
            <SearchBar  
                searchTerm={searchTerm}
                onTypeChange={setType}
                onSortChange={setSort} 
                handleSearchChange={handleSearchChange} 
            />
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
                        isPrivate={repo.isPrivate}
                    />
                ))}
            </div>
        </div>
    );
};

export default RepositorySearch;
