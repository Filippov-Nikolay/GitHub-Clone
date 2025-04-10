import React from 'react';
import RepositorySearch from '../../../HomePage/components/RepoSearch/RepoSearch'
import './repoSearchInit.css';
import Avatar1 from "../../../../shared/assets/img/Image_repo.png"

const RepoSearchInit = () => {
    const repositories = [
        {
            user: "pymodbus-dev",
            repoName: "pymodbus",
            description: "A full modbus protocol written in python",
            language: "Python",
            languageColor: "#3572A5",
            stars: "3",
            userAvatar: Avatar1
        },
        {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "8",
            userAvatar: Avatar1
        },
        {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        }, {
            user: "BuilderIO",
            repoName: "demo-editor",
            description: "",
            language: "JavaScript",
            languageColor: "#f1e05a",
            stars: "5",
            userAvatar: Avatar1
        },
        {
            user: "stared",
            repoName: "livelossplot",
            description: "Live training loss plot in Jupyter Notebook for Keras, PyTorch and others",
            language: "Python",
            languageColor: "#3572A5",
            stars: "1.2k",
            userAvatar: Avatar1
        }
    ];

    return (
        <div className="search-app">
            <RepositorySearch repositories={repositories} />
            {/* Other components */}
        </div>
    );
};

export default RepoSearchInit;
