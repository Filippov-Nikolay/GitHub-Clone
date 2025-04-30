import React, { useState } from "react";

export function GitBranch({colorProps}) {
    let color = colorProps === 'green' ? '#3fb950' : 
                colorProps === 'blue' ? '#33b3ae' :
                colorProps === 'pink' ? '#F778BA' : 
                '#000';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="485" viewBox="0 0 87 485" fill="none" style={{display: 'block', marginLeft: '50%', maxWidth: '100%'}}>
            <defs>
                <linearGradient id={`dynamicGradient-${color}`} x1="24" y1="0" x2="22.5" y2="485" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0515742" stopColor={color} stopOpacity='0'/>
                    <stop offset="0.225992" stopColor={color}/>
                    <stop offset="0.47249" stopColor={color}/>
                    <stop offset="0.522324" stopColor={color}/>
                    <stop offset="0.561417" stopColor={color}/>
                    <stop offset="0.791714" stopColor={color}/>
                    <stop offset="0.956186" stopColor={color} stopOpacity='0'/>
                </linearGradient>
                <filter id={`filter-${colorProps}`} x="34" y="216.124" width="52.876" height="52.8762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor={color}/>
                </filter>
            </defs>
            <path d="M2.00026 0L2.00014 33.5188C2.00005 61.0048 12.3542 87.4821 31.0001 107.676V107.676C49.6458 127.871 60 154.348 60 181.834V301.665C60 329.451 49.6629 356.243 31.0001 376.829V376.829C12.3373 397.414 2.00022 424.207 2.00016 451.993L2.00009 485" stroke={`url(#dynamicGradient-${color})`} strokeWidth="3"/>
            <g className="test" filter={`url(#filter-${colorProps})`}>
                <circle r="6.43806" transform="matrix(1 0 0 -1 60.4381 242.562)" fill="black"/>
                <circle r="4.93806" transform="matrix(1 0 0 -1 60.4381 242.562)" stroke="white" strokeWidth="3"/>
            </g>
        </svg>
    )
}