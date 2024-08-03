import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Welcome.css";

function typingText(element, words, intervalRef, timeoutRef) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  let direction = DIRECTION_FORWARDS;
  let wordIndex = 0;
  let letterIndex = 0;

  function startTyping() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction === DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex === word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(intervalRef.current);
        timeoutRef.current = setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction === DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex === 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);
    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }

    startTyping();
  }

  startTyping();
}

export default function Welcome() {
  const { t } = useTranslation("Welcome");
  const typingTextRef = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const element = typingTextRef.current;
    const words = t("typing-text", { returnObjects: true });

    if (Array.isArray(words) && words.length > 0) {
      typingText(element, words, intervalRef, timeoutRef);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [t]);

  return (
    <div className="welcome">
      <h2>
        <span>{t("title")}</span>
        <br />
        <span className="typing-text" ref={typingTextRef}></span>
      </h2>
      <svg className="scroll-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20 6H23L19 2L15 6H18V18H15L19 22L23 18H20V6M9 3.09C11.83 3.57 14 6.04 14 9H9V3.09M14 11V15C14 18.3 11.3 21 8 21S2 18.3 2 15V11H14M7 9H2C2 6.04 4.17 3.57 7 3.09V9Z"
        ></path>
      </svg>
      <svg className="swipe-icon" viewBox="0 0 14 14">
        <path
          fill="currentColor"
          d="m 6.9095283,12.7413 c -0.10036,-0.5452 -0.31105,-0.8712 -0.99151,-1.5343 l -0.67229,-0.6551 -0.6647,-1.3447 c -0.50864,-1.029 -0.77843,-1.4863 -1.14914,-1.9477 -0.58811,-0.7321 -0.65132,-0.8447 -0.59653,-1.063 0.0476,-0.1898 0.39401,-0.3692 0.70801,-0.3668 0.50069,0 1.13753,0.5303 1.64031,1.3557 0.32198,0.5285 0.45982,0.6434 0.63753,0.5314 0.11086,-0.07 0.12349,-0.3102 0.15516,-2.9538 l 0.0345,-2.8777 0.16279,-0.1318 c 0.15192,-0.1229 0.31214,-0.1623 0.56127,-0.138 0.57642,0.056 0.62063,0.1818 0.62063,1.7613 0,1.2791 0,1.2791 0.13792,1.1412 0.20861,-0.2086 0.68803,-0.1883 0.96012,0.041 0.18584,0.1564 0.21217,0.2222 0.21217,0.5302 l 0,0.3517 0.13982,-0.1501 c 0.18876,-0.2026 0.43941,-0.2549 0.76039,-0.1588 0.33151,0.099 0.4789597,0.3013 0.4789597,0.656 l 0,0.2735 0.1479,-0.1587 c 0.20253,-0.2174 0.68354,-0.1705 0.94631,0.092 l 0.18152,0.1815 0.0548,1.8431 c 0.0301,1.0137 0.0361,1.9745 0.0132,2.1351 -0.0229,0.1606 -0.19261,0.5868 -0.37716,0.947 -0.30759,0.6006 -0.40983,0.9233 -0.51948,1.64 l -0.0396,0.2586 -1.7476397,0 -1.74764,0 -0.0476,-0.2586 z m -3.88241,-8.8791 c -0.23634,-0.4745 -0.42971,-0.8779 -0.42971,-0.8965 0,-0.019 0.13964,-0.034 0.31031,-0.034 l 0.31032,0 0,-0.931 0,-0.9309 0.27583,0 0.27583,0 0,0.9309 0,0.931 0.31606,0 c 0.17383,0 0.30572,0.025 0.29307,0.056 -0.10771,0.2623 -0.85848,1.7309 -0.88624,1.7335 -0.0197,0 -0.22912,-0.3847 -0.46547,-0.8592 z m 2.545,-0.9142 c -0.0354,-0.066 -0.0997,-0.2526 -0.143,-0.4138 -0.2007,-0.7475 0.43014,-1.5343 1.23013,-1.5343 0.48815,0 0.92164,0.265 1.15067,0.7034 0.13056,0.2499 0.12323,0.8416 -0.014,1.1308 -0.18038,0.3801 -0.25675,0.2897 -0.20437,-0.2419 0.0556,-0.5645 -0.0454,-0.8757 -0.35613,-1.0969 -0.46984,-0.3346 -1.05852,-0.2226 -1.38305,0.2631 -0.14085,0.2108 -0.15847,0.3089 -0.13929,0.7759 0.0218,0.5307 -0.0174,0.6456 -0.14095,0.4137 z"
        ></path>
      </svg>
    </div>
  );
}
