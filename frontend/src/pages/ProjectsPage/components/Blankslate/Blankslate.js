import { React } from 'react';
import { ProjectsSVG } from '../../../../shared/assets/svg/SvgComponents';
import './blankslate.css'; 

export default function Blankslate() {
    return (
        <div className="blankslate">
            <div className="blankslate__content">
                <div className="blankslate__svg"><ProjectsSVG/></div>
                <h2 className="blankslate__title">Create your first GitHub project</h2>
                <p className="blankslate__description">
                    Projects are a customizable, flexible tool for planning and tracking your work.
                </p>
                <a href="#" className="btn blankslate__btn">New project</a>
            </div>
        </div>
    );
}