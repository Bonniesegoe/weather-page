import React from "react";
import ReactDom from "react_dom";
import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

ReactDom.render(<App />, document.getElementById("root"));




serviceWorker.unregistered();