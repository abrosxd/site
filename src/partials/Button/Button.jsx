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
  ...props
}) => {
  const buttonRef = useRef(null);
  const classes = className ? `button ${className}` : "button";

  return (
    <Component
      className={classes}
      href={href}
      to={to}
      onClick={onClick}
      ref={buttonRef}
      {...props}
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
