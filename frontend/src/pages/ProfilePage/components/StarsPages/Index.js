import React from 'react';

import Blankslate from "../../shared/Components/Blankslate/Blankslate";
import BtnPrimary from "../../shared/Components/BtnPrimary/BtnPrimary";

import { StarsSVG } from '../../shared/assets/svg/SvgComponents';

import './styles/main.css';

export default function Index() {
    return (
        <div className='stars-page'>
            <div className='stars-page__header'>
                <div className='stars-page__wrapper'>
                    <h2 className='stars-page__title'>Lists <span className='stars-page__span'>(0)</span></h2>
                    <div className="stars-page__wrapper">
                        <BtnPrimary
                            btnText={'Create a list'}
                        />
                    </div>
                    
                </div>
            </div>
            
            <Blankslate
                SvgComponent={<StarsSVG/>}
                title="Create your first list"
                description="Lists make it easier to organize and curate repositories that you have starred."
                isBtn={false}
                isLink={true}
                linkText="Create your first list."
            />
        </div>
    )
}