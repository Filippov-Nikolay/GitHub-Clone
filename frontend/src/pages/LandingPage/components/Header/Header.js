import React, { useState } from "react";

import '../../styles/main.css'

import { 
    OcticonCode, ArrowSymbolMktg, 
    OcticonLock, OcticonCodeConduct
} from '../../../../shared/assets/svg/SvgComponents'

import { Nav } from "../../../../shared/Components/Nav/Nav";

import { HeaderContent } from "../HeaderContent/HeaderContent";
import { Productivity } from "../Productivity/Productivity";
import { EventPath } from "../EventPath/EventPath";

// Section
import { SectionHeader } from "../Section/SectionHeader/SectionHeader";
import { SectionMain } from "../Section/SectionMain/SectionMain";
import { SectionPromo } from "../Section/SectionPromo/SectionPromo";
import { SectionCard } from "../Section/SectionCard/SectionCard";


import { Globe } from "../Globe/Globe";
import { Footer } from "../Footer/Footer";

// SECTION
function Collaboration() {
    const CardsContentCollaboration = [
        {
            contentSpan: 'GitHub Sponsors',
            content: 'lets you support your favorite open source maintainers and projects.',
            contentLink: 'Invest with GitHub Sponsors',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png'
        },
        {
            contentSpan: 'GitHub Discussions',
            content: 'creates space to ask questions and have open-ended conversations.',
            contentLink: 'Jump into GitHub Discussions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png',
        },
        {
            contentSpan: 'Pull requests',
            content: 'allow real-time communication and collaboration about code changes.',
            contentLink: 'Check out pull requests',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png',
        },
    ]

    return (
        <section className="collaboration">
            <div className="container">
                <SectionHeader
                    isStartEvent = {true}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'pink'}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonCodeConduct></OcticonCodeConduct>}
                            blurColor = {'pink'}
                            endAfterColor = {'pink'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'pink'}
                    title = {'Collaboration'}
                    subTitleAccent = {'Supercharge collaboration'}
                    subTitle={'GitHub helps your teams work more efficiently together.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {false}
                    srcImg={'https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png'}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'pink'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'pink'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'pink'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Issues and GitHub Projects'}
                    text={'supply project management tools that adapt to your team alongside your code.'}
                    buttonText={'Get started with GitHub Issues'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'80%'}
                    subTitle={`reduction in onboarding time with GitHub<sup>2</sup>`}
                    color={'pink'}
                    isSubButton={false}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentCollaboration} colorCard = 'pink' reverse = 'true'></SectionCard>
            </div>
        </section>
    )
}
function ApplicationSecurity() {
    const CardsApplicationSecurity = [
        {
            contentSpan: 'GitHub Actions',
            content: 'automates your build, test, and deployment workflow with simple and secure CI/CD.',
            contentLink: 'Discover GitHub Actions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png'
        }
    ]
    const CardsContentApplicationSecurity = [
        {
            contentSpan: 'Code scanning',
            content: 'is our code analysis tool that helps you remediate issues in your code.',
            contentLink: 'Explore Dependabot',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png'
        },
        {
            contentSpan: 'Dependabot makes',
            content: 'it easy to find and fix vulnerable dependencies in your supply chain.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png',
        },
        {
            contentSpan: 'Secret scanning',
            content: 'automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png',
        },
    ]

    return (
        <section className="application-security">
            <div className="container">
                <SectionHeader
                    isStartEvent = {true}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'blue'}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonLock></OcticonLock>}
                            blurColor = {'blue'}
                            endAfterColor = {'blue'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'blue'}
                    title = {'Application security'}
                    subTitleAccent = {'Empower developers'}
                    subTitle={'With GitHub, you can secure code in minutes.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {true}
                    componentCard={<SectionCard cardData = {CardsApplicationSecurity} colorCard = 'blue'></SectionCard>}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'blue'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'blue'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'blue'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Advanced Security'}
                    text={'enables you to find and fix vulnerabilities with ease and ship secure code quickly.'}
                    buttonText={'Dive into GitHub Advanced Security'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'7x faster'}
                    subTitle={`vulnerability fixes with GitHub<sup>1</sup>`}
                    color={'blue'}
                    isSubButton={false}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentApplicationSecurity} colorCard = 'blue'></SectionCard>
            </div>
        </section>
    )
}


// MAIN
function MainContent() {
    return (
        <main className="main">
            <Productivity></Productivity>
            <ApplicationSecurity></ApplicationSecurity>
            <div className="wrapper-gradient">
                <Collaboration></Collaboration>
                <Globe></Globe>
            </div>
        </main>
    )
}

// HEADER
export function Header() {
    return (
        <header className="header">
            <Nav/>
            <HeaderContent/>
        </header>
    )
}

// RESULT
export function LandingPage() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}