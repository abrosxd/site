import React from "react";
import "./About.css";
import Transition from "../../components/Transition/Transition";

const About = () => {
  return (
    <div className="container">
      <div className="grid grid-cols gap-4">
        <div className="flex flex-col gap-4">
          <div className="card hello">
            <img src="../../../public/assets/about/personal/me.jpg" alt="Me" />
            <p>
              👋 Хай — Я Данил , Веб-разработчик / Веб-дизайнер. Здесь ты
              сможешь найти всё обо мне и даже больше.
            </p>
          </div>

          <div className="card time">
            <div style={{ alignSelf: "center", display: "flex" }}>
              <span style={{ marginRight: "5px" }}>Мое время</span>
              <span
                className="tag"
                style={{ backgroundColor: "#a8cfff80", color: "#0051ff" }}
              >
                Warszawa
              </span>
            </div>
            <div className="timeblock">
              <div className="date">
                <p className="day">ЧТ</p>
                <p>09/03</p>
              </div>
              <div className="time">
                <span>15:01:36</span>
              </div>
            </div>
          </div>

          <div className="card notes" style={{ padding: 0 }}>
            <div className="notes-container"></div>
          </div>

          <div className="card reviews">
            <span>Отзывы</span>
            <div className="reviews-container"></div>
          </div>

          <div className="card faq">
            <span>Ответы на вопросы</span>
            <div className="faq-container"></div>
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
