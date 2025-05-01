import { React } from "react";

import ProjectsBanner from "./components/ProjectsBanner/ProjectsBanner";

import Blankslate from "../../../../shared/Components/Blankslate/Blankslate";
import BtnPrimaryComponent from "../../../../shared/Components/BtnPrimary/BtnPrimary";

import { ProjectsSVG } from '../../../../shared/assets/svg/SvgComponents';


export default function Projects() {
    return (
        <div className="projects-page">
            <ProjectsBanner />
            <Blankslate
                SvgComponent={<ProjectsSVG/>}
                title="Create your first GitHub project"
                description="Projects are a customizable, flexible tool for planning and tracking your work."
                isBtn={true}
                btnPrimaryComponent={<BtnPrimaryComponent btnText={"New project"} />}
            />
        </div>
    );
}