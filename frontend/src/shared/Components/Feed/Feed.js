import React from 'react';

import BtnStar from '../BtnStar/BtnStar'
import LangMarker from '../LangMarker/LangMarker';
import RepoOwnerLink from '../RepoOwnerLink/RepoOwnerLink';

import tempAvatar from '../../assets/img/avatar_account.png'

import './feed.css';
import './adaptive.css';

export default function Feed({ userName = "userName", srcImg = "#", description = "created a repository", date = "4 days ago", nameRepository = "Unity3D", colorLang = "#fff", nameLang = "Python", userLinkHref = "#" }) {
    return (
        <div className="feed">
            <div className="feed__wrapper">
                <h2 className="feed__title">Feed</h2>
                <button type="button">Filter</button>
            </div>
            <div className="feed__content">
                <div className="feed-item">
                    <header className="feed-item__header">
                        <div className="feed-item__wrapper">
                            <div className="feed-item__wrapper-img">
                                <img src={tempAvatar} alt="" className="feed-item__img" />
                            </div>
                            <div className="feed-item__info">
                                <h3 className="feed-item__user">
                                    <a href={userLinkHref} className="feed-item__user-link">{userName}</a>
                                    <p className="feed-item__desk">{description}</p>
                                </h3>
                                <div className="feed-item__date">{date}</div>
                            </div>
                        </div>
                    </header>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "C#" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "Python" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                </div>
                <div className="feed-item">
                    <header className="feed-item__header">
                        <div className="feed-item__wrapper">
                            <div className="feed-item__wrapper-img">
                                <img src={tempAvatar} alt="" className="feed-item__img" />
                            </div>
                            <div className="feed-item__info">
                                <h3 className="feed-item__user">
                                    <a href={userLinkHref} className="feed-item__user-link">{userName}</a>
                                    <p className="feed-item__desk">{description}</p>
                                </h3>
                                <div className="feed-item__date">{date}</div>
                            </div>
                        </div>
                    </header>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "C#" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                </div>
                <div className="feed-item">
                    <header className="feed-item__header">
                        <div className="feed-item__wrapper">
                            <div className="feed-item__wrapper-img">
                                <img src={tempAvatar} alt="" className="feed-item__img" />
                            </div>
                            <div className="feed-item__info">
                                <h3 className="feed-item__user">
                                    <a href={userLinkHref} className="feed-item__user-link">{userName}</a>
                                    <p className="feed-item__desk">{description}</p>
                                </h3>
                                <div className="feed-item__date">{date}</div>
                            </div>
                        </div>
                    </header>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "C#" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "Python" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                    <section className="feed-item__section">
                        <div className="feed-item__column">
                            <RepoOwnerLink
                                srcImg={ tempAvatar }
                                userName={ "Nikolay" }
                                nameRepository={ "Clone-GitHub" }
                            />
                            <LangMarker
                                nameLang={ "Python" }
                            />
                        </div>
                        <div className="feed-item__column">
                            <BtnStar/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
