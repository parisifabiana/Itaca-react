import React from "react";
import "./app.css";

export function App({ title }) {
    return <div className="container">
        <h1>{title}</h1>
        <input placeholeder="username" />
    </div>
};