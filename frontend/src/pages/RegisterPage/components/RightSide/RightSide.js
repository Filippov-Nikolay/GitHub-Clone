import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams} from 'react-router-dom';
import { getNames } from "country-list";

import Input from "../Input/Input"
import InputSelect from "../InputSelect/InputSelect";

import { ArrowSymbolMktg } from "../../../../shared/assets/svg/SvgComponents";
import { registerUser } from "../../services/Registration";
import styles from "./rightSide.module.css"

// Services
import { checkEmailExists } from "../../services/ValidationService";
import { checkUsernameExists } from "../../services/ValidationService";


export function RightSide() {
    const countries = getNames();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState('');
    const [errorForEmail, setErrorForEmail] = useState('');
    const [errorTitleForEmail, setErrorTitleForEmail] = useState('');
    const [formData, setFormData] = useState({ 
        Email: '', 
        Password: '',
        Username: '',
        Country: '',
        EmailPreferences: false
    });
    const debounceEmailRef = useRef(null)
    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);

        setFormData(prev => ({ ...prev, Email: val }));

        // Сбрасываем старый таймер
        if (debounceEmailRef.current) {
            clearTimeout(debounceEmailRef.current);
        }

        // Устанавливаем новый
        debounceEmailRef.current = setTimeout(async() => {
            if (val.length == 0) {
                setErrorTitleForEmail('Email cannot be blank');
                return;
            } else if (!emailRegex.test(val)) {
                setErrorTitleForEmail('Email is invalid or already taken');
                return;
            }

            const exists = await checkEmailExists(val);
            if (exists) {
                setErrorTitleForEmail(
                    <p>
                        The email you have provided is already associated with an account.{' '}
                        <a href="/login" style={{display: "inline-block", textDecoration: "underline"}}>Sign in</a>{' '}or{' '}<a href="password_reset" style={{display: "inline-block", textDecoration: "underline"}}>reset your password</a> 
                    </p>
                );
            } else {
                setErrorTitleForEmail('');
            }
        }, 500);
    }

    const [password, setPassword] = useState('');
    const [errorForPassword, setErrorForPassword] = useState('');
    const [errorTitleForPassword, setErrorTitleForPassword] = useState('');
    const handlePasswordChange = (e) => {
        const val = e.target.value;
        setPassword(val);

        setFormData(prev => ({ ...prev, Password: val }));

        if (val.length == 0) {
            setErrorTitleForPassword('Password cannot be blank')
        } else if (val.length >= 15) {
            setErrorTitleForPassword('');
        } else if (val.length >= 8 && /[0-9]/.test(val) && /[a-z]/.test(val)) {
            setErrorTitleForPassword('');
        } else {
            setErrorTitleForPassword('');
        }
    };

    const [username, setUsername] = useState('');
    const [errorForUsername, setErrorForUsername] = useState('');
    const [errorTitleForUsername, setErrorTitleForUsername] = useState('');
    const debounceUsernameRef = useRef(null)
    const handleUsernameChange = (e) => {
        const val = e.target.value;
        setUsername(val);

        setFormData(prev => ({ ...prev, Username: val }));

        // Сбрасываем старый таймер
        if (debounceUsernameRef.current) {
            clearTimeout(debounceUsernameRef.current);
        }

        // Устанавливаем новый
        debounceUsernameRef.current = setTimeout(async() => {
            if (val.length == 0) {
                setErrorTitleForUsername('Username cannot be blank');
                return;
            }

            const exists = await checkUsernameExists(val);
            console.log(val, exists);

            if (exists) {
                setErrorTitleForUsername(`Username ${val} is not available.`);
            } else {
                setErrorTitleForUsername('');
            }
        }, 500);
    }

    const [emailPreferences, setEmailPreferences] = useState(false);
    const handleEmailPreferencesChange = (e) => {
        const isChecked = e.target.checked;
        setEmailPreferences(isChecked);
        setFormData(prev => ({ ...prev, EmailPreferences: isChecked }));
    };


    const [params] = useSearchParams();
    useEffect(() => {
        const emailFromUrl = params.get("email");
        if (emailFromUrl) {
            const cleanedEmail = emailFromUrl.replace(/"/g, "");
            setEmail(cleanedEmail);
            setFormData(prev => ({
                ...prev,
                Email: cleanedEmail
            }));
        }
    }, [params]);


    // const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        try {
            const result = await registerUser(formData);

            if (result === true) {
                window.location.href = '/';
            } else {
                alert("Failed! Invalid credentials.");
            }
        } catch (error) {
            console.log("Registration error:", error);
        }
    };

    return (
        <div className={styles["right-side"]}>
            <header className={styles["right-side__header"]}>
                <span className={styles["right-side__span"]}>Already have an account?</span>
                <a href="/login" className={styles["right-side__link"]}> <span className={styles["right-side__text"]}>Sign in</span> <ArrowSymbolMktg /></a>
            </header>
            <div className={styles["right-side__content"]}>
                <main className={styles["right-side__main"]}>
                    <h2 className={styles["right-side__title"]}>Sign up to GitHub</h2>
                    <form className={styles["right-side__form"]} onSubmit={handleSubmit}>
                        <div className={styles["right-side__form-group"]}>
                            <Input
                                label={"Email"}
                                placeholder={"Enter your email or username"}
                                type={"email"}
                                msgErrorTitle={errorTitleForEmail}
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <Input
                                label={"Password"}
                                placeholder={"Enter your password"}
                                type={"password"}
                                msgErrorTitle={errorTitleForPassword}
                                note={"Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter."}
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <Input
                                label={"Username"}
                                placeholder={"Enter your username"}
                                type={"text"}
                                msgErrorTitle={errorTitleForUsername}
                                note={"Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen."}
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <InputSelect
                                label={"Your Country/Region"}
                                options={countries}
                                note={"For compliance reasons, we're required to collect country information to send you occasional updates and announcements."}
                            />
                            {/* 
                            <input
                                required 
                                id="country" 
                                className={styles["right-side__input"]} 
                                type="text" 
                                placeholder="Enter your country" 
                                value={formData.Country}
                                onChange={handleChange}
                                name="Country"
                            />
                            <p className={styles["right-side__note"]}>For compliance reasons, we're required to collect country information to send you occasional updates and announcements.</p> */}
                        </div>
                        <label htmlFor="email-preferences" className={styles["right-side__label"]}>Email preferences</label>
                        <div className={`${styles["right-side__form-group"]} ${styles["right-side__form-group--flex"]}`}>
                            {/* <Input
                                isRequired={false}
                                label={"Email preferences"}
                                placeholder={"Enter your username"}
                                type={"checkbox"}
                                value={username}
                                onChange={handleUsernameChange}
                            /> */}
                            <input 
                                id="email-preferences" 
                                className={styles["right-side__checkbox"]} 
                                type="checkbox" 
                                checked={emailPreferences}
                                onChange={handleEmailPreferencesChange}
                                name="EmailPreferences"
                            />
                            <span className={styles["right-side__checkbox-label"]}>Receive occasional product updates and announcements</span> 
                        </div>
                        <button type="submit" className={styles["btn"]}><span className={styles["btn__span"]}>Continue</span> <ArrowSymbolMktg /></button>
                    </form>
                </main>
                <footer className={styles.footer}>
                    <p className={styles["footer__text"]}>
                        By creating an account, you agree to the <a href="#" className={styles["footer__link"]}>Terms of Service</a> For more information about GitHub's privacy practices, see the <a href="#" className={styles["footer__link"]}>GitHub Privacy Statement</a> We'll occasionally send you account-related emails.
                    </p>
                </footer>
            </div>
        </div>
    );
}
