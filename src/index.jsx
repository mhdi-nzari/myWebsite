import React from "react";
import { createRoot } from "react-dom/client";

import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "@/Components/ScrollToTop";

import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <App />
    <ScrollToTop />
  </Router>
);
registerServiceWorker();

// reportWebVitals();
