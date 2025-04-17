import React, {} from "react";
import useIntersectionObserver from "../../../hooks/AnimationHook/UseIntersectionObserver";

export function SectionMain({isCard = false, componentCard, srcImg, srcImgBlur, srcImgSecond}) {
    const elementsRef = useIntersectionObserver('element-show');
    let count = 0;

    return (
        <div className="section-main">
            <div className="section-block-anim">
                {isCard ? 
                componentCard :
                <div className="section-main__first section-main-first--anim-block" ref={(el) => elementsRef.current[count++] = el}>
                    <img src={srcImg} alt=""/>
                </div>}
                <img className='section-main__blur section-main--anim-block' src={srcImgBlur} alt="" ref={(el) => elementsRef.current[count++] = el}/>
                <div className="section-main__second section-main-second--anim-block" ref={(el) => elementsRef.current[count++] = el}>
                    <img src={srcImgSecond} alt=""/>
                </div>
            </div>
        </div>
    )
}