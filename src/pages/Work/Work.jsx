import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Work.css";
import Transition from "../../components/Transition/Transition";
import Filter from "../../components/Work/Filter/Filter";
import Card from "../../components/Work/Card/Card";

const Work = () => {
  const { t } = useTranslation("Work");
  const [activeCategory, setActiveCategory] = useState("All");
  const projects = [
    {
      name: "Tilda Player",
      img: "../../../public/assets/work/projects/Tilda/Player/avatar.png",
      overlay: "../../../public/assets/work/projects/Tilda/Player/overlay.png",
      light: "#7e70ff",
      category: ["Tilda"],
      url: "TildaPlayer",
    },
    {
      name: "Abros Noti",
      img: "../../../public/assets/work/projects/Noti/avatar.png",
      overlay: "../../../public/assets/work/projects/Noti/overlay.png",
      light: "#00aee1",
      category: ["MyProject", "Library"],
      url: "AbrosNoti",
    },
    {
      name: "Lampa Abros",
      img: "../../../public/assets/work/projects/Lampa/avatar.png",
      overlay: "../../../public/assets/work/projects/Lampa/overlay.png",
      light: "#ffffff",
      category: ["CDN", "Design"],
      url: "lampa",
    },
    {
      name: "VADI",
      img: "../../../public/assets/work/projects/VADI/avatar.png",
      overlay: "../../../public/assets/work/projects/VADI/overlay.png",
      light: "#006CFF",
      category: ["Design"],
      url: "VADI",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category.includes(activeCategory)
  );

  return (
    <main>
      <Filter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="work-container">
        {filteredProjects.map((project) => (
          <Card
            key={project.url}
            name={project.name}
            img={project.img}
            overlay={project.overlay}
            light={project.light}
            category={project.category}
            url={project.url}
          />
        ))}
      </div>
    </main>
  );
};

export default Transition(Work);
