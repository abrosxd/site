import { r as reactExports, j as jsxRuntimeExports } from "./react-DzdCQBZn.js";
import { c as client } from "./react-dom-Bwiod6zR.js";
import { L as Link, B as BrowserRouter } from "./react-router-dom-qWOqmZqZ.js";
import { u as useTranslation, i as initReactI18next, I as I18nextProvider } from "./react-i18next-B-67Hkz-.js";
import { b as useLocation, d as Routes, e as Route } from "./react-router-Cv1HfeED.js";
import { g as gsapWithCSS } from "./gsap-BiEXuivK.js";
import { m as motion, A as AnimatePresence } from "./framer-motion-BnSgWLZS.js";
import { S as Swiper, T as Thumb, a as SwiperSlide, K as Keyboard, A as Autoplay } from "./swiper-SJ08fNaw.js";
import { S as SyntaxHighlighter, a as arta, b as atomOneDark } from "./react-syntax-highlighter-BAJrIxQ7.js";
import { i as instance } from "./i18next-CQfSPugE.js";
import { B as Browser } from "./i18next-browser-languagedetector-BjAGPolN.js";
import { B as Backend } from "./i18next-http-backend-Bm29PEhM.js";
import "./@babel-CnC3wJ3w.js";
import "./scheduler-K__oi9SH.js";
import "./@remix-run-D-HQy1AV.js";
import "./lowlight-Dlp8kLns.js";
import "./highlight.js-jLrizJZ-.js";
import "./fault-D0rSypJG.js";
import "./format-CP-d5KQu.js";
import "./cross-fetch-BrmS9441.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function Logo() {
  const logoRef = reactExports.useRef(null);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function setRandomColor() {
    const newColor = getRandomColor();
    if (logoRef.current) {
      logoRef.current.style.backgroundColor = `${newColor}80`;
    }
  }
  function updateColor() {
    if (logoRef.current) {
      logoRef.current.classList.add("color-transition");
      setRandomColor();
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.classList.remove("color-transition");
        }
      }, 1e3);
    }
  }
  reactExports.useEffect(() => {
    const intervalId = setInterval(updateColor, 5e3);
    return () => clearInterval(intervalId);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "logo", ref: logoRef, children: "ABROS" });
}
const GLYPHS = "ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
        span.textContent = span.getAttribute("data-letter") === " " ? " " : span.getAttribute("data-letter");
        span._interval = null;
      }, index * 100);
    });
  }, 200 + spans.length);
}
const useGlyphAnimation = () => {
  reactExports.useEffect(() => {
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
  const buttonRef = reactExports.useRef(null);
  const classes = className ? `button ${className}` : "button";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      className: classes,
      href,
      to,
      onClick,
      ref: buttonRef,
      ...props,
      children: children ? children : text.split("").map((letter, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-letter": letter === " " ? " " : letter, children: letter === " " ? " " : letter }, index))
    }
  );
};
const LangSVG = "data:image/svg+xml,%3csvg%20width='20px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20stroke-width='0'%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cpath%20d='M20.58%2019.37L17.59%2011.01C17.38%2010.46%2016.91%2010.12%2016.37%2010.12C15.83%2010.12%2015.37%2010.46%2015.14%2011.03L12.16%2019.37C12.02%2019.76%2012.22%2020.19%2012.61%2020.33C13%2020.47%2013.43%2020.27%2013.57%2019.88L14.19%2018.15H18.54L19.16%2019.88C19.27%2020.19%2019.56%2020.38%2019.87%2020.38C19.95%2020.38%2020.04%2020.37%2020.12%2020.34C20.51%2020.2%2020.71%2019.77%2020.57%2019.38L20.58%2019.37ZM14.74%2016.64L16.38%2012.05L18.02%2016.64H14.74ZM12.19%207.85C9.92999%2011.42%207.89%2013.58%205.41%2015.02C5.29%2015.09%205.16%2015.12%205.04%2015.12C4.78%2015.12%204.53%2014.99%204.39%2014.75C4.18%2014.39%204.3%2013.93%204.66%2013.73C6.75999%2012.51%208.48%2010.76%2010.41%207.86H4.12C3.71%207.86%203.37%207.52%203.37%207.11C3.37%206.7%203.71%206.36%204.12%206.36H7.87V4.38C7.87%203.97%208.21%203.63%208.62%203.63C9.02999%203.63%209.37%203.97%209.37%204.38V6.36H13.12C13.53%206.36%2013.87%206.7%2013.87%207.11C13.87%207.52%2013.53%207.86%2013.12%207.86H12.18L12.19%207.85ZM12.23%2015.12C12.1%2015.12%2011.97%2015.09%2011.85%2015.02C11.2%2014.64%2010.57%2014.22%209.97999%2013.78C9.64999%2013.53%209.58%2013.06%209.83%2012.73C10.08%2012.4%2010.55%2012.33%2010.88%2012.58C11.42%2012.99%2012.01%2013.37%2012.61%2013.72C12.97%2013.93%2013.09%2014.39%2012.88%2014.75C12.74%2014.99%2012.49%2015.12%2012.23%2015.12Z'%20fill='%23ffffff'%20%3e%3c/path%3e%3c/svg%3e";
const EnSVG = "data:image/svg+xml,%3csvg%20width='20px'%20viewBox='0%20-4%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20stroke-width='0'%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20clip-path='url(%23clip0_503_2952)'%3e%3crect%20width='28'%20height='20'%20rx='2'%20fill='white'%3e%3c/rect%3e%3cmask%20id='mask0_503_2952'%20style='mask-type:%20alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='28'%20height='20'%20%3e%3crect%20width='28'%20height='20'%20rx='2'%20fill='white'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_503_2952)'%3e%3crect%20width='28'%20height='20'%20fill='%230A17A7'%3e%3c/rect%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M-1.28244%20-1.91644L10.6667%206.14335V-1.33333H17.3334V6.14335L29.2825%20-1.91644L30.7737%200.294324L21.3263%206.66667H28V13.3333H21.3263L30.7737%2019.7057L29.2825%2021.9165L17.3334%2013.8567V21.3333H10.6667V13.8567L-1.28244%2021.9165L-2.77362%2019.7057L6.67377%2013.3333H2.95639e-05V6.66667H6.67377L-2.77362%200.294324L-1.28244%20-1.91644Z'%20fill='white'%20%3e%3c/path%3e%3cpath%20d='M18.668%206.33219L31.3333%20-2'%20stroke='%23DB1F35'%20stroke-width='0.666667'%20stroke-linecap='round'%20%3e%3c/path%3e%3cpath%20d='M20.0128%2013.6975L31.3666%2021.3503'%20stroke='%23DB1F35'%20stroke-width='0.666667'%20stroke-linecap='round'%20%3e%3c/path%3e%3cpath%20d='M8.00555%206.31046L-3.83746%20-1.67099'%20stroke='%23DB1F35'%20stroke-width='0.666667'%20stroke-linecap='round'%20%3e%3c/path%3e%3cpath%20d='M9.29006%2013.6049L-3.83746%2022.3105'%20stroke='%23DB1F35'%20stroke-width='0.666667'%20stroke-linecap='round'%20%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2012H12V20H16V12H28V8H16V0H12V8H0V12Z'%20fill='%23E6273E'%20%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_503_2952'%3e%3crect%20width='28'%20height='20'%20rx='2'%20fill='white'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const RuSVG = "data:image/svg+xml,%3csvg%20width='20px'%20viewBox='0%20-4%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20stroke-width='0'%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20clip-path='url(%23clip0_503_2726)'%3e%3crect%20x='0.25'%20y='0.25'%20width='27.5'%20height='19.5'%20rx='1.75'%20fill='white'%20stroke='%23F5F5F5'%20stroke-width='0.5'%20%3e%3c/rect%3e%3cmask%20id='mask0_503_2726'%20style='mask-type:%20alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='28'%20height='20'%20%3e%3crect%20x='0.25'%20y='0.25'%20width='27.5'%20height='19.5'%20rx='1.75'%20fill='white'%20stroke='white'%20stroke-width='0.5'%20%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_503_2726)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2013.3333H28V6.66667H0V13.3333Z'%20fill='%230C47B7'%20%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2020H28V13.3333H0V20Z'%20fill='%23E53B35'%20%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_503_2726'%3e%3crect%20width='28'%20height='20'%20rx='2'%20fill='white'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const PlSVG = "data:image/svg+xml,%3csvg%20width='20px'%20viewBox='0%20-4%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20stroke-width='0'%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20clip-path='url(%23clip0_503_4159)'%3e%3crect%20x='0.25'%20y='0.25'%20width='27.5'%20height='19.5'%20rx='1.75'%20fill='white'%20stroke='%23F5F5F5'%20stroke-width='0.5'%20%3e%3c/rect%3e%3cmask%20id='mask0_503_4159'%20style='mask-type:%20alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='28'%20height='20'%20%3e%3crect%20x='0.25'%20y='0.25'%20width='27.5'%20height='19.5'%20rx='1.75'%20fill='white'%20stroke='white'%20stroke-width='0.5'%20%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_503_4159)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2020H28V9.33333H0V20Z'%20fill='%23EB2A50'%20%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_503_4159'%3e%3crect%20width='28'%20height='20'%20rx='2'%20fill='white'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function Navigation() {
  useGlyphAnimation();
  const { t, i18n } = useTranslation("Menu");
  const [isLangMenuOpen, setLangMenuOpen] = reactExports.useState(false);
  const langMenuRef = reactExports.useRef(null);
  const location = useLocation();
  const toggleLangMenu = () => {
    setLangMenuOpen(!isLangMenuOpen);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const isActive = (path) => location.pathname === path;
  const isCurrentLanguage = (lang) => i18n.language === lang;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "menu", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: `glyph ${isActive("/") ? "active" : ""}`,
          as: Link,
          to: "/",
          text: t("home")
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: `glyph ${isActive("/work") ? "active" : ""}`,
          as: Link,
          to: "/work",
          text: t("work")
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: `glyph ${isActive("/about") ? "active" : ""}`,
          as: Link,
          to: "/about",
          text: t("about")
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "lang", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "section up", ref: langMenuRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: toggleLangMenu, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "nav-icon", src: LangSVG, alt: "Lang Icon" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: `submenu lang-sub ${isLangMenuOpen ? "active" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: isCurrentLanguage("en") ? "active" : "",
            onClick: () => changeLanguage("en"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "nav-icon", src: EnSVG, alt: "English" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: isCurrentLanguage("ru") ? "active" : "",
            onClick: () => changeLanguage("ru"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "nav-icon", src: RuSVG, alt: "Русский" })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: isCurrentLanguage("pl") ? "active" : "",
            onClick: () => changeLanguage("pl"),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "nav-icon", src: PlSVG, alt: "Polski" })
          }
        ) })
      ] })
    ] }) })
  ] });
}
function Loader({ setLoading }) {
  reactExports.useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5e3);
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, [setLoading]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loader", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aa" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z ac" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z af" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z ah" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aj" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z al" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z an" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z ap" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z ar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z at" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z av" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z ax" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z az" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aB" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aG" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aI" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Z aK" })
  ] }) });
}
const Cursor = () => {
  const canvasRef = reactExports.useRef(null);
  const trailRef = reactExports.useRef([]);
  const mouseMovingRef = reactExports.useRef(false);
  const timerRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };
  reactExports.useEffect(() => {
    if (isTouchDevice()) {
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      mouseRef.current = { x, y };
      mouseMovingRef.current = true;
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        mouseMovingRef.current = false;
      }, 100);
    };
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;
    const draw = () => {
      if (mouseMovingRef.current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        trailRef.current.forEach((point, index) => {
          const previousPoint = index === 0 ? mouseRef.current : trailRef.current[index - 1];
          point.dx += 0.3 * (previousPoint.x - point.x) + 2 * Math.random();
          point.dy += 0.3 * (previousPoint.y - point.y) + 2 * Math.random();
          point.dx *= 0.5;
          point.dy *= 0.5;
          point.x += point.dx;
          point.y += point.dy;
        });
        context.beginPath();
        context.moveTo(
          trailRef.current[0].x + 2 * Math.random(),
          trailRef.current[0].y + 2 * Math.random()
        );
        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const n = lerp(trailRef.current[i].x, trailRef.current[i + 1].x, 0.5) + 2 * Math.random();
          const m = lerp(trailRef.current[i].y, trailRef.current[i + 1].y, 0.5) + 2 * Math.random();
          context.quadraticCurveTo(
            trailRef.current[i].x + 50 * Math.random() - 25,
            trailRef.current[i].y + 50 * Math.random() - 25,
            n,
            m
          );
        }
        context.strokeStyle = "rgb(255, 255, 255)";
        context.lineWidth = 3;
        context.stroke();
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
      requestAnimationFrame(draw);
    };
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const initTrail = () => {
      trailRef.current = new Array(4).fill(null).map(() => ({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        dx: 0,
        dy: 0
      }));
    };
    initTrail();
    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);
    draw();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  if (isTouchDevice()) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1e3,
        pointerEvents: "none",
        mixBlendMode: "difference"
      }
    }
  );
};
const Transition = (OgComponent) => {
  return (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(OgComponent, { ...props }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "transition", children: Array.from({ length: 200 }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.li,
      {
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        exit: { opacity: 1 },
        transition: {
          duration: 0.1,
          ease: "linear",
          delay: Math.random() * 1
        }
      },
      index
    )) })
  ] });
};
const Home = () => {
  const letters = reactExports.useMemo(
    () => ({
      A: ["A", "a", "₳", "α", "@", "Ⱥ", "Ꭿ", "凡", "Ꮨ", "Λ"],
      B: ["B", "b", "β", "฿", "ß", "Ђ", "Ᏸ", "ᗽ", "方"],
      R: ["R", "r", "ჩ", "尺", "ᖇ", "Ꮢ"],
      O: ["O", "o", "Ø", "Θ"],
      S: ["S", "s", "§", "∫", "$", "ֆ", "Տ"]
    }),
    []
  );
  const getRandomLetter = (letter) => {
    const possibleLetters = letters[letter];
    return possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
  };
  const generateWord = () => {
    return ["A", "B", "R", "O", "S"].map((letter) => getRandomLetter(letter)).join("");
  };
  const [words, setWords] = reactExports.useState(
    () => Array.from({ length: 1e3 }, generateWord)
  );
  const [tilt, setTilt] = reactExports.useState({ x: 0, y: 0 });
  const [translate, setTranslate] = reactExports.useState({ x: 0, y: 0 });
  const homeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let animationFrameId;
    let lastUpdateTime = 0;
    const delay = 100;
    const updateWords = (time) => {
      if (time - lastUpdateTime > delay) {
        setWords(
          (prevWords) => prevWords.map((word, index) => {
            if (index % 10 === 0) {
              const newWord = word.split("").map((char, i) => {
                const letterKey = ["A", "B", "R", "O", "S"][i];
                return Math.random() < 0.2 ? getRandomLetter(letterKey) : char;
              }).join("");
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
  reactExports.useEffect(() => {
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
  const marqueeRefs = reactExports.useRef([]);
  const wordsArray = ["Frontend", "developer", "Daniel", "Abros"];
  reactExports.useEffect(() => {
    marqueeRefs.current.forEach((marqueeElement, index) => {
      const width = marqueeElement.scrollWidth;
      if (index === 1) {
        gsapWithCSS.fromTo(
          marqueeElement,
          { x: -width / 2 },
          {
            x: 0,
            duration: 20 + index * 5,
            ease: "linear",
            repeat: -1
          }
        );
      } else {
        gsapWithCSS.fromTo(
          marqueeElement,
          { x: 0 },
          {
            x: -width / 2,
            duration: 20 + index * 5,
            ease: "linear",
            repeat: -1
          }
        );
      }
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "home", ref: homeRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "meduza",
        style: {
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translate(${translate.x}px, ${translate.y}px)`,
          transition: "transform 1s ease-out"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: words.join(" ") })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquees", children: [0, 1, 2].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "marquee",
        ref: (el) => marqueeRefs.current[index] = el,
        children: wordsArray.concat(wordsArray).map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "word", children: [
          word,
          " "
        ] }, i))
      },
      index
    )) })
  ] });
};
const Home$1 = Transition(Home);
function TvoyHit() {
  const { t: w } = useTranslation("Work");
  const { t } = useTranslation("Work/Projects/TvoyHit");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "case tvoy-hit", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("stack") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "icons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/tilda.png", alt: "Tilda" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/html5.png", alt: "HTML5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/css3.png", alt: "CSS3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/js.png", alt: "JavaScript" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("time") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("sticky.time") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("role") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("sticky.role") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/projects/TvoyHit/header.png", alt: "Project Header" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "but",
            href: "https://t.me/abrosxd",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t("buttons.1")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "but",
            href: "https://tvoy-hit.ru/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: t("buttons.2")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("client") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.client") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("tasks") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "tasks", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.3") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("problems") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "problems", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "01" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.problems.1.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("info.problems.1.text") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "02" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.problems.2.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("info.problems.2.text") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block flex dev", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("dev") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: arta, children: `
const cover = player.querySelector(".player-cover .tn-atom");
const title = player.querySelector(".player-title .tn-atom");
const btnPrev = player.querySelector(".player-prev .tn-atom");
const btnPlay = player.querySelector(".player-play .tn-atom");
const btnNext = player.querySelector(".player-next .tn-atom");
const btnBuy = player.querySelector(".player-btn-buy .tn-atom");
const btnText = player.querySelector(".player-text .tn-atom");
const btnVolume = player.querySelector(".player-volume .tn-atom");
                ` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: arta, children: `
const nothing = (e) => {
  e.preventDefault();
};

const playingSame = (link) => {
  return link != null && link === audio.src ? true : false;
};

const isPlaying = () => {
  return !audio.paused;
};

const nowPlaying = () => {
  return playlist[Number(audio.dataset.trackNumber)];
};
                ` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.3") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: arta, children: `
(d.onload = function () {
  if (d.readyState === d.DONE && 200 === d.status) {
    let response = JSON.parse(d.responseText);
    if (response.product.characteristics.length > 0) {
      let chars = response.product.characteristics;
      let link = chars.find((song) => song.title === "music").value;
      resolve(link);
    } else {
      resolve(false);
    }
  }
}),
                ` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.4") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: arta, children: `
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  products.forEach((product) => playPauseBtnOnProduct(null, product));
  areaEnter();
} else {
  let covers = document.querySelectorAll(".js-product-img");
  for (let cover of covers) {
    cover.removeEventListener("mouseenter", enter);
    cover.removeEventListener("mouseleave", leave);
    cover.addEventListener("mouseenter", enter);
    cover.addEventListener("mouseleave", leave);
  }
  area.removeEventListener("mouseenter", areaEnter);
  area.removeEventListener("mouseleave", areaLeave);
  area.addEventListener("mouseenter", areaEnter);
  area.addEventListener("mouseleave", areaLeave);
}
                ` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.5") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "css", style: arta, children: `
.play-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: {sWBgClr};
  border-radius: {sWBrdRd};
}
.btn-music {
  width: 60px;
  height: 60px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%) scale(100%);
  transition: all .2s ease-in-out;
}
.btn-music:hover {
  transform: translate(-50%, -50%) scale(110%);
}
.play {
  background-image: {sWPlay};
}
.pause {
  background-image: {sWPause};
}
                ` }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: w("footer") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "tvoy-hit.ru | google.com" })
    ] })
  ] });
}
function LampaStore() {
  const { t: w } = useTranslation("Work");
  const { t } = useTranslation("Work/Projects/LampaStore");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "case lampa-store", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("stack") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "icons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/html5.png", alt: "HTML5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/css3.png", alt: "CSS3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/icons/stack/js.png", alt: "JavaScript" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("time") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("sticky.time") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("role") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("sticky.role") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/projects/LampaStore/header.png", alt: "Header" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          className: "but",
          href: "https://t.me/abrosxd",
          target: "_blank",
          rel: "noopener noreferrer",
          children: t("buttons.1")
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block info", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("client") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.client") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("tasks") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "tasks", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.1") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.2") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("info.tasks.3") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: w("problems") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "problems", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "01" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.problems.1.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("info.problems.1.text") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { children: "02" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.problems.2.title") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("info.problems.2.text") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block flex dev", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: w("dev") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: atomOneDark, children: `function deletePlugin(pluginToRemoveUrl) {
  var plugins = Lampa.Storage.get("plugins");
  var updatedPlugins = plugins.filter(function (obj) {
    return obj.url !== pluginToRemoveUrl;
  });
  Lampa.Storage.set("plugins", updatedPlugins);
  Lampa.Settings.update();
  Lampa.Noty.show("Плагин успешно удален");
  Lampa.Storage.set("needRebootSettingExit", true);
  settingsWatch();
}

function checkPlugin(pluginToCheck) {
  var plugins = Lampa.Storage.get("plugins");
  var checkResult = plugins.filter(function (obj) {
    return obj.url == pluginToCheck;
  });
  if (JSON.stringify(checkResult) !== "[]") {
    return true;
  } else {
    return false;
  }
}` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.2") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: atomOneDark, children: `Lampa.SettingsApi.addComponent({
  component: "skull",
  name: "Skull Store",
  icon: icon_skull,
});

Lampa.Settings.listener.follow("open", function (e) {
  if (e.name == "main") {
    setTimeout(function () {
      $('div[data-component="skull_online"]').remove();
      $('div[data-component="skull_tv"]').remove();
      $('div[data-component="skull_torpars"]').remove();
      $('div[data-component="skull_interface"]').remove();
      $('div[data-component="skull_control"]').remove();
      $('div[data-component="skull_style"]').remove();
    }, 0);
    $("#hideInstall").remove();
    setTimeout(function () {
      $("div[data-component=plugins]").before(
        $("div[data-component=skull]")
      );
    }, 30);
  }
});` }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("dev.3") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "code", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SyntaxHighlighter, { language: "javascript", style: atomOneDark, children: `const newsBlock = "code news";
Lampa.SettingsApi.addParam({
  component: "skull",
  param: {
    name: "skull_news",
    type: "static",
  },
  field: { name: newsBlock },
});` }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: w("footer") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "lampa.mx | google.com" })
    ] })
  ] });
}
const Work = () => {
  const [thumbsSwiper, setThumbsSwiper] = reactExports.useState(null);
  const [mainSwiper, setMainSwiper] = reactExports.useState(null);
  const projects = [
    {
      project: /* @__PURE__ */ jsxRuntimeExports.jsx(LampaStore, {}),
      icon: "/assets/projects/LampaStore/logo.png",
      href: "LampaStore"
    },
    {
      project: /* @__PURE__ */ jsxRuntimeExports.jsx(TvoyHit, {}),
      icon: "/assets/projects/TvoyHit/icon.ico",
      href: "TvoyHit"
    }
  ];
  reactExports.useLayoutEffect(() => {
    const setFullHeight = () => {
      const workElement = document.querySelector(".work");
      if (workElement) {
        workElement.style.height = window.innerHeight + "px";
      }
    };
    setFullHeight();
    window.addEventListener("resize", setFullHeight);
    return () => {
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);
  const getInitialSlideIndex = () => {
    const hash = window.location.hash.substring(1);
    const initialIndex = projects.findIndex((project) => project.href === hash);
    return initialIndex !== -1 ? initialIndex : 0;
  };
  const initialSlideIndex = getInitialSlideIndex();
  const handleSlideChange = (swiper) => {
    const newHash = `#${projects[swiper.activeIndex].href}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, null, newHash);
    }
    if (thumbsSwiper && thumbsSwiper.activeIndex !== swiper.activeIndex) {
      thumbsSwiper.slideTo(swiper.activeIndex);
    }
  };
  reactExports.useEffect(() => {
    if (!window.location.hash) {
      const initialHash = `#${projects[initialSlideIndex].href}`;
      window.history.replaceState(null, null, initialHash);
    }
  }, [initialSlideIndex]);
  reactExports.useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.slideTo(initialSlideIndex, 0);
      thumbsSwiper.slideTo(initialSlideIndex, 0);
    }
  }, [mainSwiper, thumbsSwiper]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "work", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Swiper,
      {
        className: "projects",
        spaceBetween: 35,
        slidesPerView: 1,
        onSwiper: setMainSwiper,
        modules: [Thumb],
        thumbs: { swiper: thumbsSwiper },
        onSlideChange: handleSlideChange,
        allowTouchMove: false,
        initialSlide: initialSlideIndex,
        children: projects.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: item.project }, index))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Swiper,
      {
        className: "navigation",
        spaceBetween: 18,
        slidesPerView: "auto",
        centeredSlides: true,
        modules: [Thumb, Keyboard],
        onSwiper: setThumbsSwiper,
        keyboard: { enabled: true },
        slideToClickedSlide: true,
        onSlideChange: (swiper) => {
          if (mainSwiper && mainSwiper.activeIndex !== swiper.activeIndex) {
            mainSwiper.slideTo(swiper.activeIndex);
          }
        },
        breakpoints: {
          0: {
            spaceBetween: 10
          },
          768: {
            spaceBetween: 14
          }
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "frame" }),
          projects.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.icon, alt: `Project ${index}` }) }, index))
        ]
      }
    )
  ] });
};
const Work$1 = Transition(Work);
const CrossSVG = "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%205L4.99998%2019M5.00001%205L19%2019'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const SocialLinks = ({ title, links }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block links", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: title }),
  links.map(({ href, imgSrc, name }, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt: name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: name })
  ] }, index))
] });
const StackItems = ({ items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block stack", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: items.title }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "items", children: items.stacks.map(({ imgSrc, name }, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `tag ${name.toLowerCase().replace(/[\s.]/g, "-")}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: name })
      ]
    },
    index
  )) })
] });
const About = () => {
  const { t } = useTranslation("About");
  const gallery = Array.from(
    { length: 45 },
    (_, index) => `/assets/photo/gallery/${index + 1}.jpeg`
  );
  const [currentDateTime, setCurrentDateTime] = reactExports.useState({
    day: "",
    date: "",
    time: ""
  });
  const [expandedSection, setExpandedSection] = reactExports.useState(null);
  const updateDateTime = () => {
    const nowInWarsaw = new Date(
      (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
    );
    const daysOfWeek = t("info.time.days", { returnObjects: true });
    const day = daysOfWeek[nowInWarsaw.getDay()];
    const date = `${nowInWarsaw.getDate().toString().padStart(2, "0")}/${(nowInWarsaw.getMonth() + 1).toString().padStart(2, "0")}`;
    const time = nowInWarsaw.toLocaleTimeString("en-US", { hour12: false });
    setCurrentDateTime({ day, date, time });
  };
  reactExports.useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1e3);
    return () => clearInterval(intervalId);
  }, []);
  const handleExpandSection = (section) => {
    if (window.innerWidth <= 960) setExpandedSection(section);
  };
  const closeSection = () => setExpandedSection(null);
  const socialLinks = [
    {
      href: "https://t.me/abrosxd",
      imgSrc: "/assets/icons/social/telegram.svg",
      name: "Telegram"
    },
    {
      href: "https://www.facebook.com/abrosxd/",
      imgSrc: "/assets/icons/social/facebook.svg",
      name: "Facebook"
    },
    {
      href: "https://vk.com/abrosxd",
      imgSrc: "/assets/icons/social/vk.svg",
      name: "Вконтакте"
    }
  ];
  const resourceLinks = [
    {
      href: "https://codepen.io/abros",
      imgSrc: "/assets/icons/social/codepen.svg",
      name: "Codepen"
    }
  ];
  const stackItems = {
    title: t("info.stack"),
    stacks: [
      { imgSrc: "/assets/icons/stack/vs-code.jpg", name: "VS Code" },
      { imgSrc: "/assets/icons/stack/html5.png", name: "HTML" },
      { imgSrc: "/assets/icons/stack/css3.png", name: "CSS" },
      { imgSrc: "/assets/icons/stack/js.png", name: "JavaScript" },
      { imgSrc: "/assets/icons/stack/react.png", name: "React" },
      { imgSrc: "/assets/icons/stack/gsap.png", name: "GSAP" },
      { imgSrc: "/assets/icons/stack/node-js.svg", name: "Node.js" },
      { imgSrc: "/assets/icons/stack/figma.png", name: "Figma" },
      { imgSrc: "/assets/icons/stack/webflow.png", name: "Webflow" },
      { imgSrc: "/assets/icons/stack/tilda.png", name: "Tilda" },
      { imgSrc: "/assets/icons/stack/airtable.svg", name: "Airtable" }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: `about ${expandedSection === null ? "default" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `left ${expandedSection === "left" ? "expanded" : ""}`,
        onClick: () => handleExpandSection("left"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "bg", src: "/assets/photo/statue1.avif", alt: "Statue 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `overlay ${expandedSection === "left" ? "expanded" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("links") })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `content ${expandedSection === "left" ? "expanded" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { title: "Связь со мной", links: socialLinks }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { title: "Ресурсы", links: resourceLinks })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `center ${expandedSection === "center" ? "expanded" : ""}`,
        onClick: () => handleExpandSection("center"),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "bg", src: "/assets/photo/statue2.png", alt: "Statue 2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `overlay ${expandedSection === "center" ? "expanded" : ""}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("info.title") })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `content ${expandedSection === "center" ? "expanded" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block hi", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("info.hello") }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block time", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "title", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text", children: t("info.time.text") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "tag city", children: "Warszawa" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dayblock", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "date", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "day", children: currentDateTime.day }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: currentDateTime.date })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeblock", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: currentDateTime.time }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StackItems, { items: stackItems }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block desc", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("info.desc.me.title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.desc.me.text") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("info.desc.doing.title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.desc.doing.text") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: t("info.desc.from.title") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: t("info.desc.from.text") })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("gallery") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Swiper,
        {
          modules: [Autoplay],
          grabCursor: true,
          centeredSlides: false,
          slidesPerView: 2,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          direction: "horizontal",
          slidesPerGroup: 1,
          className: "gallery",
          breakpoints: {
            960: { direction: "vertical" }
          },
          children: gallery.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(SwiperSlide, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: `Gallery Image ${index + 1}` }) }, index))
        }
      )
    ] }),
    expandedSection && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "close", onClick: closeSection, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "cross-icon", src: CrossSVG, alt: "Close icon" }) })
  ] });
};
const About$1 = Transition(About);
const NotFound = () => {
  const { t } = useTranslation("NotFound");
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const DISPLAY_WIDTH = window.innerWidth, DISPLAY_HEIGHT = window.innerHeight, DISPLAY_DURATION = 10;
    const mouse = { x: 0, y: 0 };
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let startTime;
    let eyes;
    function initialize() {
      canvas.width = DISPLAY_WIDTH;
      canvas.height = DISPLAY_HEIGHT;
      window.addEventListener(
        "mousemove",
        function(event) {
          mouse.x = event.clientX;
          mouse.y = event.clientY;
        },
        false
      );
      eyes = [
        new Eye(canvas, 0.19, 0.8, 0.88, 0.31),
        new Eye(canvas, 0.1, 0.54, 0.84, 0.32),
        new Eye(canvas, 0.81, 0.13, 0.63, 0.33),
        new Eye(canvas, 0.89, 0.19, 0.58, 0.34),
        new Eye(canvas, 0.4, 0.08, 0.97, 0.35),
        new Eye(canvas, 0.64, 0.74, 0.57, 0.36),
        new Eye(canvas, 0.41, 0.89, 0.56, 0.37),
        new Eye(canvas, 0.92, 0.89, 0.75, 0.38),
        new Eye(canvas, 0.27, 0.2, 0.87, 0.39),
        new Eye(canvas, 0.17, 0.46, 0.68, 0.41),
        new Eye(canvas, 0.71, 0.29, 0.93, 0.42),
        new Eye(canvas, 0.84, 0.46, 0.54, 0.43),
        new Eye(canvas, 0.93, 0.35, 0.63, 0.44),
        new Eye(canvas, 0.77, 0.82, 0.85, 0.45),
        new Eye(canvas, 0.36, 0.74, 0.9, 0.46),
        new Eye(canvas, 0.13, 0.24, 0.85, 0.47),
        new Eye(canvas, 0.58, 0.2, 0.77, 0.48),
        new Eye(canvas, 0.55, 0.84, 0.87, 0.5),
        new Eye(canvas, 0.5, 0.5, 5, 0.1)
      ];
      startTime = Date.now();
      animate();
    }
    function animate() {
      const seconds = (Date.now() - startTime) / 1e3;
      context.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT);
      for (let i = 0, len = eyes.length; i < len; i++) {
        const eye = eyes[i];
        if (seconds > eye.activationTime * DISPLAY_DURATION) {
          eye.activate();
        }
        eye.update(mouse);
      }
      requestAnimFrame(animate);
    }
    function Eye(canvas2, x, y, scale, time) {
      this.canvas = canvas2;
      this.context = this.canvas.getContext("2d");
      this.activationTime = time;
      this.irisSpeed = 0.01 + Math.random() * 0.2 / scale;
      this.blinkSpeed = 0.2 + Math.random() * 0.2;
      this.blinkInterval = 5e3 + 5e3 * Math.random();
      this.blinkTime = Date.now();
      this.scale = scale;
      this.size = 70 * scale;
      this.x = x * canvas2.width;
      this.y = y * canvas2.height + this.size * 0.15;
      this.iris = {
        x: this.x,
        y: this.y - this.size * 0.1,
        size: this.size * 0.2
      };
      this.pupil = {
        width: 2 * scale,
        height: this.iris.size * 0.75
      };
      this.exposure = {
        top: 0.1 + Math.random() * 0.3,
        bottom: 0.5 + Math.random() * 0.3,
        current: 0,
        target: 1
      };
      this.tiredness = 0.5 - this.exposure.top + 0.1;
      this.isActive = false;
      this.activate = function() {
        this.isActive = true;
      };
      this.update = function(mouse2) {
        if (this.isActive === true) {
          this.render(mouse2);
        }
      };
      this.render = function(mouse2) {
        const time2 = Date.now();
        if (this.exposure.current < 0.012) {
          this.exposure.target = 1;
        } else if (time2 - this.blinkTime > this.blinkInterval) {
          this.exposure.target = 0;
          this.blinkTime = time2;
        }
        this.exposure.current += (this.exposure.target - this.exposure.current) * this.blinkSpeed;
        const el = { x: this.x - this.size * 0.8, y: this.y - this.size * 0.1 };
        const er = { x: this.x + this.size * 0.8, y: this.y - this.size * 0.1 };
        const et = {
          x: this.x,
          y: this.y - this.size * (0.5 + this.exposure.top * this.exposure.current)
        };
        const eb = {
          x: this.x,
          y: this.y - this.size * (0.5 - this.exposure.bottom * this.exposure.current)
        };
        const eit = {
          x: this.x,
          y: this.y - this.size * (0.5 + (0.5 - this.tiredness) * this.exposure.current)
        };
        const ei = { x: this.x, y: this.y - this.iris.size };
        const eio = {
          x: (mouse2.x - ei.x) / (window.innerWidth - ei.x),
          y: mouse2.y / window.innerHeight
        };
        ei.x += eio.x * 16 * Math.max(1, this.scale * 0.4);
        ei.y += eio.y * 10 * Math.max(1, this.scale * 0.4);
        this.iris.x += (ei.x - this.iris.x) * this.irisSpeed;
        this.iris.y += (ei.y - this.iris.y) * this.irisSpeed;
        this.context.fillStyle = "rgba(255,255,255,1.0)";
        this.context.strokeStyle = "rgba(100,100,100,1.0)";
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.lineJoin = "round";
        this.context.moveTo(el.x, el.y);
        this.context.quadraticCurveTo(et.x, et.y, er.x, er.y);
        this.context.quadraticCurveTo(eb.x, eb.y, el.x, el.y);
        this.context.closePath();
        this.context.stroke();
        this.context.fill();
        this.context.save();
        this.context.globalCompositeOperation = "source-atop";
        this.context.translate(this.iris.x * 0.1, 0);
        this.context.scale(0.9, 1);
        this.context.strokeStyle = "rgba(0,0,0,0.5)";
        this.context.fillStyle = "rgba(130,50,90,0.9)";
        this.context.lineWidth = 2;
        this.context.beginPath();
        this.context.arc(
          this.iris.x,
          this.iris.y,
          this.iris.size,
          0,
          Math.PI * 2,
          true
        );
        this.context.fill();
        this.context.stroke();
        this.context.restore();
        this.context.save();
        this.context.shadowColor = "rgba(255,255,255,0.5)";
        this.context.shadowOffsetX = 0;
        this.context.shadowOffsetY = 0;
        this.context.shadowBlur = 2 * this.scale;
        this.context.globalCompositeOperation = "source-atop";
        this.context.translate(this.iris.x * 0.1, 0);
        this.context.scale(0.9, 1);
        this.context.fillStyle = "rgba(255,255,255,0.2)";
        this.context.beginPath();
        this.context.arc(
          this.iris.x,
          this.iris.y,
          this.iris.size * 0.7,
          0,
          Math.PI * 2,
          true
        );
        this.context.fill();
        this.context.restore();
        this.context.save();
        this.context.globalCompositeOperation = "source-atop";
        this.context.fillStyle = "rgba(0,0,0,0.9)";
        this.context.beginPath();
        this.context.moveTo(this.iris.x, this.iris.y - this.pupil.height * 0.5);
        this.context.quadraticCurveTo(
          this.iris.x + this.pupil.width * 0.5,
          this.iris.y,
          this.iris.x,
          this.iris.y + this.pupil.height * 0.5
        );
        this.context.quadraticCurveTo(
          this.iris.x - this.pupil.width * 0.5,
          this.iris.y,
          this.iris.x,
          this.iris.y - this.pupil.height * 0.5
        );
        this.context.fill();
        this.context.restore();
        this.context.save();
        this.context.shadowColor = "rgba(0,0,0,0.9)";
        this.context.shadowOffsetX = 0;
        this.context.shadowOffsetY = 0;
        this.context.shadowBlur = 10;
        this.context.fillStyle = "rgba(120,120,120,0.2)";
        this.context.beginPath();
        this.context.moveTo(el.x, el.y);
        this.context.quadraticCurveTo(et.x, et.y, er.x, er.y);
        this.context.quadraticCurveTo(eit.x, eit.y, el.x, el.y);
        this.context.closePath();
        this.context.fill();
        this.context.restore();
      };
    }
    window.requestAnimFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60);
      };
    }();
    setTimeout(initialize, 1);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "not-found", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fof", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "title", children: t("title") })
  ] });
};
const NotFound$1 = Transition(NotFound);
function App() {
  const location = useLocation();
  const [loading, setLoading] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { setLoading }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { location, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/work", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Work$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About$1, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound$1, {}) })
    ] }, location.pathname) })
  ] }) });
}
instance.use(Backend).use(Browser).use(initReactI18next).init({
  fallbackLng: "en",
  debug: false,
  ns: ["Menu", "Work", "About"],
  backend: {
    loadPath: "/locales/{{ns}}/{{lng}}.json"
  },
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain"
    ],
    caches: ["cookie"]
  },
  react: {
    useSuspense: false
  }
});
instance.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});
const Root = () => {
  reactExports.useEffect(() => {
    document.documentElement.setAttribute("lang", instance.language);
    instance.on("languageChanged", (lng) => {
      document.documentElement.setAttribute("lang", lng);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) });
};
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Root, {}));
