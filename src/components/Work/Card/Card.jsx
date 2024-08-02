import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div
      className="project"
      id="5"
      data-category="TildaMod"
      style='background-image: url("/public/projects/Tilda/Player/avatar.png"); box-shadow: rgb(126, 112, 255) 0px 0px 10px; display: block; transform: rotateX(-11.25deg) rotateY(18.5deg);'
    >
      <div
        class="overlay"
        style='background-image: url("/public/projects/Tilda/Player/overlay.png");'
      ></div>
    </div>
  );
}
