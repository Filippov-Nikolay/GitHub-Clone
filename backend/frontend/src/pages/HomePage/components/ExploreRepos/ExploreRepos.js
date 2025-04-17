import React from 'react';
import ExploreRepositoriesCard from '../ExploreReposCard/ExploreReposCard';
import './exploreRepos.css';
import Avatar1 from "../../../../shared/assets/img/Image_repo.png"
const ExploreRepositories = () => {
    const repositories = [
        {
            user: "pymodbus-dev",
            repoName: "pymodbus",
            description: "A full modbus protocol written in python",
            language: "Python",
            stars: "1.7k",
            userAvatar: Avatar1,
            languageColor: "#3572A5"
        },
        {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            stars: "5",
            userAvatar: Avatar1,
            languageColor: "#f1e05a"
        },
        {
            user: "stared",
            repoName: "livelossplot",
            description: "Live training loss plot in Jupyter Notebook for Keras, PyTorch and others",
            language: "Python",
            stars: "1.2k",
            userAvatar: Avatar1,
            languageColor: "#3572A5"
        }
    ];

    return (
        <div className="app">
            <ExploreRepositoriesCard repositories={repositories} />
            {/* Other components */}
        </div>
    );
};

export default ExploreRepositories;
