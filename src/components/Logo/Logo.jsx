import React, { useEffect, useRef } from "react";
import "./Logo.css";

export default function Logo() {
  const logoRef = useRef(null);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function setRandomColor() {
    const newColor = getRandomColor();
    if (logoRef.current) {
      logoRef.current.style.backgroundColor = `${newColor}80`;
    }
  }

  function updateColor() {
    if (logoRef.current) {
      logoRef.current.classList.add("color-transition");
      setRandomColor();
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.classList.remove("color-transition");
        }
      }, 1000);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(updateColor, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="logo" ref={logoRef}>
      ABROS
    </h1>
  );
}
