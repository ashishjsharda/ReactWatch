import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <h1> Date today is {new Date().toLocaleTimeString()} </h1>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
setInterval(tick, 1000);
