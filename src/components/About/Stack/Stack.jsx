import React from "react";
import "./Stack.css";

export default function Stack() {
  const data = [
    {
      title: "VS Code",
      img: "/assets/icons/stack/vs-code.jpg",
      color: "#2532eb",
      bgcolor: "#ffffff80",
    },
    {
      title: "HTML",
      img: "/assets/icons/stack/html5.png",
      color: "#ffffff",
      bgcolor: "#ff590080",
    },
    {
      title: "CSS",
      img: "/assets/icons/stack/css3.png",
      color: "#ffffff",
      bgcolor: "#0015ff80",
    },
    {
      title: "JavaScript",
      img: "/assets/icons/stack/js.png",
      color: "#000000",
      bgcolor: "#f6ff0080",
    },
    {
      title: "React",
      img: "/assets/icons/stack/react.png",
      color: "#61dbfc",
      bgcolor: "#00000080",
    },
    {
      title: "GSAP",
      img: "/assets/icons/stack/gsap.png",
      color: "#93d400",
      bgcolor: "#00000080",
    },
    {
      title: "Node.js",
      img: "/assets/icons/stack/node-js.svg",
      color: "#000000",
      bgcolor: "#ffffff80",
    },
    {
      title: "Figma",
      img: "/assets/icons/stack/figma.png",
      color: "#25eb8f",
      bgcolor: "#00000080",
    },
    {
      title: "WordPress",
      img: "/assets/icons/stack/wordoress.png",
      color: "#3e3e3e",
      bgcolor: "#ffffff80",
    },
    {
      title: "Webflow",
      img: "/assets/icons/stack/webflow.png",
      color: "#403dfd",
      bgcolor: "#ffffff80",
    },
    {
      title: "Tilda",
      img: "/assets/icons/stack/tilda.png",
      color: "#000000",
      bgcolor: "#ffb20080",
    },
    {
      title: "Airtable",
      img: "/assets/icons/stack/airtable.svg",
      color: "#000000",
      bgcolor: "#ffffff80",
    },
    {
      title: "NocoDB",
      img: "/assets/icons/stack/nocodb.png",
      color: "#ffffff",
      bgcolor: "#0015ff80",
    },
  ];

  return (
    <div className="stack-container">
      {data.map((stack, index) => (
        <div
          key={index}
          className="tag"
          style={{ backgroundColor: stack.bgcolor, color: stack.color }}
        >
          <img src={stack.img} alt={stack.title} />
          <span>{stack.title}</span>
        </div>
      ))}
    </div>
  );
}
