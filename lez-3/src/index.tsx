import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);
root.render(<App title="This is an awesome React App" />);