import React from "react";
import "./Stack.css";

export default function Stack() {
  const data = [
    {
      title: "VS Code",
      img: "https://yt3.googleusercontent.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
      color: "#2532eb",
      bgcolor: "#ffffff80",
    },
    {
      title: "HTML",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
      color: "#ffffff",
      bgcolor: "#ff590080",
    },
    {
      title: "CSS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CCSS3_logo.svg.png",
      color: "#ffffff",
      bgcolor: "#0015ff80",
    },
    {
      title: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      color: "#000000",
      bgcolor: "#f6ff0080",
    },
    {
      title: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      color: "#61dbfc",
      bgcolor: "#00000080",
    },
    {
      title: "GSAP",
      img: "https://gsap.com/community/uploads/monthly_2020_03/tweenmax.thumb.png.c849c5b56c6752e3f2276b82ee702625.png",
      color: "#93d400",
      bgcolor: "#00000080",
    },
    {
      title: "Node.js",
      img: "https://nodejs.org/static/logos/jsIconGreen.svg",
      color: "#000000",
      bgcolor: "#ffffff80",
    },
    {
      title: "Figma",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      color: "#25eb8f",
      bgcolor: "#00000080",
    },
    {
      title: "WordPress",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png",
      color: "#3e3e3e",
      bgcolor: "#ffffff80",
    },
    {
      title: "Webflow",
      img: "https://dailybrand.co.zw/wp-content/uploads/2023/10/webflow-2.png",
      color: "#403dfd",
      bgcolor: "#ffffff80",
    },
    {
      title: "Tilda",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png",
      color: "#000000",
      bgcolor: "#ffb20080",
    },
    {
      title: "Airtable",
      img: "https://www.svgrepo.com/show/353383/airtable.svg",
      color: "#000000",
      bgcolor: "#ffffff80",
    },
    {
      title: "NocoDB",
      img: "https://avatars.githubusercontent.com/u/50206778?s=280&v=4",
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
