import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Leeds" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/zoeelizabethblogg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoë Blogg
          </a>
          <br />
          Find it open-sourced on{" "}
          <a
            href="https://github.com/ZoCodes/weatherapp-react-basicversion"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://zocodes-react-basicweatherapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
