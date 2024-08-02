import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ name, img, overlay, light, category, url }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        const { clientX, clientY } = event;
        const cardRect = card.getBoundingClientRect();
        const cardX = cardRect.left + cardRect.width / 2;
        const cardY = cardRect.top + cardRect.height / 2;

        const deltaX = clientX - cardX;
        const deltaY = clientY - cardY;

        const tiltX = deltaX / 20;
        const tiltY = deltaY / 20;

        card.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
      });
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(() => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    };

    const handleTouchStart = () => {
      card.classList.add("mobcenter");
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        card.classList.remove("mobcenter");
      }, 500);
    };

    if (!("ontouchstart" in window)) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
    } else {
      card.addEventListener("touchstart", handleTouchStart);
      card.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (!("ontouchstart" in window)) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      } else {
        card.removeEventListener("touchstart", handleTouchStart);
        card.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      className="project"
      data-category={category.join(", ")}
      style={{
        backgroundImage: `url(${img})`,
        boxShadow: `${light} 0px 0px 10px`,
      }}
      to={`/work/${url}`}
    >
      <h1 className="title">{name}</h1>
      <div
        className="overlay"
        style={{ backgroundImage: `url(${overlay})` }}
      ></div>
    </Link>
  );
}
