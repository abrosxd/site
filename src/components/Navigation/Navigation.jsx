import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

import useGlyphAnimation from "../../utils/GlyphAnimation";

import Button from "../../partials/Button/Button";

import LangSVG from "./assets/lang.svg";
import EnSVG from "./assets/language/en.svg";
import RuSVG from "./assets/language/ru.svg";
import PlSVG from "./assets/language/pl.svg";

export default function Navigation() {
  useGlyphAnimation();

  const { t, i18n } = useTranslation("Menu");
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);

  const langMenuRef = useRef(null);
  const location = useLocation();

  const toggleLangMenu = () => {
    setLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;
  const isCurrentLanguage = (lang) => i18n.language === lang;

  return (
    <nav>
      <ul className="menu">
        <li>
          <Button
            className={`glyph ${isActive("/") ? "active" : ""}`}
            as={Link}
            to="/"
            text={t("home")}
          />
        </li>
        <li>
          <Button
            className={`glyph ${isActive("/work") ? "active" : ""}`}
            as={Link}
            to="/work"
            text={t("work")}
          />
        </li>
        <li>
          <Button
            className={`glyph ${isActive("/about") ? "active" : ""}`}
            as={Link}
            to="/about"
            text={t("about")}
          />
        </li>
      </ul>

      <ul className="lang">
        <li className="section up" ref={langMenuRef}>
          <Button onClick={toggleLangMenu}>
            <img className="nav-icon" src={LangSVG} alt="Lang Icon" />
          </Button>
          <ul className={`submenu lang-sub ${isLangMenuOpen ? "active" : ""}`}>
            <li>
              <Button
                className={isCurrentLanguage("en") ? "active" : ""}
                onClick={() => changeLanguage("en")}
              >
                <img className="nav-icon" src={EnSVG} alt="English" />
              </Button>
            </li>
            <li>
              <Button
                className={isCurrentLanguage("ru") ? "active" : ""}
                onClick={() => changeLanguage("ru")}
              >
                <img className="nav-icon" src={RuSVG} alt="Русский" />
              </Button>
            </li>
            <li>
              <Button
                className={isCurrentLanguage("pl") ? "active" : ""}
                onClick={() => changeLanguage("pl")}
              >
                <img className="nav-icon" src={PlSVG} alt="Polski" />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
