import React, {} from "react";
import { ArrowSymbolMktg } from "../../assets/svg/svgComponents";

export function Form() {
    return (
        <div className="form-content">
            <form className='form-content__form' action="POST">
                <input className='form-content__input' type="text" placeholder='Email address'/>
                <button className='form-content__btn'>Sign up for GitHub</button>
            </form>
            <div className="form-content__decor"></div>
            <button className='form-content__btn-start'>Start a free enterprise trial <span className='form-content__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></button>
        </div>
    )
}