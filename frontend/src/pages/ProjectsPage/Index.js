import { React } from "react";

import ProjectsBanner from "./components/ProjectsBanner/ProjectsBanner";
import Blankslate from "../../shared/Components/Blankslate/Blankslate";

import { ProjectsSVG } from '../../shared/assets/svg/SvgComponents';


export default function Index() {
    return (
        <>
            <ProjectsBanner />
            <Blankslate
                SvgComponent={<ProjectsSVG/>}
                title="Create your first GitHub project"
                description="Projects are a customizable, flexible tool for planning and tracking your work."
                isBtn={true}
                btnText="New project"
            />
        </>
    );
}