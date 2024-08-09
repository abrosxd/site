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
  const { t } = useTranslation("Work");
  return (
    <div className="case tvoy-hit">
      <h1>Музыкальный плеер для магазина песен Твой Хит</h1>
      <div className="header">
        <div className="left">
          <h3>
            Переработка логики работы стандартного каталога товаров Tilda в
            каталог музыкальных композиций и интеграция с кастомным аудио
            плеером.
          </h3>
          <div className="buttons">
            <a href="https://t.me/abrosxd" target="_blank">
              Заказать для своего проекта
            </a>
            <a href="https://tvoy-hit.ru" target="_blank">
              Посмотреть на сайте
            </a>
          </div>
        </div>
        <div className="right">
          <div className="widget stack">
            <h2>{t("stack")}</h2>
            <div className="icons">
              <img src="/assets/icons/stack/tilda.png" />
              <img src="/assets/icons/stack/html5.png" />
              <img src="/assets/icons/stack/css3.png" />
              <img src="/assets/icons/stack/js.png" />
            </div>
          </div>
          <div className="widget time">
            <h2>Длительность</h2>
            <p>3 недели</p>
          </div>
          <div className="widget role">
            <h2>Роль</h2>
            <p>Разработчик</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <h2>О проекте</h2>
          <div className="sec1">
            <div className="left">
              <h3>Клиент</h3>
              <p>
                Твой Хит - магазин песен певца, композитора, аранжировщика,
                музыкального продюсера - Олег Шаумаров.
              </p>
            </div>
            <div className="right">
              <h3>Задачи</h3>
              <ul>
                <li>Редизайн каталога</li>
                <li>Разработка логики плеера</li>
                <li>Адаптив плеера</li>
              </ul>
            </div>
          </div>
          <h3>Проблемы</h3>
          <ul className="sec2">
            <li>
              <h3>01</h3>
              <h2>Ограничения конструктора</h2>
              <p>
                Сайт собран на конструкторе Tilda. Стандартный подход для
                реализации не подойдет и нужно изучить что под капотом у Tilda.
              </p>
            </li>
            <li>
              <h3>02</h3>
              <h2>Адаптивность</h2>
              <p>
                Кроме функционала плеера, так же нужно адаптировать его под
                разные платформы/девайсы.
              </p>
            </li>
          </ul>
        </div>
        <div className="results">
          <h2>Результаты</h2>
          <div className="sec">
            <div className="card">
              <p>Интеграция каталога товаров</p>
              <img src="/public/assets/projects/work/TvoyHit/result-1.png" />
            </div>
            <div className="card">
              <p>Стилизация каталога</p>
              <img src="/public/assets/projects/work/TvoyHit/result-2.png" />
            </div>
          </div>
          <div className="sec">
            <div className="card">
              <p>Гибкий код</p>
              <img src="/public/assets/projects/work/TvoyHit/result-4.png" />
            </div>
            <div className="card">
              <p>Любой дизайн плеера</p>
              <img src="/public/assets/projects/work/TvoyHit/result-3.png" />
            </div>
          </div>
        </div>
        <div className="process">
          <h2>Процесс</h2>
          <div className="block logic-map">
            <div className="left">
              <h3>Logic Map</h3>
            </div>
            <div className="right">
              <img src="/public/assets/projects/work/TvoyHit/logic-map.png" />
            </div>
          </div>
          <div className="block design">
            <div className="left">
              <h3>Дизайн</h3>
            </div>
            <div className="right">
              <div className="desktop">
                <div className="text">
                  <h3>Каталог</h3>
                  <p>Дизайн карточек</p>
                  <h3>Плеер</h3>
                  <p>Дизайн таймлайна</p>
                  <p>Дизайн аудио</p>
                </div>
                <img
                  className="mockup"
                  src="/public/assets/projects/mockups/desktop.svg"
                />
                <img
                  className="screen"
                  src="/public/assets/projects/work/TvoyHit/mockup-desktop.png"
                />
              </div>
            </div>
          </div>
          <div className="block dev">
            <div className="left">
              <h3>Разработка</h3>
            </div>
            <div className="right">
              <div className="step">
                <div className="text">
                  <p>
                    Реализация через постоянные переменные, для использования
                    кода в других проектах.
                  </p>
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
                  <p>
                    Каждая функция изолирована, что снижает вероятность того,
                    что изменения в одной функции могут вызвать неожиданные
                    проблемы или ошибки в другой.
                  </p>
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
                  <p>
                    Данные о треках получаются на прямую из каталога товаров
                    Tilda, что позволяет даже обычному пользователю
                    редактировать плейлист.
                  </p>
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
                  <p>
                    Адаптивное поведение плеера для любых устройств так же
                    реализовано через код.
                  </p>
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
                  <p>
                    Базовые стили для корректной работы плеера так же хранятся
                    внутри кода.
                  </p>
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
        <p>{t("footer")}</p>
        <p>tvoy-hit.ru | google.com</p>
      </div>
    </div>
  );
}
