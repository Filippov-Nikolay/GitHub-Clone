import React from 'react';

import Blankslate from "../../shared/Components/Blankslate/Blankslate";
import { StarsSVG } from '../../shared/assets/svg/SvgComponents';

import './styles/main.css';

export default function Index() {
    return (
        <>
            <Blankslate
                SvgComponent={<StarsSVG/>}
                title="Create your first list"
                description="Lists make it easier to organize and curate repositories that you have starred."
                isBtn={false}
                isLink={true}
                linkText="Create your first list."
            />
        </>
    )
}