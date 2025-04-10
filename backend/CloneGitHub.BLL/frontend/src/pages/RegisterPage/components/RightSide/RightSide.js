import React, { useState } from "react";
import { ArrowSymbolMktg } from "../../../../shared/assets/svg/SvgComponents";
import { registerUser } from "../../services/Registration";

export function RightSide() {
    const [formData, setFormData] = useState({
        loginOrEmail: "",
        userName: "",
        password: "",
        country: "",
        emailPreferences: false
    });
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        registerUser(formData);
    };


    return (
        <div className="right-side">
            <header className="right-side__header">
                <span className="right-side__span">Already have an account?</span>
                <a href="/login" className="right-side__link"><span className="right-side__text">Sign in</span> <ArrowSymbolMktg /></a>
            </header>
            <div className="right-side__content">
                <main className="right-side__main">
                    <h2 className="right-side__title">Sign up to GitHub</h2>
                    <form className="right-side__form" onSubmit={handleSubmit}>
                        <div className="right-side__form-group">
                            <label htmlFor="email" className="right-side__label">Email</label>
                            <input 
                                id="email"
                                className="login-form__input"
                                type="text"
                                name="loginOrEmail"
                                value={formData.loginOrEmail}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email or username"
                            />
                        </div>
                        <div className="right-side__form-group">
                            <label htmlFor="password" className="right-side__label">Password</label>
                            <input 
                                id="password"
                                className="login-form__input"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter your password"
                            />
                            <p className="right-side__note">Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
                        </div>
                        <div className="right-side__form-group">
                            <label htmlFor="username" className="right-side__label">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                className="right-side__input" 
                                placeholder="Enter your username" 
                                value={formData.userName}
                                onChange={handleChange}
                                name="userName"
                                required 
                            />
                            <p className="right-side__note">Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</p>
                        </div>
                        <div className="right-side__form-group">
                            <label htmlFor="country" className="right-side__label">Your country</label>
                            <input 
                                type="text" 
                                id="country" 
                                className="right-side__input" 
                                placeholder="Enter your country" 
                                required 
                                value={formData.country}
                                onChange={handleChange}
                                name="country"
                            />
                            <p className="right-side__note">For compliance reasons, we're required to collect country information to send you occasional updates and announcements.</p>
                        </div>

                        <label htmlFor="email-preferences" className="right-side__label">Email preferences</label>
                        <div className="right-side__form-group right-side__form-group--flex">
                            <input 
                                type="checkbox" 
                                id="email-preferences" 
                                className="right-side__checkbox" 
                                name="emailPreferences"
                                checked={formData.emailPreferences}
                                onChange={handleChange}
                            />
                            <span className="right-side__checkbox-label">Receive occasional product updates and announcements</span>
                        </div>
                        <button type="submit" className="right-side__button">Continue <ArrowSymbolMktg /></button>
                    </form>
                </main>
                <footer className="footer">
                    <p className="footer__text">
                        By creating an account, you agree to the <a href="#" className="footer__link">Terms of Service</a> For more information about GitHub's privacy practices, see the <a href="#" className="footer__link">GitHub Privacy Statement</a> We'll occasionally send you account-related emails.
                    </p>
                </footer>
            </div>
        </div>
    );
}