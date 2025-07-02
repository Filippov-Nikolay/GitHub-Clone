import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

import LangMarker from "../../../../shared/Components/LangMarker/LangMarker"
import BtnStar from "../../../../shared/Components/BtnStar/BtnStar"

import { StarSvg } from '../../../../shared/assets/svg/SvgComponents';

import './repositoryCard.css';

const RepositoryCard = ({ user, repoName, isPrivate = false, description, language, stars, userAvatar }) => {
    return (
        <div className="repository-card">
            <div className="repository-card__wrapper">
                <div className="repository-card__item">
                    <h3 className="repository-card__name">
                        <a href="#" className="repository-card__link">{repoName}</a>
                        <span className="repository-card__label">{isPrivate ? "Private" : "Public"}</span>
                    </h3>
                    <div className="repository-card__info">
                        <LangMarker
                            nameLang={language}
                        />
                        {stars != "0" && 
                            <div className="repository-card__stars">
                                <span className="repository-card__stars-svg"><StarSvg/></span>
                                {stars} 
                            </div>
                        }
                        <p className="repository-card__date-last-update">Update on</p>
                    </div>
                </div>
                <div className="repository-card__item">
                    <BtnStar/>
                </div>
            </div>
        </div>
    );
};

export default RepositoryCard;
