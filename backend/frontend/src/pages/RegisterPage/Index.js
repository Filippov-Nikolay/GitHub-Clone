import React from "react";
import { LeftSide } from "./components/LeftSide/LeftSide";
import { RightSide } from "./components/RightSide/RightSide";

import "./styles/main.css";

export default function Index() {
    return (
        <div className="content">
            <LeftSide />
            <RightSide />
        </div>
    )
}