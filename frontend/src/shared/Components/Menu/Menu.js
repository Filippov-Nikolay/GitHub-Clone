import React, {} from "react";
import { 
    ArrowDownSvg, ActionsSvg, PackagesSvg, CodespacesSvg, 
    CodeReviewSvg, DiscussionsSvg, EnterprisePlatformSvg,
    SecuritySvg, GitHubCopilotSvg, IssuesSvg, LinkSvg
} from "../../../shared/assets/svg/SvgComponents";
import './menu.css'

export function Menu() {
    const ProductList = [
        [
            {
                id: 1,
                iconComponentSvg: <ActionsSvg></ActionsSvg>,
                title: 'Actions',
                subTitle: 'Automate any workflow'
            },
            {
                id: 2,
                iconComponentSvg: <PackagesSvg></PackagesSvg>,
                title: 'Packages',
                subTitle: 'Host and manage packages'
            },
            {
                id: 3,
                iconComponentSvg: <SecuritySvg></SecuritySvg>,
                title: 'Security',
                subTitle: 'Find and fix vulnerabilities'
            },
            {
                id: 4,
                iconComponentSvg: <CodespacesSvg></CodespacesSvg>,
                title: 'Codespaces',
                subTitle: 'Instant dev environments'
            },
            {
                id: 5,
                iconComponentSvg: <GitHubCopilotSvg></GitHubCopilotSvg>,
                title: 'GitHub Copilot',
                subTitle: 'Write better code with AI'
            },
            {
                id: 6,
                iconComponentSvg: <CodeReviewSvg></CodeReviewSvg>,
                title: 'Code review',
                subTitle: 'Manage code changes'
            },
            {
                id: 7,
                iconComponentSvg: <IssuesSvg></IssuesSvg>,
                title: 'Issues',
                subTitle: 'Plan and track work'
            },
            {
                id: 8,
                iconComponentSvg: <DiscussionsSvg></DiscussionsSvg>,
                title: 'discussions',
                subTitle: 'Collaborate outside of code'
            }
        ],
        [
            {
                id: 1,
                title: 'Explore',
                items: [
                    {
                        id: 1,
                        text: 'All features',
                        isIconComponentSvg: false
                    },
                    {
                        id: 2,
                        text: 'Documentation',
                        isIconComponentSvg: true
                    },
                    {
                        id: 3,
                        text: 'GitHub Skills',
                        isIconComponentSvg: true
                    },
                    {
                        id: 4,
                        text: 'blog',
                        isIconComponentSvg: true
                    }
                ],
                iconComponentSvg: <LinkSvg></LinkSvg>
            }
        ]
    ]
    const SolutionsList = [
        {
            id: 1,
            title: 'For',
            items: [
                {
                    id: 1,
                    text: 'Enterprise',
                    isIconComponentSvg: false
                },
                {
                    id: 2,
                    text: 'Teams',
                    isIconComponentSvg: false
                },
                {
                    id: 3,
                    text: 'Startups',
                    isIconComponentSvg: false
                },
                {
                    id: 4,
                    text: 'Education',
                    isIconComponentSvg: true
                }
            ],
            iconComponentSvg: <LinkSvg></LinkSvg>
        },
        {
            id: 2,
            title: 'By Solution',
            items: [
                {
                    id: 1,
                    text: 'CI/CD & Automation',
                    isIconComponentSvg: false
                },
                {
                    id: 2,
                    text: 'DevOps',
                    isIconComponentSvg: false
                },
                {
                    id: 3,
                    text: 'DevSecOps',
                    isIconComponentSvg: true
                }
            ],
            iconComponentSvg: <LinkSvg></LinkSvg>
        },
        {
            id: 3,
            title: 'Resources',
            items: [
                {
                    id: 1,
                    text: 'Learning Pathways',
                    isIconComponentSvg: true
                },
                {
                    id: 2,
                    text: 'White papers, Ebooks, Webinars',
                    isIconComponentSvg: true
                },
                {
                    id: 3,
                    text: 'Customer Stories',
                    isIconComponentSvg: false
                },
                {
                    id: 4,
                    text: 'Partners',
                    isIconComponentSvg: true
                }
            ],
            iconComponentSvg: <LinkSvg></LinkSvg>
        }
    ]
    const OpenSourceList = [
        [
            {
                id: 1,
                title: 'GitHub Sponsors',
                subTitle: 'Fund Open Source Developers'
            },
            {
                id: 2,
                title: 'The ReadME Project',
                subTitle: 'GitHub Community Article'
            }
        ], 
        [
            {
                id: 1,
                title: 'Repositories',
                items: [
                    {
                        id: 1,
                        text: 'Topics',
                        isIconComponentSvg: false
                    },
                    {
                        id: 2,
                        text: 'Trending',
                        isIconComponentSvg: true
                    },
                    {
                        id: 3,
                        text: 'Collections',
                        isIconComponentSvg: true
                    }
                ]
            }
        ]
    ]
    const EnterpriseList = [
        [
            {
                id: 1,
                iconComponentSvg: <EnterprisePlatformSvg></EnterprisePlatformSvg>,
                title: 'Enterprise platform',
                subTitle: 'AI-powered developer platform'
            }
        ],
        [
            {
                id: 1,
                title: 'Available add-ons',
                items: [
                    {
                        id: 1,
                        iconComponentSvg: <SecuritySvg></SecuritySvg>,
                        title: 'Advanced Security',
                        subTitle: 'Enterprise-grade security features'
                    },
                    {
                        id: 2,
                        iconComponentSvg: <GitHubCopilotSvg></GitHubCopilotSvg>,
                        title: 'GitHub Copilot',
                        subTitle: 'Enterprise-grade AI features'
                    },
                    {
                        id: 3,
                        iconComponentSvg: <DiscussionsSvg></DiscussionsSvg>,
                        title: 'Premium Support',
                        subTitle: 'Enterprise-grade 24/7 support'
                    }
                ]
            }
        ]
    ]

    return (
        <ul className="menu">
            <li className="menu__item">
                <a href="#" className="menu__link">
                    product
                    <span className="menu__span"><ArrowDownSvg></ArrowDownSvg></span>
                </a>
                <div className="menu__wrapper-sub-menu menu__wrapper-sub-menu--row">
                    <ul className="sub-menu sub-menu__product">
                        {ProductList[0].map((list, index) => (
                            <li className="sub-menu__item" key={list.id}>
                                <a href="#" className="sub-menu__link">
                                    {list.iconComponentSvg}
                                    <div className="sub-menu__wrapper">
                                        <h6 className="sub-menu__title">{list.title}</h6>
                                        <p className="sum-menu__text">{list.subTitle}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {ProductList[1].map((list, listIndex) => (
                        <ul className="sub-menu sub-menu__product" key={list.id}>
                            <li className='sub-menu__title-li'>{list.title}</li>
                            {list.items.map((item, itemIndex) => (
                                <li className="sub-menu__item" key={item.id}>
                                    <a href="#" className="sub-menu__link">
                                        {item.text}
                                        {item.isIconComponentSvg ? <span className='sub-menu__span'>{list.iconComponentSvg}</span> : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">
                    Solutions
                    <span className="menu__span"><ArrowDownSvg></ArrowDownSvg></span>
                </a>
                <div className="menu__wrapper-sub-menu menu__wrapper-sub-menu--column menu__wrapper-sub-menu--solutions">
                    {SolutionsList.map((list, listIndex) => (
                        <ul className="sub-menu sub-menu__solutions" key={list.id}>
                            <li className='sub-menu__title-li'>{list.title}</li>
                            {
                                list.items.map((item, itemIndex) => (
                                    <li className="sub-menu__item" key={item.id}>
                                        <a href="#" className="sub-menu__link">
                                            {item.text}
                                            {item.isIconComponentSvg ? <span className='sub-menu__span'>{list.iconComponentSvg}</span> : null}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    ))}
                </div>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">
                    Open source
                    <span className="menu__span"><ArrowDownSvg></ArrowDownSvg></span>
                </a>
                <div className="menu__wrapper-sub-menu menu__wrapper-sub-menu--column menu__wrapper-sub-menu--open-source">
                    {OpenSourceList[0].map((list, listIndex) => (
                        <ul className="sub-menu sub-menu__open-source" key={list.id}>
                            <li className="sub-menu__item">
                                <a href="#" className="sub-menu__link">
                                    <div className="sub-menu__wrapper">
                                        <h6 className="sub-menu__title">{list.title}</h6>
                                        <p className="sum-menu__text">{list.subTitle}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    ))}
                    {OpenSourceList[1].map((list, listIndex) => (
                        <ul className="sub-menu sub-menu__open-source" key={list.id}>
                            <li className='sub-menu__title-li'>{list.title}</li>
                            {list.items.map((item, itemIndex) => (
                                <li className="sub-menu__item" key={item.id}>
                                    <a href="#" className="sub-menu__link">{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">
                    Enterprise
                    <span className="menu__span"><ArrowDownSvg></ArrowDownSvg></span>
                </a>
                <div className="menu__wrapper-sub-menu menu__wrapper-sub-menu--column menu__wrapper-sub-menu--enterprise">
                    <ul className="sub-menu sub-menu__enterprise">
                        {EnterpriseList[0].map((list, index) => (
                            <li className="sub-menu__item" key={list.id}>
                                <a href="#" className="sub-menu__link">
                                    {list.iconComponentSvg}
                                    <div className="sub-menu__wrapper">
                                        <h6 className="sub-menu__title">{list.title}</h6>
                                        <p className="sum-menu__text">{list.subTitle}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    {EnterpriseList[1].map((list, listIndex) => (
                        <ul className="sub-menu sub-menu__enterprise" key={list.id}>
                            <li className='sub-menu__title-li'>{list.title}</li>
                            {list.items.map((item, itemIndex) => (
                                <li className="sub-menu__item" key={item.id}>
                                    <a href="#" className="sub-menu__link">
                                        {item.iconComponentSvg}
                                        <div className="sub-menu__wrapper">
                                            <h6 className="sub-menu__title">{item.title}</h6>
                                            <p className="sum-menu__text">{item.subTitle}</p>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </li>
            <li className="menu__item"><a href="#" className="menu__link">Pricing</a></li>
        </ul>
    )
}