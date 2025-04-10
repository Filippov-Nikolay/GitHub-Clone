import React from "react";
import { LogoSVG } from "../../../../shared/assets/svg/SvgComponents";

export function Form() {
    return (
        <div className="form-content">
            <nav className="form-content__nav"><a href="#" className="form-content__link"><LogoSVG/></a></nav>
            <h1 className="title">Sign in to GitHub</h1>
            <div className="login-form">
                <div className="login-form__container">
                    <form className="login-form__form" action="">
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="loginOrEmail">Username or email address</label>
                            <input className="login-form__input" type="text" name="loginOrEmail"/>
                        </div>
                        <div className="login-form__item">
                            <div className="login-form__wrapper">
                                <label className="login-form__label" htmlFor="password">Password</label>
                                <a href="#" className="login-form__forgot-password">Forgot password?</a>
                            </div>
                            <input className="login-form__input" type="password" name="password"/>
                        </div>
                        
                        <button type="submit" className="login-form__btn">Sign in</button>
                    </form>
                    
                    <div className="login-callout">
                        <button type="button" className="login-callout__btn">Sign in with a passkey</button>
                        <p className="login-callout__text">New to GitHub? <a className="login-callout__link" href="signup">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}