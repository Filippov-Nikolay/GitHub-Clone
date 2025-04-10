import React, { useState } from "react";
import { LogoSVG } from "../../../../shared/assets/svg/SvgComponents";
import { Login } from "../../services/Login"
import { useNavigate } from 'react-router-dom';

export function Form() {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({
        userNameOrEmail: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await Login({ formData });
            
            if (result === true) {
                console.log("Login successful!");
                navigate('/homePage');
            } else {
                console.log("Login failed! Invalid credentials.");
                setShowError(true);
            }
        } catch (error) {
            console.log("Login error:", error);
        }
    };
    const handleCloseError = () => {
        setShowError(false);
    };

    return (
        <div className="form-content">
            <nav className="form-content__nav"><a href="/" className="form-content__link"><LogoSVG/></a></nav>
            <h1 className="title">Sign in to GitHub</h1>
            <div className={`flash-error ${showError ? "" : "flash-error--hidden"}`}>
                <div className="flash-error__text">
                    Incorrect username or password.
                </div>
                <button className="flash-error__btn" onClick={handleCloseError}>X</button>
            </div>
            <div className="login-form">
                <div className="login-form__container">
                    <form className="login-form__form" action="" onSubmit={handleSubmit}>
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="loginOrEmail">Username or email address</label>
                            <input 
                                className="login-form__input" 
                                type="text" 
                                name="userNameOrEmail"
                                value={formData.userNameOrEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login-form__item">
                            <div className="login-form__wrapper">
                                <label className="login-form__label" htmlFor="password">Password</label>
                                <a href="#" className="login-form__forgot-password">Forgot password?</a>
                            </div>
                            <input 
                                className="login-form__input" 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
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