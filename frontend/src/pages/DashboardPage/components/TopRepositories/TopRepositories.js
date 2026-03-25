import React from 'react';
import { Link } from 'react-router-dom';
import { GoRepo } from 'react-icons/go';
import chiragsingla17Image from '../../sources/images/chiragsingla1716x16.png';
import BuilderIOImage from '../../sources/images/BuilderIO16x16.png';
import UpVoxAiImage from '../../sources/images/UpVoxAi16x16.png';
import Input from '../../../../shared/Components/Input/Input';
import BtnPrimary from '../../../../shared/Components/BtnPrimary/BtnPrimary';
import './topRepositories.css';

const repositories = [
  { name: 'Vector', image: chiragsingla17Image, author: 'chiragsingla17' },
  { name: 'MorphixUI', image: chiragsingla17Image, author: 'chiragsingla17' },
  { name: 'gitagpt3', image: chiragsingla17Image, author: 'chiragsingla17' },
  { name: 'figma-html', image: BuilderIOImage, author: 'BuilderIO' },
  { name: 'mygita-client', image: UpVoxAiImage, author: 'UpVoxAi' },
  { name: 'upvox-client', image: UpVoxAiImage, author: 'UpVoxAi' },
  { name: 'alibi', image: chiragsingla17Image, author: 'chiragsingla17' },
];

const TopRepositories = () => {
  return (
    <div className="top-repositories-container">
      <div className="top-repositories">
        <div className="repository-header-wrapper">
          <h2 className="repository-header-wrapper__title">Top Repositories</h2>
          <BtnPrimary
            btnText="New"
            iconSvg={<GoRepo />}
            positionIcon="left"
            btnHref="/CreateRepository"
          />
        </div>
        <Input placeholder="find a repository..." />
        <ul className="repository-list">
          {repositories.map((repo, index) => (
            <li key={index} className="repository-item">
              <Link to={`/repository/${repo.author}/${repo.name}`} className="link-repo">
                <img src={repo.image} alt={repo.author} className="repository-image" />
                <div className="repository-info">
                  <span className="repository-author">{repo.author}/</span>
                  <span className="repository-name">{repo.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <button type="button" className="link-muted">
          Show more
        </button>
      </div>
    </div>
  );
};

export default TopRepositories;
