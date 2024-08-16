import React from "react";
import { useTranslation } from "react-i18next";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./TvoyHit.css";

export default function TvoyHit() {
  const customStyleCode = {
    backgroundColor: "transparent",
    fontSize: "medium",
  };

  const { t: w } = useTranslation("Work");
  const { t: t } = useTranslation("Work/Projects/TvoyHit");

  return (
    <div className="case tvoy-hit">
      <h1>{t("title")}</h1>
      <div className="header">
        <div className="left">
          <h3>{t("header.description")}</h3>
          <div className="buttons">
            <a href="https://t.me/abrosxd" target="_blank">
              {t("header.buttons.1")}
            </a>
            <a href="https://tvoy-hit.ru" target="_blank">
              {t("header.buttons.2")}
            </a>
          </div>
        </div>
        <div className="right">
          <div className="widget stack">
            <h2>{w("stack")}</h2>
            <div className="icons">
              <img src="/assets/icons/stack/tilda.png" />
              <img src="/assets/icons/stack/html5.png" />
              <img src="/assets/icons/stack/css3.png" />
              <img src="/assets/icons/stack/js.png" />
            </div>
          </div>
          <div className="widget time">
            <h2>{w("time")}</h2>
            <p>{t("header.time")}</p>
          </div>
          <div className="widget role">
            <h2>{w("role")}</h2>
            <p>{t("header.role")}</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <h2>{w("info")}</h2>
          <div className="sec1">
            <div className="left">
              <h3>{w("client")}</h3>
              <p>{t("content.info.client")}</p>
            </div>
            <div className="right">
              <h3>{w("tasks")}</h3>
              <ul>
                <li>{t("content.info.tasks.1")}</li>
                <li>{t("content.info.tasks.2")}</li>
                <li>{t("content.info.tasks.3")}</li>
              </ul>
            </div>
          </div>
          <h3>{w("problems")}</h3>
          <ul className="sec2">
            <li>
              <h3>01</h3>
              <h2>{t("content.info.problems.1.title")}</h2>
              <p>{t("content.info.problems.1.text")}</p>
            </li>
            <li>
              <h3>02</h3>
              <h2>{t("content.info.problems.2.title")}</h2>
              <p>{t("content.info.problems.2.text")}</p>
            </li>
          </ul>
        </div>
        <div className="results">
          <h2>{w("results")}</h2>
          <div className="sec">
            <div className="card catalog-integration">
              <p>{t("content.results.1")}</p>
              <img src="/assets/projects/work/TvoyHit/result-1.png" />
            </div>
            <div className="card catalog-style">
              <p>{t("content.results.2")}</p>
              <img src="/assets/projects/work/TvoyHit/result-2.png" />
            </div>
          </div>
          <div className="sec">
            <div className="card settings-lite">
              <p>{t("content.results.3")}</p>
              <img src="/assets/projects/work/TvoyHit/result-4.png" />
            </div>
            <div className="card player-design">
              <p>{t("content.results.4")}</p>
              <img src="/assets/projects/work/TvoyHit/result-3.png" />
            </div>
          </div>
        </div>
        <div className="process">
          <h2>{w("process")}</h2>
          <div className="block design">
            <div className="left">
              <h3>{t("content.process.design")}</h3>
            </div>
            <div className="right">
              <div className="mockup">
                <img src="/assets/projects/work/TvoyHit/mockup-desktop.png" />
              </div>
              <div className="sec">
                <div className="mockup">
                  <img src="/assets/projects/work/TvoyHit/mockup-tablet.png" />
                </div>
                <div className="mockup">
                  <img src="/assets/projects/work/TvoyHit/mockup-mobile.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="block logic-map">
            <div className="left">
              <h3>{t("content.process.logicmap")}</h3>
            </div>
            <div className="right">
              <img src="/assets/projects/work/TvoyHit/logic-map.png" />
            </div>
          </div>
          <div className="block dev">
            <div className="left">
              <h3>{t("content.process.dev.title")}</h3>
            </div>
            <div className="right">
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.1")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
const cover = player.querySelector(".player-cover .tn-atom");
const title = player.querySelector(".player-title .tn-atom");
const btnPrev = player.querySelector(".player-prev .tn-atom");
const btnPlay = player.querySelector(".player-play .tn-atom");
const btnNext = player.querySelector(".player-next .tn-atom");
const btnBuy = player.querySelector(".player-btn-buy .tn-atom");
const btnText = player.querySelector(".player-text .tn-atom");
const btnVolume = player.querySelector(".player-volume .tn-atom");
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.2")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
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
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.3")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
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
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.4")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="javascript"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
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
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="step">
                <div className="text">
                  <p>{t("content.process.dev.5")}</p>
                </div>
                <div className="code">
                  <SyntaxHighlighter
                    language="css"
                    style={arta}
                    customStyle={customStyleCode}
                  >
                    {`
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
/* Кнопки play/pause */
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
                  `}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>{w("footer")}</p>
        <p>tvoy-hit.ru | google.com</p>
      </div>
    </div>
  );
}
