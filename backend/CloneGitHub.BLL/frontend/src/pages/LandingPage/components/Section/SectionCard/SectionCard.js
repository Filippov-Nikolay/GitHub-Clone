import React, {useRef } from "react";
import debounce from 'lodash.debounce';
import useIntersectionObserver from "../../../hooks/AnimationHook/UseIntersectionObserver";
import Tilt from 'react-vanilla-tilt'

export function SectionCard({cardData, colorCard, reverse = false}) {
    const numberOfCards = cardData.length;
    const perspectiveValue = 5000;

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

    const elementsRef = useIntersectionObserver('element-show');
    let count = 0;
    
    return (
        <div className="section-card">
            <div className={`section-card__wrapper ${reverse ? 'section-card__wrapper--column-reverse' : ''}`}>
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className={`section-card__item section-card__item--${colorCard}`} onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                        <div className="section-card__main">
                            <h3 className="section-card__title">
                                <span className="section-card__span">{cardData[0].contentSpan} </span>
                                {cardData[0].content}
                            </h3>
                            <a href={cardData[0].contentHref} className="btn-link">{cardData[0].contentLink}<span className='header-form__btn-decor-arrow'>{cardData[0].svgComponentName}</span></a>
                        </div>
                        <div className="section-card__wrapper-img anim-block__card-img" ref={(el) => elementsRef.current[count++] = el}>
                            <img src={cardData[0].srcImg} alt=""/>
                        </div>
                    </div>
                </Tilt>
                <div className="section-card__wrapper-flex" style={{ display: numberOfCards === 1 ? 'none' : 'flex' }}>
                    {
                        numberOfCards > 1 && (
                            <>
                                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                                    <div className={`section-card__item section-card__item--${colorCard} section-card__item--column`} onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                                        <div className="section-card__main">
                                            <h3 className="section-card__title">
                                                <span className="section-card__span">{cardData[1].contentSpan} </span>
                                                {cardData[1].content}
                                            </h3>
                                            <a href={cardData[1].contentHref} className="btn-link">{cardData[1].contentLink}<span className='header-form__btn-decor-arrow'>{cardData[1].svgComponentName}</span></a>
                                        </div>
                                        <div className="section-card__wrapper-img anim-block__card-img" ref={(el) => elementsRef.current[count++] = el}>
                                            <img src={cardData[1].srcImg} alt=""/>
                                        </div>
                                    </div>
                                </Tilt>
                                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                                    <div className={`section-card__item section-card__item--${colorCard} section-card__item--column`} onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}> 
                                        <div className="section-card__main">
                                            <h3 className="section-card__title">
                                                <span className="section-card__span">{cardData[2].contentSpan} </span>
                                                {cardData[2].content}
                                            </h3>
                                            <a href={cardData[2].contentHref} className="btn-link">{cardData[2].contentLink}<span className='header-form__btn-decor-arrow'>{cardData[2].svgComponentName}</span></a>
                                        </div>
                                        <div className="section-card__wrapper-img anim-block__card-img" ref={(el) => elementsRef.current[count++] = el}>
                                            <img src={cardData[2].srcImg} alt=""/>
                                        </div>
                                    </div>
                                </Tilt>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}