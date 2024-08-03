import React from "react";
import "./Window.css";

export default function Window({ title, img }) {
  return (
    <div className="window-apple">
      <div className="border">
        <div className="butmin"></div>
        <div className="butmin"></div>
        <div className="butmin"></div>
        <p className="title">{title}</p>
      </div>
      <div className="content">
        <img className="img" src={img} />
      </div>
    </div>
  );
}
