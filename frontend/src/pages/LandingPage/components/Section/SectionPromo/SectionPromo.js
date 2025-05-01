import React, {} from "react";
import useIntersectionObserver from "../../../hooks/AnimationHook/UseIntersectionObserver";
import { ArrowSymbolMktg } from "../../../../../shared/assets/svg/SvgComponents";

export function SectionPromo({event, AccentText, text, buttonText, href = '#', question = 'Did you know?', title, subTitle, color, isSubButton = false, linkSubButton = '#', subButtonText}) {
    const elementsRef = useIntersectionObserver('element-show');
    let count = 0;

    return (
        <div className="section-promo">
            {event}
            <div className="section-promo__wrapper">
                <div className="section-promo__content section-promo-content--anim-block" ref={(el) => elementsRef.current[count++] = el}>
                    <h2 className="section-promo__title">
                        <span className='section-promo__span-title'>{AccentText} </span>
                        {text}
                    </h2>
                    <a href={href} className="btn-link">{buttonText} <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact fact--anim-block" ref={(el) => elementsRef.current[count++] = el}>
                    <div className="fact__content">
                        <div className={`fact__title-top fact__title-top--${color}`}>{question}</div>
                        <h3 className={`fact__title fact__title--${color}`}>{title}</h3>
                        <p className="fact__sub-text">{subTitle}</p>
                        {isSubButton ? 
                        <a href={linkSubButton} className="btn-link">{subButtonText}<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a> 
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}