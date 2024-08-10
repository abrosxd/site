import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./About.css";
import Transition from "../../components/Transition/Transition";

const About = () => {
  const { t } = useTranslation("About");

  const gallery = [
    "/assets/photo/gallery/1.jpeg",
    "/assets/photo/gallery/2.jpeg",
    "/assets/photo/gallery/3.png",
    "/assets/photo/gallery/4.png",
    "/assets/photo/gallery/5.png",
  ];

  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const updateDateTime = () => {
    const nowInWarsaw = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
    );
    const daysOfWeek = t("time.days", { returnObjects: true });
    const currentDay = daysOfWeek[nowInWarsaw.getDay()];
    const currentDate = `${nowInWarsaw
      .getDate()
      .toString()
      .padStart(2, "0")}/${(nowInWarsaw.getMonth() + 1)
      .toString()
      .padStart(2, "0")}`;
    const currentTime = nowInWarsaw.toLocaleTimeString("en-US", {
      hour12: false,
    });
    setCurrentDay(currentDay);
    setCurrentDate(currentDate);
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="about">
      <div className="left">
        <div className="hi">
          <p>
            👋 Хай — Я Данил, веб-дизайнер и веб-разработчик. Здесь ты найдешь
            всю нужную информацию обо мне и даже больше. Добро пожаловать!
          </p>
        </div>
        <div className="time">
          <div className="title">
            <span className="text">{t("time.text")}</span>
            <span className="tag city">Warszawa</span>
          </div>
          <div className="dayblock">
            <div className="date">
              <p className="day">{currentDay}</p>
              <p>{currentDate}</p>
            </div>
            <div className="timeblock">
              <span>{currentTime}</span>
            </div>
          </div>
        </div>
        <h2>Stack</h2>
        <div className="stack">
          <div className="tag vs-code">
            <img src="/assets/icons/stack/vs-code.jpg" alt="VS Code" />
            <span>VS Code</span>
          </div>
          <div className="tag html">
            <img src="/assets/icons/stack/html5.png" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="tag css">
            <img src="/assets/icons/stack/css3.png" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="tag js">
            <img src="/assets/icons/stack/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="tag react">
            <img src="/assets/icons/stack/react.png" alt="React" />
            <span>React</span>
          </div>
          <div className="tag gsap">
            <img src="/assets/icons/stack/gsap.png" alt="GSAP" />
            <span>GSAP</span>
          </div>
          <div className="tag node-js">
            <img src="/assets/icons/stack/node-js.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>
          <div className="tag figma">
            <img src="/assets/icons/stack/figma.png" alt="Figma" />
            <span>Figma</span>
          </div>
          <div className="tag wordpress">
            <img
              src="/public/assets/icons/stack/wordpress.png"
              alt="WordPress"
            />
            <span>WordPress</span>
          </div>
          <div className="tag webflow">
            <img src="/assets/icons/stack/webflow.png" alt="Webflow" />
            <span>Webflow</span>
          </div>
          <div className="tag tilda">
            <img src="/assets/icons/stack/tilda.png" alt="Tilda" />
            <span>Tilda</span>
          </div>
          <div className="tag airtable">
            <img src="/assets/icons/stack/airtable.svg" alt="Airtable" />
            <span>Airtable</span>
          </div>
          <div className="tag nocodb">
            <img src="/assets/icons/stack/nocodb.png" alt="NocoDB" />
            <span>NocoDB</span>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="links"></div>
      </div>
      <div className="right">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          direction="horizontal"
          className="gallery"
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Transition(About);
