import React, {} from "react";
import useIntersectionObserver from "../../../hooks/AnimationHook/UseIntersectionObserver";

export function SectionHeader({isStartEvent = true, event, color, title, subTitleAccent, subTitle}) {
    const elementsRef = useIntersectionObserver('element-show');
    let count = 0;

    return (
        <div className="section-header">
            {event}
            <div className="section-header__content" style={!isStartEvent ? {paddingTop: '10px'} : null}>
                <h2 className="section-header__title section-header__title--anim-block" ref={(el) => elementsRef.current[count++] = el}>{title}</h2>
                <h3 className="section-header__sub-title section-header__sub-title--anim-block" ref={(el) => elementsRef.current[count++] = el}>
                    <span className={`section-header__accent-text section-header__accent-text--${color} section-header__accent-text--anim-block`}>{subTitleAccent}</span>
                    {subTitle}
                </h3>
            </div>
        </div>
    )
}