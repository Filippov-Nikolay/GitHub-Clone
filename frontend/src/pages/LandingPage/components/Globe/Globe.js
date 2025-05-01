import React, {} from "react";
import { EventPath } from "../EventPath/EventPath";
import { OcticonCode } from "../../../../shared/assets/svg/SvgComponents";
import { Form } from "../Form/Form";

export function Globe() {
    return (
        <section className="globe">
            <div className="container">
                <div className="globe__inner">
                    <EventPath
                        isStartIcon = {false}
                        isStartInterval = {true}
                        startAfterColor = {'transparent'}
                        startBeforeColor = {'purple'}
                        isMiddleSvgComponent = {true}
                        middleSvgComponent = {<OcticonCode></OcticonCode>}
                        blurColor = {'purple'}
                        isEndInterval = {false}
                    ></EventPath>
                    <div className="globe__content">
                        <h3 className="content-sub-title content-sub-title--big">
                            Over 100 million developers call GitHub home<sup>3</sup>
                        </h3>
                        <p className="content-sub-text content-sub-title--gray">
                            Whether you`re scaling your startup or just learning how to code, GitHub is your home. Join the world`s largest developer platform to build the innovations that empower humanity. Let`s build from here.
                        </p>
                        <Form></Form>
                    </div>
                </div>
                <div className="globe__wrapper">
                    <video className='globe__video' autoPlay loop muted>
                        <source type="video/mp4; codecs=hevc,mp4a.40.2" src="https://github.githubassets.com/assets/globe-900.hevc-58019d77b21c.mp4"/>
                        <source type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" src="https://github.githubassets.com/assets/globe-900.h264-975e7b5ac572.mp4"/>
                    </video>
                    {/* <button className='globe__btn'>Pause</button> */}
                </div>
                <ul className="globe__list">
                    <li className="globe__item">
                        <sup>1</sup>This 7X times factor is based on data from the industry`s longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 days vs. GitHub`s fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when compared.
                    </li>
                    <li className="globe__item">
                        <sup>2</sup>The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.
                    </li>
                    <li className="globe__item">
                        <sup>3</sup>There are now 100 million developers around the world using GitHub. <a className='globe__link' href="#">Read the blog post.</a>
                    </li>
                </ul>
            </div>
            <div className="globe__gradient"></div>
        </section>
    )
}