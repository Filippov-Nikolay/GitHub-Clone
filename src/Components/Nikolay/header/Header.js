import './css/header.css'
import { 
    LogoSvg, ActionsSvg, PackagesSvg, SecuritySvg, 
    CodespacesSvg, GitHubCopilotSvg, CodeReviewSvg,
    IssuesSvg, DiscussionsSvg, ArrowDownSvg, LinkSvg,
    EnterprisePlatformSvg, PathSvg, SearchSvg, CloseSvg, 
    OcticonCode, ArrowSymbolMktg, OcticonBriefcase, OcticonLock,
    OcticonCodeConduct
} from '../svgComponents/svgComponents'
import logoNLO from '../img/header_element_nlo.png'
import React, { useState, useRef } from "react";
import debounce from 'lodash.debounce';
import Tilt from 'react-vanilla-tilt'

function OurPartners() {
    return (
        <div className="our-partners">
            <p className="our-partners__text">Trusted by the world`s leading organizations ↘️</p>
            <ul className="our-partners__list">
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="3M logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="KPMG logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="Mercedes-Benz logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="SAP logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="P&amp;G logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="Telus logo"/>
                </li>
            </ul>
        </div>
    )
}
function Card() {
    const cardRefs = {
        cardRef1: useRef(null),
        cardRef2: useRef(null),
        cardRef3: useRef(null),
        cardRef4: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    return (
        <div className="card-content">
            <div className="card-content__item card-content__item--green" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                <div className="card-content__main">
                    <h3 className="card-content__title">
                        <span className="card-content__span">GitHub Actions </span>
                        automates your build, test, and deployment workflow with simple and secure CI/CD.
                    </h3>
                    <a href="#" className="btn-link">Discover GitHub Actions<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="card-content__wrapper-img">
                    <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png" alt=""/>
                </div>
            </div>
            <div className="card-content__wrapper-flex">
                <div className="card-content__item card-content__item--green card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">GitHub Codespaces </span>
                            offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.
                        </h3>
                        <a href="#" className="btn-link">Check out GitHub Codespaces<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img">
                    <img src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png" alt=""/>
                    </div>
                </div>
                <div className="card-content__item card-content__item--green card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}>
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">GitHub Mobile and Copilot </span>
                            now let you manage projects and converse with your AI pair programmer on the go.
                        </h3>
                        <a href="#" className="btn-link">Download GitHub Mobile<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img">
                        <img src="https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp" alt=""/>
                    </div>
                </div>
            </div>
            <div className='event event--card'>
                <div className="event__interval-middle event__interval-middle--transparent-to-blue"></div>
            </div>
        </div>
    )
}
function CardFaster() {
    const cardRefs = {
        cardRef1: useRef(null),
        cardRef2: useRef(null),
        cardRef3: useRef(null),
        cardRef4: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    return (
        <div className="card-content">
            <div className="card-content__item card-content__item--blue" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                <div className="card-content__main">
                    <h3 className="card-content__title">
                        <span className="card-content__span">Code scanning </span>
                        is our code analysis tool that helps you remediate issues in your code.
                    </h3>
                    <a href="#" className="btn-link">Download the latest SAST ebook<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="card-content__wrapper-img">
                    <img src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png" alt=""/>
                </div>
            </div>
            <div className="card-content__wrapper-flex">
                <div className="card-content__item card-content__item--blue card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">Dependabot makes </span>
                            it easy to find and fix vulnerable dependencies in your supply chain.
                        </h3>
                        <a href="#" className="btn-link">Explore Dependabot<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img">
                    <img src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png" alt=""/>
                    </div>
                </div>
                <div className="card-content__item card-content__item--blue card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}>
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">Secret scanning </span>
                            automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
                        </h3>
                        <a href="#" className="btn-link">Download GitHub Mobile<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img">
                        <img src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className='event event--card'>
                <div className="event__interval-middle event__interval-middle--transparent-to-pink"></div>
            </div>
        </div>
    )
}
function ApplicationSecurity() {
    const cardRefs = {
        cardRef1: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    return (
        <>
        <div className="application-security">
            <div className='event'>
                <div className="event__middle event__middle--blue">
                    <OcticonLock></OcticonLock>
                </div>
                <div className="event__interval-middle event__interval-middle--blue-to-transparent"></div>
            </div>
            <div className="application-security__content">
                <h2 className="content-title">Application security</h2>
                <h3 className="content-sub-title">
                    <span class="content-sub-title__accent content-sub-title__accent--blue">Empower developers</span>
                    With GitHub, you can secure code in minutes.
                </h3>
            </div>
        </div>
        <div className="card-content">
            <div className="productivity__main">
                <div className="productivity-block-anime">
                    <div className="card-content__item card-content__item--blue" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">GitHub Actions </span>
                                automates your build, test, and deployment workflow with simple and secure CI/CD.
                            </h3>
                            <a href="#" className="btn-link">Discover GitHub Actions<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img">
                            <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png" alt=""/>
                        </div>
                    </div>
                    <img className='application-security__productivity-block-anime__blur productivity-block-anime__blur' src="https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png" alt=""/>
                    <div class="productivity-block-anime__second application-security__productivity-block-anime__second">
                        <img src="https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-blue"></div>
                <div className="event__interval-middle event__interval-middle--blue-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content">
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Advanced Security</span> enables you to find and fix vulnerabilities with ease and ship secure code quickly.
                    </h2>
                    <a href="#" className="btn-link">Dive into GitHub Advanced Security <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact fact--application-security">
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--blue">Did you know?</div>
                        <h3 className="fact__title fact__title--blue">7x faster</h3>
                        <p className="fact__sub-text">vulnerability fixes with GitHub<sup>1</sup></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
function Collaboration() {
    const cardRefs = {
        cardRef1: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    return (
        <>
        <div className="application-security">
            <div className='event'>
                <div className="event__middle event__middle--pink">
                    <OcticonCodeConduct></OcticonCodeConduct>
                </div>
                <div className="event__interval-middle event__interval-middle--pink-to-transparent"></div>
            </div>
            <div className="application-security__content">
                <h2 className="content-title">Collaboration</h2>
                <h3 className="content-sub-title">
                    <span class="content-sub-title__accent content-sub-title__accent--pink">Supercharge collaboration</span>
                    GitHub helps your teams work more efficiently together.
                </h3>
            </div>
        </div>
        <div className="card-content">
            <div className="productivity__main">
                <div className="productivity-block-anime">
                    <div className="productivity-block-anime__first">
                        <img src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png" alt=""/>
                    </div>
                    <img className='application-security__productivity-block-anime__blur productivity-block-anime__blur' src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png" alt=""/>
                    <div class="productivity-block-anime__second application-security__productivity-block-anime__second">
                        <img src="https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-pink"></div>
                <div className="event__interval-middle event__interval-middle--pink-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content">
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Issues and GitHub Projects</span> supply project management tools that adapt to your team alongside your code.
                    </h2>
                    <a href="#" className="btn-link">Get started with GitHub Issues<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact fact--application-security">
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--pink">Did you know?</div>
                        <h3 className="fact__title fact__title--pink">80%</h3>
                        <p className="fact__sub-text">reduction in onboarding time with GitHub<sup>2</sup></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

function River() {
    return (
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-green"></div>
                <div className="event__interval-middle event__interval-middle--green-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content">
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.
                    </h2>
                    <a href="#" className="btn-link">Explore GitHub Copilot <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact">
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--green">Did you know?</div>
                        <h3 className="fact__title fact__title--green">22% increase</h3>
                        <p className="fact__sub-text">in developer productivity after three years with GitHub</p>
                        <a href="#" className="btn-link">Read the report<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderContent() {
    return (
        <>
        <div className='header-content'>
            <div className='header-content__decor'><img src={logoNLO} alt=''/></div>
            <div className='header-content__main'>
                <div className='event'>
                    <div className="event__start"></div>
                    <div className="event__interval event__interval--purple"></div>
                    <div className="event__middle event__middle--purple">
                        <OcticonCode></OcticonCode>
                    </div>
                    <div className="event__interval-middle event__interval-middle--purple-to-green"></div>
                </div>
                <div className='header-content__wrapper'>
                    <h1 className='header-content__title'>Let`s build from here</h1>
                    <p className='header-content__sub-title'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                    <div className="header-form">
                        <form className='header-form__form' action="POST">
                            <input className='header-form__input' type="text" placeholder='Email address'/>
                            <button className='header-form__btn'>Sign up for GitHub</button>
                        </form>
                        <div className="header-form__decor"></div>
                        <button className='header-form__btn-start'>Start a free enterprise trial <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></button>
                    </div>
                    <OurPartners></OurPartners>
                </div>
            </div>
        </div>
        <div className="productivity">
            <div className="productivity__content">
                <div className='event'>
                    <div className="event__middle event__middle--green">
                        <OcticonBriefcase></OcticonBriefcase>
                    </div>
                    <div className="event__interval-middle event__interval-middle--green-to-transparent"></div>
                </div>
                <div className="productivity__event-info">
                    <h2 className="content-title">Productivity</h2>
                    <h3 className="content-sub-title">
                        <span class="content-sub-title__accent content-sub-title__accent--green">Accelerate innovation</span>
                        Our AI-powered platform increases the pace of software development.
                    </h3>
                </div>
            </div>
            <div className="productivity__main">
                <div className="productivity-block-anime">
                    <div className="productivity-block-anime__first">
                        <img src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt=""/>
                    </div>
                    <img className='productivity-block-anime__blur' src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png" alt=""/>
                    <div class="productivity-block-anime__second">
                        <img src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png" alt=""/>
                    </div>
                </div>
            </div>
            <River></River>
            <Card></Card>
            <ApplicationSecurity></ApplicationSecurity>
            <CardFaster></CardFaster>
            <Collaboration></Collaboration>
        </div>
        </>
    )
}

export function Header() {
    const [isHideModalWindow, setIsHideModalWindow] = useState(false);
    const [search, setSearchValue] = useState("");
    const [isSearchShow, setIsSearch] = useState(false);
    // const isHideModalWindow = false;

    function HideModalWindow() {
        setIsHideModalWindow(false);
    }
    function ShowModalWindow() {
        setIsHideModalWindow(true);
    }
    function HandleSearchChange(event) {
        setSearchValue(event.target.value);
        event.target.value.length != 0 ? setIsSearch(true) : setIsSearch(false);
    }

    return (
        <header className="header">
            <div className="modal-window-input">
                <div className={isHideModalWindow ? "modal-window-input__content" : "modal-window-input__content modal-window-input__content--hide"}>
                    <div className="modal-window-input__bg" onClick={HideModalWindow}></div>
                    <div className="modal-window-input__item">
                        <div className="modal-window-input__wrapper-input">
                            <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                            <input className="modal-window-input__input" type="text" onChange={HandleSearchChange}/>
                            <span className="modal-window-input__search-span modal-window-input__search-span--close"><CloseSvg></CloseSvg></span>
                        </div>
                        <div className="modal-window-input__action-list-content">
                            <a className={isSearchShow ? "modal-window-input__action-list-link" : "modal-window-input__action-list-link modal-window-input__action-list-link--hide"} href="#">
                                <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                                <span className="modal-window-input__action-list-output">{search}</span>
                                <span className="modal-window-input__action-list-hint">Search all of GitHub</span>
                            </a>
                        </div>

                    </div>
                    <div className="modal-window-input__item">
                        <ul className="sub-menu__modal-window modal-window-list">
                            <li className='modal-window-list__title-li'>Explore</li>
                            <li className="modal-window-list__item">
                                <a href="#" className="modal-window-list__link">
                                    <ActionsSvg></ActionsSvg>
                                    <div className="modal-window-list__wrapper">
                                        <h6 className="modal-window-list__title">Actions</h6>
                                    </div>
                                    <span className="modal-window-input__action-list-hint">Learn More</span>
                                </a>
                            </li>
                            <li className="modal-window-list__item">
                                <a href="#" className="modal-window-list__link">
                                    <ActionsSvg></ActionsSvg>
                                    <div className="modal-window-list__wrapper">
                                        <h6 className="modal-window-list__title">Actions</h6>
                                    </div>
                                    <span className="modal-window-input__action-list-hint">Learn More</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-window-input__item">
                        <a className="modal-window-input__link" href="#">Search syntax tips</a>
                    </div>
                </div>
            </div>
            <nav className="nav">
                <div className="nav__wrapper">
                    <a href="#" className="logo"><LogoSvg></LogoSvg></a>
                    <ul className="nav__menu">
                        <li className="nav__item"><a href="#" className="nav__link">product
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--row">
                                <ul className="sub-menu sub-menu__product">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <ActionsSvg></ActionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <PackagesSvg></PackagesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Packages</h6>
                                                <p className="sum-menu__text">Host and manage packages</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <SecuritySvg></SecuritySvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Security</h6>
                                                <p className="sum-menu__text">Find and fix vulnerabilities</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <CodespacesSvg></CodespacesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Codespaces</h6>
                                                <p className="sum-menu__text">Instant dev environments</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <GitHubCopilotSvg></GitHubCopilotSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">GitHub Copilot</h6>
                                                <p className="sum-menu__text">Write better code with AI</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <CodeReviewSvg></CodeReviewSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Code review</h6>
                                                <p className="sum-menu__text">Manage code changes</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <IssuesSvg></IssuesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Issues</h6>
                                                <p className="sum-menu__text">Plan and track work</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <DiscussionsSvg></DiscussionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">discussions</h6>
                                                <p className="sum-menu__text">Collaborate outside of code</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__product">
                                    <li className='sub-menu__title-li'>Explore</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            All features
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Documentation <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            GitHub Skills <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Blog <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Solutions
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--solutions">
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>For</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Enterprise
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Teams
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Startups
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Education  <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>By Solution</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            CI/CD & Automation
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            DevOps
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            DevSecOps <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>Resources</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Learning Pathways <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            White papers, Ebooks, Webinars <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Customer Stories
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Partners  <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Open source
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--open-source">
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">GitHub Sponsors</h6>
                                                <p className="sum-menu__text">Fund open source developers</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">The ReadME Project</h6>
                                                <p className="sum-menu__text">GitHub community article</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className='sub-menu__title-li'>Repositories</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Topics
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Trending
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Collections
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Enterprise
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--enterprise">
                                <ul className="sub-menu sub-menu__enterprise">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <EnterprisePlatformSvg></EnterprisePlatformSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Enterprise platform</h6>
                                                <p className="sum-menu__text">AI-powered developer platform</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__enterprise">
                                    <li className='sub-menu__title-li'>Available add-ons</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <SecuritySvg></SecuritySvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <GitHubCopilotSvg></GitHubCopilotSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <ActionsSvg></ActionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Pricing</a></li>
                    </ul>
                </div>
                <div className="nav__wrapper">
                    <button className="nav__btn-search" onClick={ShowModalWindow}>
                        <div className="nav__btn-wrapper">
                            <span className="nav__btn-span nav__btn-span--search"><SearchSvg></SearchSvg></span>
                            <span className="nav__btn-text">Search GitHub</span>
                        </div>
                        <span className="nav__btn-span"><PathSvg></PathSvg></span>
                    </button>
                    <a className="nav__btn" href="#">Sign in</a>
                    <a className="nav__btn nav__btn--border" href="#">Sign up</a>
                </div>
            </nav>
            <div className="container">
                <HeaderContent></HeaderContent>
            </div>
        </header>
    )
}