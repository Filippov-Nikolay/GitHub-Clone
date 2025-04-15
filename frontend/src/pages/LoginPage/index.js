import React from "react";
<<<<<<< HEAD

import { SignIn } from "./components/SignIn/SignIn";
import { Footer } from "./components/Footer/Footer";
=======
import { Form } from "./components/Form/Form.js";
import { Footer } from "./components/Footer/Footer.js";
>>>>>>> ad35cfa37e2602f5f4db8d993f843252d5c64b39

import "./styles/main.css";

export default function Index() {
    return (
        <div className="container">
            <SignIn />
            <Footer />
        </div>
    )
}