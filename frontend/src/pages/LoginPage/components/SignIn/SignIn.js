import React, { useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';

import { LogoSVG } from "../../../../shared/assets/svg/SvgComponents";

// Services
import { Login } from "../../services/Login"
import { PasswordReset } from "../../services/PasswordReset";

import Cookies from "js-cookie";

export function SignIn() {
    // Standard hooks
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };
    const [formData, setFormData] = useState({
        userNameOrEmail: "",
        password: "",
    });

    // Reset password hooks
    const [params] = useSearchParams();
    const emailFromUrl = params.get("email");
    const codeFromUrl = params.get("code");

    const isResetMode = emailFromUrl && codeFromUrl;

    const navigate = useNavigate();

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    const [resetData, setResetData] = useState({
        email: "",
        newPassword: "",
        confirmPassword: "",
        code: "",
    });

    const handleChangeReset = (e) => {
        const { name, value } = e.target;
        setResetData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await Login({ formData });

            if (result === true) {
                console.log("Login successful!");
                const userName = Cookies.get('dotcom_user');
                window.location.href = `/${userName}`;
            } else {
                setFormData(prev => ({ ...prev, password: "" }));
                console.log("Login failed! Invalid credentials.");
                setShowSuccess(false);
                setShowError(true);
            }
        } catch (error) {
            console.log("Login error:", error);
        }
    };
    const handleResetSubmit = async (e) => {
        e.preventDefault();

        const { newPassword, confirmPassword } = resetData;

        if (newPassword !== confirmPassword) {
            console.log("Passwords do not match");
            setShowError(true);
            setShowSuccess(false);
            return;
        }

        try {
            const dataToSend = {
                ...resetData,
                email: emailFromUrl,
                code: codeFromUrl
            };

            const result = await PasswordReset({ resetData : dataToSend });

            if (result != null) {
                console.log("Password reset successful!");
                setShowSuccess(true);
                setShowError(false);
                navigate("/login");
            } else {
                setFormData(prev => ({ ...prev, confirmPassword: "" }));
                console.log("Password reset failed! Invalid credentials.");
                setShowError(true);
            }
        } catch (error) {
            console.log("Password reset error:", error);
        }
    };

    const handleCloseError = () => {
        setShowError(false);
        setShowSuccess(false);
    };

    return (
        <div className="form-content">
            <nav className="form-content__nav"><a href="/" className="form-content__link"><LogoSVG/></a></nav>
            <h1 className="title">
                {isResetMode ? "Change password" : "Sign in to GitHub"}
            </h1>
            <div className={`flash-error ${showError ? "" : "flash-error--hidden"}`}>
                <div className="flash-error__text">
                    {isResetMode ? "Passwords do not match" : "Incorrect username or password."}
                </div>
                <button className="flash-error__btn" onClick={handleCloseError}>X</button>
            </div>
            <div className={`flash-success ${showSuccess ? "" : "flash-success--hidden"}`}>
                <div className="flash-success__text">New password set successfully.</div>
                <button className="flash-success__btn" onClick={handleCloseError}>X</button>
            </div>
            <div className="login-form">
                <div className="login-form__container">
                {isResetMode ? (
                    <form onSubmit={handleResetSubmit} className="login-form__form">
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="newPassword">Password</label>
                            <input 
                                id="newPassword"
                                className="login-form__input" 
                                type="password" 
                                name="newPassword"
                                value={resetData.newPassword}
                                onChange={handleChangeReset}
                            />
                        </div>
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="confirmPassword">Confirm password</label>
                            <input 
                                id="confirmPassword"
                                className="login-form__input" 
                                type="password" 
                                name="confirmPassword"
                                value={resetData.confirmPassword}
                                onChange={handleChangeReset}
                            />
                        </div>
                        <div className="login-form__item">
                            <p className="login-form__text">
                                Make sure it`s at least 15 characters OR at least 8 characters including a number, symbol, and uppercase and lowercase letter. <a className="login-callout__link" href="/">Learn more.</a>
                            </p>
                        </div>
                        <button type="submit" className="login-form__btn">Reset Password</button>
                    </form>
                    ) : (
                    <>
                    <form className="login-form__form" action="" onSubmit={handleSubmit}>
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="loginOrEmail">Username or email address</label>
                            <input 
                                id="loginOrEmail"
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
                                <a href="/password_reset" className="login-form__forgot-password">Forgot password?</a>
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
                    </>
                )}
                </div>
            </div>
        </div>
    )
}