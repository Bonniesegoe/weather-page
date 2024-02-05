import React from "react";

import "./App.css";

export default function App() {
    return (
        <div className="App">
         <h1>Weather Page</h1>
         <button className="btn">Hello</button>
         <footer>
            This project was coded by {" "}
            <a href="https://www.shecodes.io/graduates/109415-bonolo-segoe" target="_blank">
                Bonolo Segoe
            </a>{" "}
            and is {" "}
            <a href="https://github.com/Bonniesegoe/weather-page"
               target="_blank"
               >
                open-sourced on github
               </a>
         </footer>
         </div>

    );
}

