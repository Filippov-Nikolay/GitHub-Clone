import React from 'react';
import './topRepositories.css';
import chiragsingla17Image from '../../sources/images/chiragsingla1716x16.png';
import BuilderIOImage from '../../sources/images/BuilderIO16x16.png';
import UpVoxAiImage from '../../sources/images/UpVoxAi16x16.png';
import Input from '../../../../shared/Components/Input/Input';
import BtnPrimary from '../../../../shared/Components/BtnPrimary/BtnPrimary'
import { GoRepo } from "react-icons/go";


const repositories = [
    { name: "Vector", image: chiragsingla17Image, author: "chiragsingla17" },
    { name: "MorphixUI", image: chiragsingla17Image, author: "chiragsingla17" },
    { name: "gitagpt3", image: chiragsingla17Image, author: "chiragsingla17" },
    { name: "figma-html", image: BuilderIOImage, author: "BuilderIO" },
    { name: "mygita-client", image: UpVoxAiImage, author: "UpVoxAi" },
    { name: "upvox-client", image: UpVoxAiImage, author: "UpVoxAi" },
    { name: "alibi", image: chiragsingla17Image, author: "chiragsingla17" }
];

const TopRepositories = () => {
    return (
        <div className='top-repositories-container'>
            {/* <hr className="separator" /> */}
            <div className="top-repositories">
                <div className='repository-header-wrapper'>
                    <h2 className='repository-header-wrapper__title'>Top Repositories</h2>
                    <BtnPrimary
                        btnText={"New"}
                        iconSvg={<GoRepo/>}
                        positionIcon={"left"}
                        btnHref={"/CreateRepository"}
                    />
                </div>
                <Input
                    placeholder={"find a repository..."}
                />
                <ul className="repository-list">
                    {repositories.map((repo, index) => (
                        <li key={index} className="repository-item"> 
                            <a href='#' className='link-repo'>
                                <img src={repo.image} alt={repo.author} className="repository-image" />
                                <div className="repository-info">
                                    <span className="repository-author">{repo.author}/</span>
                                    <span className="repository-name">{repo.name}</span>
                                </div>
                            </a>
                        </li> 
                    ))}
                </ul>
                <a href ="#" className='link-muted'>Show more</a>   
            </div>
        </div>
    );
}; 
export default TopRepositories;
