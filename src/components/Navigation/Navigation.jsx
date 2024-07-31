import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "../../partials/Button/Button";

import LinkSVG from "../../assets/icons/link.svg";
import TelegramSVG from "../../assets/icons/social/telegram.svg";
import VkSVG from "../../assets/icons/social/vk.svg";
import InstagramSVG from "../../assets/icons/social/instagram.svg";

import LangSVG from "../../assets/icons/lang.svg";
import EnSVG from "../../assets/icons/language/en.svg";
import RuSVG from "../../assets/icons/language/ru.svg";
import PlSVG from "../../assets/icons/language/pl.svg";

export default function Navigation() {
  const [isLinksMenuOpen, setLinksMenuOpen] = useState(false);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);

  const linksMenuRef = useRef(null);
  const langMenuRef = useRef(null);

  const toggleLinksMenu = () => {
    setLinksMenuOpen(!isLinksMenuOpen);
  };

  const toggleLangMenu = () => {
    setLangMenuOpen(!isLangMenuOpen);
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

  return (
    <nav>
      <ul className="menu">
        <li className="section">
          <Button className="glyph" as={Link} to="/" text="Главная" />
        </li>
        <li className="section">
          <Button className="glyph" as={Link} to="/work" text="Работы" />
        </li>
        <li className="section">
          <Button className="glyph" as={Link} to="/about" text="Обо мне" />
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
              <Button>
                <img className="nav-icon" src={EnSVG} alt="English" />
              </Button>
            </li>
            <li>
              <Button>
                <img className="nav-icon" src={RuSVG} alt="Русский" />
              </Button>
            </li>
            <li>
              <Button>
                <img className="nav-icon" src={PlSVG} alt="Polski" />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
