import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams} from 'react-router-dom';

import { ArrowSymbolMktg } from "../../../../shared/assets/svg/SvgComponents";
import { registerUser } from "../../services/Registration";
import styles from "./rightSide.module.css"


export function RightSide() {
    const [params] = useSearchParams();
    const [email, setEmail] = useState("");

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

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Email: "",
        UserName: "",
        Password: "",
        Country: "",
        EmailPreferences: false
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

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
                            <label htmlFor="email" className={styles["right-side__label"]}>Email</label>
                            <input 
                                id="email"
                                className={styles["right-side__input"]}
                                type="text"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                placeholder="Enter your email or username"
                                required
                            />
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <label htmlFor="password" className={styles["right-side__label"]}>Password</label>
                            <input 
                                id="password"
                                className={styles["right-side__input"]}
                                type="password"
                                name="Password"
                                value={formData.Password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                            <p className={styles["right-side__note"]}>Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <label htmlFor="username" className={styles["right-side__label"]}>Username</label>
                            <input 
                                id="username" 
                                className={styles["right-side__input"]}
                                type="text"  
                                placeholder="Enter your username" 
                                value={formData.UserName}
                                onChange={handleChange}
                                name="UserName"
                                required 
                            />
                            <p className={styles["right-side__note"]}>Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</p>
                        </div>
                        <div className={styles["right-side__form-group"]}>
                            <label htmlFor="country" className={styles["right-side__label"]}>Your country</label>
                            <input 
                                id="country" 
                                className={styles["right-side__input"]} 
                                type="text" 
                                placeholder="Enter your country" 
                                value={formData.Country}
                                onChange={handleChange}
                                name="Country"
                                required 
                            />
                            <p className={styles["right-side__note"]}>For compliance reasons, we're required to collect country information to send you occasional updates and announcements.</p>
                        </div>

                        <label htmlFor="email-preferences" className={styles["right-side__label"]}>Email preferences</label>
                        <div className={`${styles["right-side__form-group"]} ${styles["right-side__form-group--flex"]}`}>
                            <input 
                                id="email-preferences" 
                                className={styles["right-side__checkbox"]} 
                                type="checkbox" 
                                checked={formData.EmailPreferences}
                                onChange={handleChange}
                                name="EmailPreferences"
                            />
                            <span className={styles["right-side__checkbox-label"]}>Receive occasional product updates and announcements</span>
                        </div>
                        <button type="submit" className={styles["btn"]}> <span className={styles["btn__span"]}>Continue</span> <ArrowSymbolMktg /></button>
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