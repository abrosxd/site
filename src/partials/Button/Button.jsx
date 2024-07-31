import React from "react";
import "./Button.css";

export default function Button({
  as: Component = "a",
  className,
  href,
  to,
  text,
  children,
  onClick,
  target,
}) {
  return (
    <Component
      className={`button glyph ${className}`}
      href={href}
      to={to}
      onClick={onClick}
      target={target}
    >
      {children ? children : text}
    </Component>
  );
}
