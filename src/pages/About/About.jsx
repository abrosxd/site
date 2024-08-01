import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import Transition from "../../components/Transition/Transition";
import MyTime from "../../widgets/About/MyTime/MyTime";
import Reviews from "../../widgets/About/Reviews/Reviews";
import FAQ from "../../widgets/About/FAQ/FAQ";

const About = () => {
  const { t } = useTranslation("About");
  return (
    <div className="container">
      <div className="grid grid-cols gap-4">
        <div className="flex flex-col gap-4">
          <div className="card">
            <div className="hello">
              <img
                src="../../../public/assets/about/personal/me.jpg"
                alt="Me"
              />
              <p>{t("hello")}</p>
            </div>
          </div>

          <div className="card">
            <MyTime />
          </div>

          <div className="card">
            <span>{t("reviews")}</span>
            <div className="reviews">
              <Reviews />
            </div>
          </div>

          <div className="card">
            <span>{t("faq")}</span>
            <div className="faq">
              <FAQ />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="card gallery">
            <span>Фотоальбом</span>
            <div className="gallery-container"></div>
          </div>

          <div className="card stack">
            <span>Стек</span>
            <div
              className="stack-container"
              style={{
                lineHeight: "1.7",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            ></div>
          </div>

          <div className="card randomfacts">
            <span>Случайный факт</span>
            <div>
              <img
                style={{ height: "50px", borderRadius: "10px" }}
                id="factImage"
                src=""
                alt="Random Fact"
              />
              <p>hfkdkdlfklf</p>
              <span
                className="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="../../src/assets/icons/game-cube.svg"
                  alt="Game Cube"
                />
                <p style={{ margin: 0, paddingLeft: "10px" }}>Другой факт</p>
              </span>
            </div>
          </div>

          <div className="card tools">
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
            >
              <div className="flex flex-col gap-4">
                <p>Софт</p>
              </div>

              <div className="flex flex-col gap-4">
                <p>Материал</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(About);
