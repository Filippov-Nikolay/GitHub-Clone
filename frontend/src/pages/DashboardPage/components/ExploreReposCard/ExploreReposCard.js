import React from 'react';
import RepoOwnerLink from '../../../../shared/Components/RepoOwnerLink/RepoOwnerLink';
import LangMarker from '../../../../shared/Components/LangMarker/LangMarker';
import { StarSvg } from '../../../../shared/assets/svg/SvgComponents';
import BtnOnlyStart from '../../../../shared/Components/BtnOnlyStart/BtnOnlyStart';
import './exploreReposCard.css';

const ExploreRepositoriesCard = ({ repositories }) => {
  return (
    <div className="explore-repositories">
      <h2 className="explore-repositories__title">Explore repositories</h2>
      <ul className="explore-repositories-list">
        {[0, 1, 2].map((index) => (
          <li key={index} className="explore-repositories-list__item">
            <div className="explore-repositories-list__wrapper">
              <div className="explore-repositories-list__repo-owner-link">
                <RepoOwnerLink
                  srcImg={repositories[0].userAvatar}
                  userName="Nikolay"
                  nameRepository="Clone-GitHub"
                />
              </div>
              <BtnOnlyStart />
            </div>
            <p className="explore-repositories-list__text">A python wrapper for the GitLab API.</p>
            <div className="explore-repositories-list__statistics">
              <div className="explore-repositories-list__stars">
                <StarSvg />
                <div className="explore-repositories-list__value">2.3k</div>
              </div>
              <LangMarker nameLang="python" />
            </div>
          </li>
        ))}
      </ul>
      <a href="https://github.com/explore" className="explore-repositories__link">
        Explore more →
      </a>
    </div>
  );
};

export default ExploreRepositoriesCard;
