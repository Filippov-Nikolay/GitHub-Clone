import React from 'react';
 
import Blankslate from "../../../../shared/Components/Blankslate/Blankslate";
import BtnPrimary from "../../../../shared/Components/BtnPrimary/BtnPrimary";
import Btn from "../../../../shared/Components/Btn/Btn";
import BtnSearch from "../../../../shared/Components/BtnSearch/BtnSearch";

import { StarsSVG, SearchSVG } from '../../../../shared/assets/svg/SvgComponents';

import './styles/main.css';

export default function Index() {
    return (
        <div className='stars-page'>
            <div className='stars-page__header'>
                <div className='stars-page__wrapper'>
                    <h2 className='stars-page__title'>Lists <span className='stars-page__span'>(0)</span></h2>
                    <div className="stars-page__wrapper">
                        <div className='stars-page__btn'>
                            <Btn
                                btnText={'Sort'}
                            />
                        </div>
                        <div className='stars-page__btn'>
                            <BtnPrimary
                                btnText={'Create list'}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            <Blankslate
                SvgComponent={<StarsSVG/>}
                title="Create your first list"
                description="Lists make it easier to organize and curate repositories that you have starred."
                isLink={true}
                linkText="Create your first list."
            />
            <div className="stars-page__body">
                <h2 className='stars-page__title'>Stars</h2>
                <BtnSearch
                    svgComponent={<SearchSVG></SearchSVG>}
                    btnText={'Search stars'}
                    bgColor='#ffffff00'
                />
            </div>
        </div>
    )
 }