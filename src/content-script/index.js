console.log("Content script loaded");

import React from "react";
import ReactDOM from "react-dom";
import ContentApp from "./ContentApp.jsx";

const root = document.createElement("div");
root.id = "content-root";
document.body.appendChild(root);

ReactDOM.render(<ContentApp />, root);
