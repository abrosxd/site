import { useEffect } from "react";

const GLYPHS =
  "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function animateRandomGlyphs(spans) {
  spans.forEach((span, index) => {
    setTimeout(() => {
      span._interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * GLYPHS.length);
        span.textContent = GLYPHS[randomIndex];

        if (index + 1 < spans.length) {
          spans[index + 1].textContent = "_";
        }
        if (index + 2 < spans.length) {
          spans[index + 2].textContent = "_";
        }
      }, 100);
    }, index * 100);
  });

  setTimeout(() => {
    spans.forEach((span, index) => {
      setTimeout(() => {
        clearInterval(span._interval);
        span.textContent =
          span.getAttribute("data-letter") === " "
            ? "\u00A0"
            : span.getAttribute("data-letter");
        span._interval = null;
      }, index * 100);
    });
  }, 200 + spans.length);
}

const useGlyphAnimation = () => {
  useEffect(() => {
    const glyphElements = document.querySelectorAll(".glyph");

    glyphElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        const spans = element.querySelectorAll("span");
        const isAnimating = Array.from(spans).some((span) => span._interval);

        if (!isAnimating) {
          animateRandomGlyphs(spans);
        }
      });
    });

    return () => {
      glyphElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {
          const spans = element.querySelectorAll("span");
          spans.forEach((span) => {
            if (span._interval) {
              clearInterval(span._interval);
            }
          });
        });
      });
    };
  }, []);
};

export default useGlyphAnimation;
