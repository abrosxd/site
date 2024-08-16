import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Library.css";
import Transition from "../../components/Transition/Transition";
import Filter from "../../partials/Filter/Filter";

import Unlock from "../../components/Unlock/Unlock";

const Library = () => {
  // const { t } = useTranslation("Work");
  // const [activeCategory, setActiveCategory] = useState("All");

  // const categories = useMemo(
  //   () => ["All", "Layout", "Library", "Design", "Tilda"],
  //   []
  // );
  // const translations = useMemo(
  //   () => ({
  //     All: t("Filter.all"),
  //     Layout: t("Filter.layout"),
  //     Library: t("Filter.library"),
  //     Design: t("Filter.design"),
  //     Tilda: t("Filter.tilda"),
  //   }),
  //   [t]
  // );

  // const projects = useMemo(
  //   () => [
  //     {
  //       name: "Tilda Player",
  //       img: "/assets/projects/Tilda/Player/avatar.png",
  //       overlay: "/assets/projects/Tilda/Player/overlay.png",
  //       light: "#7e70ff",
  //       category: ["Tilda"],
  //       url: "TildaPlayer",
  //     },
  //     {
  //       name: "Abros Noti",
  //       img: "/assets/projects/Noti/avatar.png",
  //       overlay: "/assets/projects/Noti/overlay.png",
  //       light: "#00aee1",
  //       category: ["MyProject", "Library"],
  //       url: "AbrosNoti",
  //     },
  //     {
  //       name: "Lampa Abros",
  //       img: "/assets/projects/Lampa/avatar.png",
  //       overlay: "/assets/projects/Lampa/overlay.png",
  //       light: "#ffffff",
  //       category: ["CDN", "Design"],
  //       url: "lampa",
  //     },
  //     {
  //       name: "VADI",
  //       img: "/assets/projects/VADI/avatar.png",
  //       overlay: "/assets/projects/VADI/overlay.png",
  //       light: "#006CFF",
  //       category: ["Design"],
  //       url: "VADI",
  //     },
  //   ],
  //   []
  // );

  // const filteredProjects = useMemo(
  //   () =>
  //     projects.filter(
  //       (project) =>
  //         activeCategory === "All" || project.category.includes(activeCategory)
  //     ),
  //   [activeCategory, projects]
  // );

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     requestAnimationFrame(() => {
  //       const { clientX, clientY } = event;
  //       const cards = document.querySelectorAll(".project");

  //       cards.forEach((card) => {
  //         const cardRect = card.getBoundingClientRect();
  //         const cardX = cardRect.left + cardRect.width / 2;
  //         const cardY = cardRect.top + cardRect.height / 2;

  //         const deltaX = clientX - cardX;
  //         const deltaY = clientY - cardY;

  //         const tiltX = deltaX / 20;
  //         const tiltY = deltaY / 20;

  //         card.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
  //       });
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     requestAnimationFrame(() => {
  //       const cards = document.querySelectorAll(".project");
  //       cards.forEach((card) => {
  //         card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //       });
  //     });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  // const ProjectCard = ({ name, img, overlay, light, category, url }) => (
  //   <Link
  //     className="project"
  //     data-category={category.join(", ")}
  //     style={{
  //       backgroundImage: `url(${img})`,
  //       boxShadow: `${light} 0px 0px 10px`,
  //     }}
  //     to={`/lib/${url}`}
  //   >
  //     <h1 className="title">{name}</h1>
  //     <div
  //       className="overlay"
  //       style={{ backgroundImage: `url(${overlay})` }}
  //     ></div>
  //   </Link>
  // );

  return (
    <main className="lib">
      {/* <Filter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        translations={translations}
      />
      <div className="work-container">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div> */}
      <Unlock deadline="05 11 2024 20:20:20 UTC+1" />
    </main>
  );
};

export default Transition(Library);
