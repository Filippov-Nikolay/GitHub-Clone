import React from 'react';
import RepositoryCard from '../RepositoryCard/RepositoryCard';
import RepoOwnerLink from '../../../../shared/Components/RepoOwnerLink/RepoOwnerLink';
import LangMarker from '../../../../shared/Components/LangMarker/LangMarker';

import './exploreReposCard.css';

import { StarSvg, ArrowSymbolMktg } from '../../../../shared/assets/svg/SvgComponents';
import BtnOnlyStart from '../../../../shared/Components/BtnOnlyStart/BtnOnlyStart';

const ExploreRepositoriesCard = ({ repositories }) => {
    return (
        <div className="explore-repositories">
            <h2 className="explore-repositories__title">Explore repositories</h2>
            <ul className="explore-repositories-list">
                <li className="explore-repositories-list__item">
                    <div className="explore-repositories-list__wrapper">
                        <div className="explore-repositories-list__repo-owner-link">
                            <RepoOwnerLink
                                srcImg={ repositories[0].userAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                        </div>
                        <BtnOnlyStart></BtnOnlyStart>
                    </div>
                    <p className="explore-repositories-list__text">A python wrapper for the GitLab API.</p>
                    <div className="explore-repositories-list__statistics">
                        <div className="explore-repositories-list__stars">
                            <StarSvg/>
                            <div className="explore-repositories-list__value">2.3k</div>
                        </div>
                        <LangMarker
                            nameLang={ "python" }
                        />
                    </div>
                </li>
                <li className="explore-repositories-list__item">
                    <div className="explore-repositories-list__wrapper">
                        <div className="explore-repositories-list__repo-owner-link">
                            <RepoOwnerLink
                                srcImg={ repositories[0].userAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                        </div>
                        <BtnOnlyStart></BtnOnlyStart>
                    </div>
                    <p className="explore-repositories-list__text">A python wrapper for the GitLab API.</p>
                    <div className="explore-repositories-list__statistics">
                        <div className="explore-repositories-list__stars">
                            <StarSvg/>
                            <div className="explore-repositories-list__value">2.3k</div>
                        </div>
                        <LangMarker
                            nameLang={ "python" }
                        />
                    </div>
                </li>
                <li className="explore-repositories-list__item">
                    <div className="explore-repositories-list__wrapper">
                        <div className="explore-repositories-list__repo-owner-link">
                            <RepoOwnerLink
                                srcImg={ repositories[0].userAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                        </div>
                        <BtnOnlyStart></BtnOnlyStart>
                    </div>
                    <p className="explore-repositories-list__text">A python wrapper for the GitLab API.</p>
                    <div className="explore-repositories-list__statistics">
                        <div className="explore-repositories-list__stars">
                            <StarSvg/>
                            <div className="explore-repositories-list__value">2.3k</div>
                        </div>
                        <LangMarker
                            nameLang={ "python" }
                        />
                    </div>
                </li>
            </ul>
            <a href="#" className="explore-repositories__link">Explore more →</a>
        </div>

        // <div className="explore-repositories">
        //     <h2 className="explore-repositories__title">Explore repositories</h2>
        //     <div className="explore-repositories__list">
        //         {repositories.map((repo, index) => (
        //             <RepositoryCard
        //                 key={index}
        //                 user={repo.user}
        //                 repoName={repo.repoName}
        //                 description={repo.description}
        //                 language={repo.language}
        //                 stars={repo.stars}
        //                 userAvatar={repo.userAvatar}
        //                 languageColor={repo.languageColor}
        //             />
        //         ))}
        //     </div>
        //     <a href="#" className="explore-repositories__link">Explore more →</a>
        // </div>
    );
};

export default ExploreRepositoriesCard;
