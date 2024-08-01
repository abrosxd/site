import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

import { BrowserRouter as Router } from "react-router-dom";

const Root = () => {
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);

    i18n.on("languageChanged", (lng) => {
      document.documentElement.setAttribute("lang", lng);
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
