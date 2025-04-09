import React, {} from "react";
import useIntersectionObserver from "../../hooks/AnimationHook/UseIntersectionObserver";
import { GitBranch } from "../../assets/svg/svgComponents";

export function EventPath({isStartIcon = false, isStartInterval = false, startAfterColor, startBeforeColor, isMiddleSvgComponent, middleSvgComponent, blurColor, isEndInterval = true, endAfterColor, endBeforeColor, isBranch = false, branchColor}) {
    const elementsRef = useIntersectionObserver('element-show');
    let count = 0;

    return (
        <div className='event'>
            {isStartIcon ? 
            <div className="event__start" ref={(el) => elementsRef.current[count++] = el}>
                <div className="circle-element"></div>
            </div> : null}
            {isStartInterval ? 
            <div className={`event__interval-middle event__interval-middle--${startAfterColor}-to-${startBeforeColor} interval-middle--anim-block`} ref={(el) => elementsRef.current[count++] = el}></div>
            : null}
            {isMiddleSvgComponent ? 
            <div className={`event__middle event__middle--${blurColor} event-middle--anim-block`} ref={(el) => elementsRef.current[count++] = el}>{middleSvgComponent}</div>
            : null}
            {isEndInterval ? 
            <div className={`event__interval-middle event__interval-middle--${endAfterColor}-to-${endBeforeColor} interval-middle--anim-block`} ref={(el) => elementsRef.current[count++] = el}></div> : null}
            {isBranch ? 
            <div className='event__interval-more-info event__interval-more-info--anim-block' ref={(el) => elementsRef.current[count++] = el}>
                <GitBranch colorProps = {branchColor}></GitBranch>
                {/* <img src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt=""></img> */}
            </div> : null}
        </div>
    )
}