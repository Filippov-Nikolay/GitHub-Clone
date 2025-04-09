import React from "react";
import { 
    OcticonCode, ArrowSymbolMktg, OcticonBriefcase
} from '../../assets/svg/svgComponents'
import { EventPath } from "../EventPath/EventPath";
import { SectionHeader } from "../Section/SectionHeader/SectionHeader";
import { SectionMain } from "../Section/SectionMain/SectionMain";
import { SectionPromo } from "../Section/SectionPromo/SectionPromo";
import { SectionCard } from "../Section/SectionCard/SectionCard";

export function Productivity() {
    const CardsContentProductivity = [
        {
            contentSpan: 'GitHub Actions',
            content: 'automates your build, test, and deployment workflow with simple and secure CI/CD.',
            contentLink: 'Discover GitHub Actions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png'
        },
        {
            contentSpan: 'GitHub Codespaces',
            content: 'offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.',
            contentLink: 'Check out GitHub Codespaces',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png',
        },
        {
            contentSpan: 'GitHub Mobile and Copilot',
            content: 'now let you manage projects and converse with your AI pair programmer on the go.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp',
        },
    ]

    return (
        <section className="productivity">
            <div className="container">
                <SectionHeader
                    isStartEvent = {false}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {false}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonBriefcase></OcticonBriefcase>}
                            blurColor = {'green'}
                            endAfterColor = {'green'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'green'}
                    title = {'Productivity'}
                    subTitleAccent = {'Accelerate innovation'}
                    subTitle={'Our AI-powered platform increases the pace of software development.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {false}
                    srcImg={'https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png'}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'green'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'green'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'green'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Copilot'}
                    text={'empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.'}
                    buttonText={'Explore GitHub Copilot'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'22% increase'}
                    subTitle={'in developer productivity after three years with GitHub'}
                    color={'green'}
                    isSubButton={true}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentProductivity} colorCard = 'green'></SectionCard>
            </div>
        </section>
    )
}