import React from "react";
import dosAmigos from "../../assets/img/dos-amigos.jpg";

export function LeftSide() {
    return (
        <div className="left-side">
            <div className="left-side__content">
                <h1 className="left-side__title">Create your free account</h1>
                <p className="left-side__text">Explore GitHub's core features for individuals and organizations.</p>
                <img src={dosAmigos} alt="" className="left-side__img" />
            </div>
        </div>
    );
}