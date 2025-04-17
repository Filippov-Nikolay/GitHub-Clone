import React, { useState } from "react";
import { LogoSVG } from "../../../../shared/assets/svg/SvgComponents";
import { PasswordReset } from "../../services/PasswordReset";
import { useNavigate } from 'react-router-dom';

export function Form() {
    const [formData, setFormData] = useState({ email: "" });
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const result = await PasswordReset({ formData });
            if (result != null) {
                setIsSent(true);
            }
        } catch (error) {
            console.log("Error:", error);
            setIsSending(false);
        }
    };

    const handleReturn = () => {
        navigate("/login");
    };

    return (
        <div className="form-content">
            <nav className="form-content__nav">
                <a href="/" className="form-content__link">
                    <LogoSVG />
                </a>
            </nav>
            <h1 className="title">Reset your password</h1>
            <div className="login-form">
            {isSent ? (
                <div className="confirmation-message">
                    <p className="confirmation-message__text">Check your email for a link to reset your password.</p>
                    <p className="confirmation-message__text">If it doesn't appear within a few minutes, check your spam folder.</p>
                    <button onClick={handleReturn} className="login-form__btn">
                        Return to sign in
                    </button>
                </div>
            ) : (
                <div className="login-form__container">
                    <form className="login-form__form" onSubmit={handleSubmit}>
                        <div className="login-form__item">
                            <label className="login-form__label" htmlFor="email">
                                Enter your user account's verified email address and we will send you a password reset link.
                            </label>
                            <input
                                className="login-form__input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`login-form__btn ${isSending ? "login-form__btn--clicked" : ""}`}>
                            {isSending ? "Sending..." : "Send password reset email"}
                        </button>
                    </form>
                </div>
            )}
            </div>
        </div>
    )
}