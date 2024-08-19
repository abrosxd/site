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
      <div className="sticky-header">
        <div className="section">
          <h2>{w("stack")}</h2>
          <div className="icons">
            <img src="/assets/icons/stack/tilda.png" />
            <img src="/assets/icons/stack/html5.png" />
            <img src="/assets/icons/stack/css3.png" />
            <img src="/assets/icons/stack/js.png" />
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
        <img src="/assets/projects/TvoyHit/header.png" />
      </div>
      <div className="content">
        <h2>{t("description")}</h2>
        <div className="buttons">
          <a className="but" href="https://t.me/abrosxd" target="_blank">
            {t("buttons.1")}
          </a>
          <a className="but" href="https://tvoy-hit.ru/" target="_blank">
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
                <img src="/assets/projects/TvoyHit/result-1.png" />
              </div>
              <div className="card">
                <h3 className="t2">{t("results.2")}</h3>
                <img src="/assets/projects/TvoyHit/result-2.png" />
              </div>
              <div className="card">
                <h3 className="t3">{t("results.3")}</h3>
                <img src="/assets/projects/TvoyHit/result-3.png" />
              </div>
              <div className="card">
                <h3 className="t4">{t("results.4")}</h3>
                <img src="/assets/projects/TvoyHit/result-4.png" />
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
              <img src="/assets/projects/TvoyHit/mockup-desktop.png" />
            </div>
            <div className="flex">
              <div className="img">
                <img src="/assets/projects/TvoyHit/mockup-tablet.png" />
              </div>
              <div className="img">
                <img src="/assets/projects/TvoyHit/mockup-mobile.png" />
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
              <img src="/assets/projects/TvoyHit/logic-map.png" />
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
              <h3>{t("dev.2")}</h3>
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
              <h3>{t("dev.3")}</h3>
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
              <h3>{t("dev.4")}</h3>
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
              <h3>{t("dev.5")}</h3>
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
      <div className="footer">
        <p>{w("footer")}</p>
        <p>tvoy-hit.ru | google.com</p>
      </div>
    </div>
  );
}
