import React, { useState, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";
import Transition from "../../components/Transition/Transition";

const Home = () => {
  const letters = useMemo(
    () => ({
      A: ["A", "a", "₳", "α", "@", "Ⱥ", "Ꭿ", "凡", "Ꮨ", "Λ"],
      B: ["B", "b", "β", "฿", "ß", "Ђ", "Ᏸ", "ᗽ", "方"],
      R: ["R", "r", "ჩ", "尺", "ᖇ", "Ꮢ"],
      O: ["O", "o", "Ø", "Θ"],
      S: ["S", "s", "§", "∫", "$", "ֆ", "Տ"],
    }),
    []
  );

  const getRandomLetter = (letter) => {
    const possibleLetters = letters[letter];
    return possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
  };

  const generateWord = () => {
    return ["A", "B", "R", "O", "S"]
      .map((letter) => getRandomLetter(letter))
      .join("");
  };

  const [words, setWords] = useState(() =>
    Array.from({ length: 1000 }, generateWord)
  );

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const homeRef = useRef(null);
  const marqueeRefs = useRef([]);

  useEffect(() => {
    let animationFrameId;
    let lastUpdateTime = 0;
    const delay = 100;

    const updateWords = (time) => {
      if (time - lastUpdateTime > delay) {
        setWords((prevWords) =>
          prevWords.map((word, index) => {
            if (index % 10 === 0) {
              const newWord = word
                .split("")
                .map((char, i) => {
                  const letterKey = ["A", "B", "R", "O", "S"][i];
                  return Math.random() < 0.2
                    ? getRandomLetter(letterKey)
                    : char;
                })
                .join("");
              return newWord;
            }
            return word;
          })
        );
        lastUpdateTime = time;
      }
      animationFrameId = requestAnimationFrame(updateWords);
    };
    animationFrameId = requestAnimationFrame(updateWords);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xTilt = -(clientX / window.innerWidth - 0.5) * 20;
      const yTilt = (clientY / window.innerHeight - 0.5) * 20;

      const xTranslate = (clientX / window.innerWidth - 0.5) * 10;
      const yTranslate = (clientY / window.innerHeight - 0.5) * 10;

      setTilt({ x: xTilt, y: yTilt });
      setTranslate({ x: xTranslate, y: yTranslate });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setTranslate({ x: 0, y: 0 });
    };

    const homeElement = homeRef.current;
    homeElement.addEventListener("mousemove", handleMouseMove);
    homeElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      homeElement.removeEventListener("mousemove", handleMouseMove);
      homeElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    marqueeRefs.current.forEach((ref, index) => {
      const marqueeInner = ref.querySelector(".marquee-inner");
      const textWidth = marqueeInner.scrollWidth / 2; // Полная ширина текста (с учетом дублирования)
      const direction = index % 2 === 0 ? "-" : "+"; // Чередование направлений

      gsap.fromTo(
        marqueeInner,
        { x: direction === "-" ? 0 : -textWidth },
        {
          x: direction === "-" ? -textWidth : 0,
          duration: 15, // Длительность анимации (можно регулировать)
          ease: "linear",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <main className="home" ref={homeRef}>
      <div
        className="meduza"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translate(${translate.x}px, ${translate.y}px)`,
          transition: "transform 1s ease-out",
        }}
      >
        <p>{words.join(" ")}</p>
      </div>
      <div className="text">
        {[
          "Frontend developer Daniel Abros",
          "Frontend developer Daniel Abros",
          "Frontend developer Daniel Abros",
        ].map((text, index) => (
          <div
            className="marquee"
            ref={(el) => (marqueeRefs.current[index] = el)}
            key={index}
          >
            <div className="marquee-inner">
              <span>{text}</span>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Transition(Home);
