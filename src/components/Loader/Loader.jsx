import React, { useEffect } from "react";
import "./Loader.css";

export default function Loader({ setLoading }) {
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [setLoading]);

  return (
    <div className="loader">
      <div className="icon">
        <div className="Z aa"></div>
        <div className="Z ac"></div>
        <div className="Z af"></div>
        <div className="Z ah"></div>
        <div className="Z aj"></div>
        <div className="Z al"></div>
        <div className="Z an"></div>
        <div className="Z ap"></div>
        <div className="Z ar"></div>
        <div className="Z at"></div>
        <div className="Z av"></div>
        <div className="Z ax"></div>
        <div className="Z az"></div>
        <div className="Z aB"></div>
        <div className="Z aE"></div>
        <div className="Z aG"></div>
        <div className="Z aI"></div>
        <div className="Z aK"></div>
      </div>
    </div>
  );
}
