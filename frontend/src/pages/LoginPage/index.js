import React, { useEffect } from "react";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import { fetchUsers } from "./services/Users";

import "./styles/main.css";

export default function Index() {
    useEffect(() => {
        const fetchData = async () => {
            let users = await fetchUsers();

            console.log(users);
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <Form />
            <Footer />
        </div>
    )
}