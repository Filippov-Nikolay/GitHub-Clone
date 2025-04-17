import React from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { LuLineChart } from "react-icons/lu";
import './trendingRepositories.css';
import avatar1 from '../../../../shared/assets/img/Image_repo.png'

const trendingRepositories = [
    { 
        user: "Author3",
        repoName: "alpaca-lora", 
        description: "Instruct-tune LLaMA on consumer hardware", 
        language: "Jupyter Notebook", 
        stars: 2400, 
        forkedBy: "UserC", 
        userAvatar: avatar1 
    },
    { 
        user: "Author4",
        repoName: "semantic-kernel", 
        description: "Integrate cutting-edge LLM technology quickly and easily into your apps", 
        language: "C#", 
        stars: 810, 
        forkedBy: "UserD", 
        userAvatar: avatar1
    },
    // other repositories
];

const TrendingRepositories = () => {
    return (
        <div className="trendingRepositories">
            <span className="trendingRepositories__title"><LuLineChart /><span className="trendingRepositories-title__text"> Trending repositories · </span> <a href='#' className='vb-ankor'> Show More </a></span>
            <ul className="trendingRepositories__list">
                {trendingRepositories.map((repo, index) => (
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

export default TrendingRepositories;
