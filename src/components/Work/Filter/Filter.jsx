import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Filter.css";

import Button from "../../../partials/Button/Button";

export default function Filter({ activeCategory, setActiveCategory }) {
  const { t } = useTranslation("Filter");

  const [isFilterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    setFilterOpen(false);
  };

  return (
    <div className="filter" ref={filterRef}>
      <Button onClick={toggleFilter}>
        <span className="text">{t(activeCategory.toLowerCase())}</span>
        <span className={`arrow ${isFilterOpen ? "active" : ""}`}></span>
      </Button>
      <ul className={`submenu filter-wrap ${isFilterOpen ? "active" : ""}`}>
        <li
          className="filter-section"
          data-category="All"
          onClick={() => handleFilterClick("All")}
        >
          {t("all")}
        </li>
        <li
          className="filter-section"
          data-category="Layout"
          onClick={() => handleFilterClick("Layout")}
        >
          {t("layout")}
        </li>
        <li
          className="filter-section"
          data-category="Library"
          onClick={() => handleFilterClick("Library")}
        >
          {t("library")}
        </li>
        <li
          className="filter-section"
          data-category="Design"
          onClick={() => handleFilterClick("Design")}
        >
          {t("design")}
        </li>
        <li
          className="filter-section"
          data-category="Tilda"
          onClick={() => handleFilterClick("Tilda")}
        >
          {t("tilda")}
        </li>
      </ul>
    </div>
  );
}
