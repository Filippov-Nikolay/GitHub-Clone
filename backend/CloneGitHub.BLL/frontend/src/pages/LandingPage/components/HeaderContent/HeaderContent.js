import React from "react";

import { Form } from "../Form/Form";
import { OurPartners } from "../OurPartners/OurPartners";
import { EventPath } from "../EventPath/EventPath";
import { OcticonCode } from '../../assets/svg/svgComponents'
import logoNLO from '../../assets/img/header_element_nlo.png' 

export function HeaderContent() {
    return (
        <div className="container">
            <div className='header-content'>
                <div className='header-content__decor'><img src={logoNLO} alt=''/></div>
                <div className='header-content__main'>
                    <EventPath
                        isStartIcon = {true}
                        isStartInterval = {true}
                        startAfterColor = {'transparent'}
                        startBeforeColor = {'purple'}
                        isMiddleSvgComponent = {true}
                        middleSvgComponent = {<OcticonCode></OcticonCode>}
                        blurColor = {'purple'}
                        endAfterColor = {'purple'}
                        endBeforeColor = {'green'}
                        isBranch = {false}
                        branchColor = {'green'}
                    ></EventPath>
                    <div className='header-content__wrapper'>
                        <h1 className='header-content__title'>Let`s build from here</h1>
                        <p className='header-content__sub-title'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                        <Form></Form>
                        <OurPartners></OurPartners>
                    </div>
                </div>
            </div>
        </div>
    )
}