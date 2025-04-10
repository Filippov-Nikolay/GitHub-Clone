import React from "react";
import dosAmigos from "../../assets/img/dos-amigos.jpg";
import styles from "./leftSide.module.css";

export function LeftSide() {
    return (
        <div className={styles["left-side"]}>
            <div className={styles["left-side__content"]}>
                <h1 className={styles["left-side__title"]}>Create your free account</h1>
                <p className={styles["left-side__text"]}>Explore GitHub's core features for individuals and organizations.</p>
                <img src={dosAmigos} alt="" className={styles["left-side__img"]} />
            </div>
        </div>
    );
}