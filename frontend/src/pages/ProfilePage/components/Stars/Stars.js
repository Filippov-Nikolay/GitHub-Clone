import React from 'react';
 
import Blankslate from "../../../../shared/Components/Blankslate/Blankslate";
import BtnPrimary from "../../../../shared/Components/BtnPrimary/BtnPrimary";
import Btn from "../../../../shared/Components/Btn/Btn";
import BtnSearch from "../../../../shared/Components/BtnSearch/BtnSearch";

import { StarsSVG, SearchSVG } from '../../../../shared/assets/svg/SvgComponents';

import './stars.css';
import './adaptive.css';

export default function Stars() {
    return (
        <div className='stars'>
            <div className='stars__header'>
                <div className='stars__wrapper'>
                    <h2 className='stars__title'>Lists <span className='stars__span'>(0)</span></h2>
                    <div className="stars__wrapper">
                        <div className='stars__btn'>
                            <Btn
                                btnText={'Sort'}
                            />
                        </div>
                        <div className='stars__btn'>
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
                description={
                    <>
                      Lists make it easier to organize and curate repositories that you have starred.{' '}
                      <a href="#" className="blankslate__link">Create your first list.</a>
                    </>
                }
            />
            <div className="stars__body">
                <h2 className='stars__title'>Stars</h2>
                <div className="stars__content">
                    <div className="stars__wrapper stars__wrapper--mobile-full">
                        <BtnSearch
                            svgComponent={<SearchSVG></SearchSVG>}
                            btnText={'Search stars'}
                            bgColor='#ffffff00'
                        />
                        <div className="stars__btn">
                            <Btn
                                btnText={'Search'}
                            />
                        </div>
                    </div>
                    <div className="stars__wrapper">
                        <div className="stars__btn">
                            <Btn
                                btnText={'Type: All'}
                            />
                        </div>
                        <div className="stars__btn">
                            <Btn
                                btnText={'Sort by: Recently starred'}
                            />
                        </div>
                    </div>
                </div>
                <Blankslate
                    SvgComponent={<StarsSVG/>}
                    isBorder={false}
                    title="You don’t have any starred repositories yet"
                    description={
                        <>
                          As you{' '}
                          <a href="#" className="blankslate__link">explore GitHub</a>,
                          star repositories to save them for later and they’ll show up here.
                        </>
                    }
                    isLink={true}
                    linkText="Create your first list."
                />
            </div>
        </div>
    )
 }