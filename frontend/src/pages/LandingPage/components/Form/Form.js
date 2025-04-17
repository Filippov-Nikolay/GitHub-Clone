import React, { useState } from "react";
import { ArrowSymbolMktg } from "../../assets/svg/svgComponents";

export function Form() {
    const [email, setEmail] = useState("");
    const signupUrl = email ? `/signup?email=${encodeURIComponent(email)}` : "/signup";

    return (
        <div className="form-content">
            <div className='form-content__form'>
                <input
                    className='form-content__input'
                    type="text"
                    placeholder='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <a href={signupUrl} className='form-content__btn'>
                    Sign up for GitHub
                </a>
            </div>
            <div className="form-content__decor"></div>
            <button className='form-content__btn-start'>Start a free enterprise trial <span className='form-content__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></button>
        </div>
    )
}