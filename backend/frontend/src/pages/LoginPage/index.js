import React from "react";

import { SignIn } from "./components/SignIn/SignIn";
import { Footer } from "./components/Footer/Footer";

import "./styles/main.css";

export default function Index() {
    return (
        <div className="container">
            <SignIn />
            <Footer />
        </div>
    )
}