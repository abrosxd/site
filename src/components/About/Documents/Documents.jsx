import React from "react";
import "./Documents.css";
import DocSVG from "../../../assets/icons/document.svg";

export default function Documents() {
  const data = [
    {
      title: "ABROS",
      en: "/public/assets/about/documents/test.md",
      ru: " ",
      pl: " ",
    },
  ];

  return (
    <div className="documents-container">
      {data.map((material, index) => (
        <div key={index} className="document">
          <div className="doc-head">
            <img src={DocSVG} alt="Document icon" />
            <span>{material.title}</span>
          </div>
          <div className="doc-url">
            <a
              className="doc-en"
              href={material.en}
              target="_blank"
              style={
                material.en.trim() === ""
                  ? { color: "#acacac", pointerEvents: "none" }
                  : {}
              }
            >
              EN
            </a>
            <a
              className="doc-ru"
              href={material.ru}
              target="_blank"
              style={
                material.ru.trim() === ""
                  ? { color: "#acacac", pointerEvents: "none" }
                  : {}
              }
            >
              RU
            </a>
            <a
              className="doc-pl"
              href={material.pl}
              target="_blank"
              style={
                material.pl.trim() === ""
                  ? { color: "#acacac", pointerEvents: "none" }
                  : {}
              }
            >
              PL
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
