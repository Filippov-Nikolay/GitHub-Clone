import React, { useEffect } from "react";
import { Form } from "./components/form/Form";

import "./styles/main.css";

export default function Index() {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5179/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Response:', data); 
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container">
            <Form />
        </div>
    )
}