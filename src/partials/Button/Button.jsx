import React, { useRef } from "react";
import "./Button.css";

const Button = ({
  as: Component = "a",
  className,
  href,
  to,
  text,
  children,
  onClick,
}) => {
  const buttonRef = useRef(null);

  return (
    <Component
      className={`button ${className}`}
      href={href}
      to={to}
      onClick={onClick}
      ref={buttonRef}
    >
      {children
        ? children
        : text.split("").map((letter, index) => (
            <span key={index} data-letter={letter === " " ? " " : letter}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
    </Component>
  );
};

export default Button;
