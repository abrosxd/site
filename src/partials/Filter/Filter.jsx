import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Filter.css";
import Button from "../Button/Button";
import ArrowSVG from "./assets/arrow.svg";

export default function Filter({
  categories,
  activeCategory,
  setActiveCategory,
  translations,
}) {
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
        <span className="text">{translations[activeCategory]}</span>
        <img
          className={`arrow ${isFilterOpen ? "active" : ""}`}
          src={ArrowSVG}
        />
      </Button>
      <ul className={`submenu filter-wrap ${isFilterOpen ? "active" : ""}`}>
        {categories.map((category) => (
          <li
            key={category}
            className="filter-section"
            data-category={category}
            onClick={() => handleFilterClick(category)}
          >
            {translations[category]}
          </li>
        ))}
      </ul>
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
};
