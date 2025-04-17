import React from "react";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";

import "./styles/main.css";

export default function Index() {
    return (
        <div className="container">
            <Form />
            <Footer />
        </div>
    )
}