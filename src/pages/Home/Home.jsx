import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import "./Home.css";
import Transition from "../../components/Transition/Transition";

import Laptop from "../../components/Home/Laptop/Laptop";
import Welcome from "../../components/Home/Welcome/Welcome";
import Window from "../../components/Home/Window/Window";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const isMobile = () => window.innerWidth <= 860;
  const { t } = useTranslation("Home");

  const skills = [
    {
      title: "Three.js | 3D",
      img: "/assets/skills/three-js.gif",
    },
    {
      title: "JavaScript",
      img: "/assets/skills/javascript.gif",
    },
    {
      title: "GSAP",
      img: "/assets/skills/gsap.gif",
    },
    {
      title: "Figma",
      img: "/assets/skills/figma.gif",
    },
    {
      title: "Tilda Code",
      img: "/assets/skills/tilda-code.gif",
    },
    {
      title: "CDN APP MOD",
      img: "/assets/skills/cdn-app-mod.gif",
    },
    {
      title: "Library Create",
      img: "/assets/skills/js-library.gif",
    },
    {
      title: "Custom Tilda",
      img: "/assets/skills/tilda-custom.gif",
    },
  ];

  useEffect(() => {
    const scrollLaptop = {
      trigger: ".animate-trigger-laptop",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      // scroller: "[data-scroll-container]",
    };

    console.log("Initializing animations...");

    // Анимация для иконок
    gsap.to([".scroll-icon", ".swipe-icon"], {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%": { opacity: "0.5" },
        "5%": { opacity: "0" },
      },
    });

    // Анимация для прыжка ноутбука
    gsap.to(".laptop", {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%": { y: "0" },
        "10%": { y: "-30vmin" },
        "30%": { y: "-30vmin" },
        "50%": { y: "0" },
        "100%": { y: "15vmin" },
      },
    });

    // Анимация для вращения ноутбука
    gsap.to(".laptop", {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%": { rotateZ: "0" },
        "10%": { rotateZ: "-90deg" },
        "100%": { rotateZ: "-392deg" },
      },
    });

    // Анимация для переворота ноутбука
    gsap.to(".laptop", {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%, 10%": { rotateX: "0deg" },
        "80%, 100%": { rotateX: "360deg" },
      },
    });

    // Анимация открытия верхней крышки ноутбука
    gsap.to(".laptop .shell--top", {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%, 40%": { rotateX: "0deg" },
        "50%": { rotateX: "120deg" },
        "75%, 100%": { rotateX: "90deg" },
      },
    });

    // Анимация открытия нижней крышки ноутбука
    gsap.to(".laptop .shell--bottom", {
      scrollTrigger: scrollLaptop,
      keyframes: {
        "0%, 45%": { rotateX: "0deg" },
        "65%": { rotateX: "50deg" },
        "100%": { rotateX: "0deg" },
      },
    });

    // Анимация для увеличения сцены
    gsap.to(".laptop", {
      scrollTrigger: scrollLaptop,
      keyframes: isMobile()
        ? {
            "80%": { scale: 1 },
            "100%": { scale: 12 },
          }
        : {
            "80%": { scale: 1 },
            "100%": { scale: 9 },
          },
    });

    // Анимация для выключения экрана
    gsap.to(".light-effect", {
      scrollTrigger: scrollLaptop,
      keyframes: isMobile()
        ? {
            "95%": {
              height: "100%",
              width: "100%",
              visibility: "hidden",
            },
            "97%": {
              height: "1px",
              width: "100%",
              visibility: "visible",
            },
            "99.99%": {
              height: "1px",
            },
            "100%": {
              height: 0,
              width: 0,
            },
          }
        : {
            "90%": {
              height: "100%",
              width: "100%",
              visibility: "hidden",
            },
            "95%": {
              height: "1px",
              width: "100%",
              visibility: "visible",
            },
            "99.99%": {
              height: "1px",
            },
            "100%": {
              height: 0,
              width: 0,
            },
          },
    });

    // Анимация перехода
    gsap.to(".laptop", {
      scrollTrigger: scrollLaptop,
      keyframes: isMobile()
        ? {
            "95%": {
              visibility: "visible",
            },
            "100%": {
              visibility: "hidden",
            },
          }
        : {
            "90%": {
              visibility: "visible",
            },
            "100%": {
              visibility: "hidden",
            },
          },
    });
  }, []);

  return (
    <>
      <Laptop />
      <div data-scroll-container>
        <div className="animate-trigger-laptop">
          <Welcome />
          <div className="block-skills">
            <div className="grid">
              {skills.map((skill, index) => (
                <Window key={index} title={skill.title} img={skill.img} />
              ))}
            </div>
          </div>
        </div>
        <div className="block-clients">
          <div className="gallery slick-carousel"></div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
