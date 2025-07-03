import React from "react";
import { 
    PackagesLogoSVG, 
    ApacheLogoSVG, NuGetLogoSVG, RubyGemsLogoSVG, 
    NpmLogoSVG, ContainersLogoSVG 
} from "../../../../shared/assets/svg/SvgComponents"
import Btn from "../../../../shared/Components/BtnLink/Btn.js";

import './packages.css';
import './adaptive.css'


export default function Packages() {
    const listRegistry = [
            {
                svgLogo: <ApacheLogoSVG/>,
                title: 'Apache Maven',
                description: 'A default package manager used for the Java programming language and the Java runtime environment.',
                link: '#',
            },
            {
                svgLogo: <NuGetLogoSVG/>,
                title: 'NuGet',
                description: 'A free and open source package manager used for the Microsoft development platforms including .NET.',
                link: '#',
            },
            {
                svgLogo: <RubyGemsLogoSVG/>,
                title: 'RubyGems',
                description: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
                link: '#',
            },
            {
                svgLogo: <NpmLogoSVG/>,
                title: 'npm',
                description: 'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.',
                link: '#',
            },
            {
                svgLogo: <ContainersLogoSVG/>,
                title: 'Containers',
                description: 'A single place for your team to manage Docker images and decide who can see and access your images.',
                link: '#',
            }
        ];

    return (
        <div className="packages">
            <div className="packages__item">
                <div className="packages__logo"><PackagesLogoSVG/></div>
                <h2 className="packages__title">Get started with GitHub Packages</h2>
                <p className="packages__description">Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
            </div>
            <div className="packages__item">
                <h3 className="packages__sub-title">Choose a registry</h3>
                <div className="packages-grid">
                    {listRegistry.map((item, index) => (
                        <div className="packages-grid__item" key={index}>
                            <div className="packages-grid__wrapper">
                                <div className="packages-grid__logo">{item.svgLogo}</div>
                                <h3 className="packages-grid__title">{item.title}</h3>
                            </div>
                            <p className="packages-grid__description">{item.description}</p>
                            <Btn
                                btnHref={item.link}
                                btnText={'Lorem more'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}