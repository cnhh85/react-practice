import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Timer from "./components/timer";
function App() {
  ReactDOM.render(
    <React.StrictMode>
      <div className="App">
        <div className="container">
          <div className="title">
            <h1>COUNTDOWN</h1>
            <h3>The F-Code event on Tue, May 15, 2021</h3>
          </div>
          <Timer />
        </div>
      </div>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

setInterval(App, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
