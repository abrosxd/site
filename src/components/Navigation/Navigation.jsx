import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

import useGlyphAnimation from "../../utils/GlyphAnimation";

import Button from "../../partials/Button/Button";

import LinkSVG from "./assets/link.svg";
import TelegramSVG from "./assets/social/telegram.svg";
import VkSVG from "./assets/social/vk.svg";
import InstagramSVG from "./assets/social/instagram.svg";

import LangSVG from "./assets/lang.svg";
import EnSVG from "./assets/language/en.svg";
import RuSVG from "./assets/language/ru.svg";
import PlSVG from "./assets/language/pl.svg";

export default function Navigation() {
  useGlyphAnimation();

  const { t, i18n } = useTranslation("Menu");
  const [isLinksMenuOpen, setLinksMenuOpen] = useState(false);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);

  const linksMenuRef = useRef(null);
  const langMenuRef = useRef(null);
  const location = useLocation();

  const toggleLinksMenu = () => {
    setLinksMenuOpen(!isLinksMenuOpen);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!isLangMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        linksMenuRef.current &&
        !linksMenuRef.current.contains(event.target)
      ) {
        setLinksMenuOpen(false);
      }
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
            className={`glyph ${isActive("/lib") ? "active" : ""}`}
            as={Link}
            to="/lib"
            text={t("library")}
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

      <ul className="links">
        <li className="section down" ref={linksMenuRef}>
          <Button onClick={toggleLinksMenu}>
            <img className="nav-icon" src={LinkSVG} alt="Link Icon" />
          </Button>
          <ul className={`submenu ${isLinksMenuOpen ? "active" : ""}`}>
            <li>
              <Button
                className=""
                as="a"
                href="https://t.me/abrosxd"
                target="_blank"
              >
                <img className="nav-icon" src={TelegramSVG} alt="Telegram" />
              </Button>
            </li>
            <li>
              <Button
                className=""
                as="a"
                href="https://vk.com/abrosxd"
                target="_blank"
              >
                <img className="nav-icon" src={VkSVG} alt="VK" />
              </Button>
            </li>
            <li>
              <Button
                className=""
                as="a"
                href="https://www.instagram.com/abrosxd"
                target="_blank"
              >
                <img className="nav-icon" src={InstagramSVG} alt="Instagram" />
              </Button>
            </li>
          </ul>
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
