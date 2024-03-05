import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";
import "./index.css";
import { IntlProviderWrapper } from "./util/context/Internationalization";

/**
 * Root element to render the React application.
 * Uses ReactDOM.createRoot for concurrent mode rendering.
 * Renders the App component within React.StrictMode.
 *
 * @constant {HTMLElement} root - Root element to mount the React application.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Render the React application within React.StrictMode.
 */
root.render(
  <React.StrictMode>
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  </React.StrictMode>
);
