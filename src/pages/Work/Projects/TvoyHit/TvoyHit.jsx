import React from "react";
import { useTranslation } from "react-i18next";
import "./TvoyHit.css";

export default function TvoyHit() {
  const { t } = useTranslation("Work");
  return (
    <div className="tvoy-hit">
      <div className="header">
        <div className="left">
          <div className="work-stack">
            <p>{t("stack")}</p>
            <div className="icons">
              <img src="/assets/icons/stack/tilda.png" />
              <img src="/assets/icons/stack/html5.png" />
              <img src="/assets/icons/stack/css3.png" />
              <img src="/assets/icons/stack/js.png" />
            </div>
          </div>
          <div className="text">
            <h1>{t("TvoyHit.title")}</h1>
            <h2>{t("TvoyHit.desc")}</h2>
          </div>
          <div className="buttons">
            <a href="https://t.me/abrosxd" target="_blank">
              {t("TvoyHit.button.order")}
            </a>
            <a href="https://tvoy-hit.ru" target="_blank">
              {t("TvoyHit.button.site")}
            </a>
          </div>
          <p className="description">{t("TvoyHit.button.desc")}</p>
        </div>
        <div className="right">
          <div className="card-player1">
            <img
              className="img1"
              src="/assets/projects/work/TvoyHit/player-card.svg"
            />
            <img
              className="img2"
              src="/assets/projects/work/TvoyHit/cover1.jpg"
            />
          </div>
          <div className="card-player2">
            <img
              className="img3"
              src="/assets/projects/work/TvoyHit/player-card.svg"
            />
            <img
              className="img4"
              src="/assets/projects/work/TvoyHit/cover2.jpg"
            />
          </div>
        </div>
      </div>
      <div className="arrow-scroll">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V18M12 18L7 13M12 18L17 13"
            stroke="#7e70ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="case">
        <div className="task">
          <div className="left">
            <img
              className="img1"
              src="/assets/projects/work/TvoyHit/player-designe.png"
            />
            <img
              className="img2"
              src="/assets/projects/work/TvoyHit/old-catalog.png"
            />
          </div>
          <div className="right">
            <h2>{t("TvoyHit.task.title")}</h2>
            <p>{t("TvoyHit.task.text.1")}</p>
            <p>{t("TvoyHit.task.text.2")}</p>
            <p>{t("TvoyHit.task.text.3")}</p>
          </div>
          <img
            className="note"
            src="/assets/projects/work/TvoyHit/cassette.png"
          />
        </div>
        <div className="development">
          <h1>{t("TvoyHit.dev.title")}</h1>
          <h2>{t("TvoyHit.dev.step1.title")}</h2>
          <div className="step1">
            <p>{t("TvoyHit.dev.step1.text.1")}</p>
            <p>{t("TvoyHit.dev.step1.text.2")}</p>
            <img src="/assets/projects/work/TvoyHit/step1.png" />
          </div>
          <h2>{t("TvoyHit.dev.step2.title")}</h2>
          <div className="step2">
            <img
              className="mic"
              src="/assets/projects/work/TvoyHit/microphone.png"
            />
            <p>{t("TvoyHit.dev.step2.text.1")}</p>
            <p>{t("TvoyHit.dev.step2.text.2")}</p>
            <img
              className="img1"
              src="/assets/projects/work/TvoyHit/step2.jpeg"
            />
          </div>
          <h2>{t("TvoyHit.dev.step3.title")}</h2>
          <div className="step3">
            <img
              className="mus-col"
              src="/assets/projects/work/TvoyHit/music-column.png"
            />
            <div className="left">
              <p>{t("TvoyHit.dev.step3.text.1")}</p>
              <p>{t("TvoyHit.dev.step3.text.2")}</p>
              <p>{t("TvoyHit.dev.step3.text.3")}</p>
              <p>{t("TvoyHit.dev.step3.text.4")}</p>
              <p>{t("TvoyHit.dev.step3.text.5")}</p>
            </div>
            <div className="right">
              <img
                className="img1"
                src="/assets/projects/work/TvoyHit/step3-1.png"
              />
              <img
                className="img2"
                src="/assets/projects/work/TvoyHit/step3-2.png"
              />
              <img
                className="img3"
                src="/assets/projects/work/TvoyHit/step3-3.png"
              />
            </div>
          </div>
        </div>
        <div className="complete">
          <img
            className="img2"
            src="/assets/projects/work/TvoyHit/scrip-note.png"
          />
          <img className="img3" src="/assets/projects/work/TvoyHit/note.png" />
          <h1>{t("TvoyHit.final.title")}</h1>
          <img className="img1" src="/assets/projects/work/TvoyHit/site.gif" />
          <p>{t("TvoyHit.final.text")}</p>
        </div>
      </div>
      <div className="footer">
        <p>{t("footer")}</p>
        <p>tvoy-hit.ru | google.com</p>
      </div>
    </div>
  );
}
