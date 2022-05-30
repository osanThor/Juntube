import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./module/youtube";
import client from "./lib/api/client";
import "@fortawesome/fontawesome-free/js/all.js";

const youtube = new Youtube(client);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
