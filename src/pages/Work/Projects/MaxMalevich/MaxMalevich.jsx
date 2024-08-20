import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Prism from "prismjs";
import "./MaxMalevich.css";

export default function MaxMalevich() {
  const { t: w } = useTranslation("Work");
  const { t: t } = useTranslation("Work/Projects/MaxMalevich");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="case max-malevich">
      <div className="sticky-header">
        <div className="section">
          <h2>{w("stack")}</h2>
          <div className="icons">
            <img src="/assets/icons/stack/tilda.png" alt="Tilda" />
            <img src="/assets/icons/stack/html5.png" alt="HTML5" />
            <img src="/assets/icons/stack/css3.png" alt="CSS3" />
            <img src="/assets/icons/stack/js.png" alt="JavaScript" />
          </div>
        </div>
        <div className="section">
          <h2>{w("time")}</h2>
          <p>{t("sticky.time")}</p>
        </div>
        <div className="section">
          <h2>{w("role")}</h2>
          <p>{t("sticky.role")}</p>
        </div>
      </div>
      <div className="header">
        <h1>{t("title")}</h1>
        <img src="/assets/projects/MaxMalevich/header.png" alt="Header" />
      </div>
      <div className="content">
        <h2>{t("description")}</h2>
        <div className="buttons">
          <a
            className="but"
            href="https://t.me/abrosxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("buttons.1")}
          </a>
          <a
            className="but"
            href="https://kuhni-premium.moscow/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("buttons.2")}
          </a>
        </div>

        <div className="block info">
          <div className="flex">
            <div className="section50">
              <h4>{w("client")}</h4>
              <h3>{t("info.client")}</h3>
            </div>
            <div className="section50">
              <h4>{w("tasks")}</h4>
              <ul className="tasks">
                <li>{t("info.tasks.1")}</li>
                <li>{t("info.tasks.2")}</li>
                <li>{t("info.tasks.3")}</li>
                <li>{t("info.tasks.4")}</li>
              </ul>
            </div>
          </div>
          <h4>{w("problems")}</h4>
          <ul className="problems">
            <li className="card">
              <h5>01</h5>
              <h3>{t("info.problems.1.title")}</h3>
              <p>{t("info.problems.1.text")}</p>
            </li>
            <li className="card">
              <h5>02</h5>
              <h3>{t("info.problems.2.title")}</h3>
              <p>{t("info.problems.2.text")}</p>
            </li>
            <li className="card">
              <h5>02</h5>
              <h3>{t("info.problems.3.title")}</h3>
              <p>{t("info.problems.3.text")}</p>
            </li>
          </ul>
        </div>
        <div className="block flex results">
          <div className="section20">
            <h2>{w("results")}</h2>
          </div>
          <div className="section80">
            <div className="cards">
              <div className="card">
                <h3 className="t1">{t("results.1")}</h3>
                <img src="/assets/projects/MaxMalevich/result-1.png" />
              </div>
              <div className="card">
                <h3 className="t2">{t("results.2")}</h3>
                <img src="/assets/projects/MaxMalevich/result-2.png" />
              </div>
              <div className="card">
                <h3 className="t3">{t("results.3")}</h3>
                <img src="/assets/projects/MaxMalevich/result-3.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="block flex design">
          <div className="section20">
            <h2>{w("design")}</h2>
          </div>
          <div className="section80">
            <div className="img">
              <img src="/assets/projects/MaxMalevich/mockup-desktop.png" />
            </div>
            <div className="flex">
              <div className="img">
                <img src="/assets/projects/MaxMalevich/mockup-tablet.png" />
              </div>
              <div className="img">
                <img src="/assets/projects/MaxMalevich/mockup-mobile.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="block flex map">
          <div className="section20">
            <h2>Logic map</h2>
          </div>
          <div className="section80">
            <div className="img">
              <img src="/assets/projects/MaxMalevich/logic-map.png" />
            </div>
          </div>
        </div>
        <div className="block flex dev">
          <div className="section20">
            <h2>{w("dev")}</h2>
          </div>
          <div className="section80">
            <div className="step">
              <h3>{t("dev.1")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`
const cards = [
  {
    img: "https://static.tildacdn.com/tild6366-3861-4134-a335-616663393938/2xolf9e9r3lvvvf4idcj.jpg",
    href: "#",
  },
  {
    img: "https://static.tildacdn.com/tild6337-3139-4461-b161-653332313932/bw6z7njskdwf226yqheq.jpg",
    href: "#",
  },
  {
    img: "https://static.tildacdn.com/tild3134-3536-4266-a163-633338373033/e1sto8oc42jk2f165har.jpg",
    href: "#",
  },
  {
    img: "https://static.tildacdn.com/tild6535-3566-4336-b931-613537646261/fbsl24ms1w7gxp1kuq6y.jpg",
    href: "#",
  },
`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="step">
              <h3>{t("dev.2")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`
const slider = block.querySelector(".swiper-container");
const html = block.querySelector(".tn-atom__html");
html.style.position = "absolute";
html.style.height = "100%";
const wrapper = document.createElement("div");
wrapper.classList.add("swiper-wrapper");
slider.appendChild(wrapper);
const prevBtn = block.querySelector(".prev .tn-atom");
const nextBtn = block.querySelector(".next .tn-atom");
const pagination = block.querySelector(".pagination");
const paginationDots = block.querySelector(".swiper-pagination");
const cur = block.querySelector(".cur .tn-atom");
const last = block.querySelector(".last .tn-atom");
const lineSVG = pagination.querySelector(".pagination-path");
const svg = pagination.querySelector(".pagination-svg");
                    `}
                  </code>
                </pre>
              </div>
            </div>

            <div className="step">
              <h3>{t("dev.3")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`
const abrosSwiper = new Swiper(slider, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    perspective: true,
    next: {
      translate: ["20.1rem", 0, -1],
      scale: 0.85,
      shadow: true,
    },
    prev: {
      translate: ["-100%", 0, 0],
    },
  },
  pagination: {
    el: paginationDots,
                    `}
                  </code>
                </pre>
              </div>
            </div>

            <div className="step">
              <h3>{t("dev.4")}</h3>
              <div className="code">
                <pre>
                  <code className="language-javascript">
                    {`
slideChange: function (swiper) {
  cur.textContent = "0{swiper.activeIndex + 1}";
  const svgWidth = svg.clientWidth;
  if (svgWidth) {
    const oneSlideWidth = svgWidth / swiper.slides.length;
    const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
    lineSVG.setAttribute("d", "M0 1H{lineWidth}");
  }
                    `}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>{w("footer")}</p>
        <p>kuhni-premium.moscow</p>
      </div>
    </div>
  );
}
