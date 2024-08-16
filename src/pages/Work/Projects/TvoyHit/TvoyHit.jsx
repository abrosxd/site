import React from "react";
import { useTranslation } from "react-i18next";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./TvoyHit.css";

export default function TvoyHit() {
  const customStyleCode = {
    backgroundColor: "transparent",
    fontSize: "medium",
  };

  const { t: w } = useTranslation("Work");
  const { t: t } = useTranslation("Work/Projects/TvoyHit");

  return (
    <div className="case tvoy-hit">
      <div className="sticky-header">
        <div className="section">
          <h2>{w("stack")}</h2>
          <div className="icons">
            <img src="/assets/icons/stack/tilda.png" />
            <img src="/assets/icons/stack/html5.png" />
            <img src="/assets/icons/stack/css3.png" />
            <img src="/assets/icons/stack/js.png" />
          </div>
        </div>
        <div className="section">
          <h2>{w("time")}</h2>
          <p>{t("header.time")}</p>
        </div>
        <div className="section">
          <h2>{w("role")}</h2>
          <p>{t("header.role")}</p>
        </div>
      </div>
      <div className="footer">
        <p>{w("footer")}</p>
        <p>tvoy-hit.ru | google.com</p>
      </div>
    </div>
  );
}
