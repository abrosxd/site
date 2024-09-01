import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";
import Transition from "../../components/Transition/Transition";

const Home = () => {
  const marqueeRefs = useRef([]);
  const wordsArray = ["Frontend", "developer", "Daniel", "Abros"];

  useEffect(() => {
    marqueeRefs.current.forEach((marqueeElement, index) => {
      const width = marqueeElement.scrollWidth;

      if (index === 1) {
        gsap.fromTo(
          marqueeElement,
          { x: -width / 2 },
          {
            x: 0,
            duration: 20 + index * 5,
            ease: "linear",
            repeat: -1,
          }
        );
      } else {
        gsap.fromTo(
          marqueeElement,
          { x: 0 },
          {
            x: -width / 2,
            duration: 20 + index * 5,
            ease: "linear",
            repeat: -1,
          }
        );
      }
    });
  }, []);

  return (
    <main className="home">
      <div className="marquees">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className="marquee"
            ref={(el) => (marqueeRefs.current[index] = el)}
          >
            {wordsArray.concat(wordsArray).map((word, i) => (
              <span key={i} className="word">
                {word}{" "}
              </span>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Transition(Home);
