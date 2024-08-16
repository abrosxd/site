import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./About.css";
import Transition from "../../components/Transition/Transition";
import Button from "../../partials/Button/Button";
import CrossSVG from "./assets/cross.svg";

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
  const [expandedSection, setExpandedSection] = useState(null);

  const updateDateTime = () => {
    const nowInWarsaw = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
    );
    const daysOfWeek = t("info.time.days", { returnObjects: true });
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

  const handleExpandSection = (section) => {
    if (window.innerWidth <= 960) {
      setExpandedSection(section);
    }
  };

  const closeSection = () => {
    setExpandedSection(null);
  };

  return (
    <main className={`about ${expandedSection === null ? "default" : ""}`}>
      <div
        className={`left ${expandedSection === "left" ? "expanded" : ""}`}
        onClick={() => handleExpandSection("left")}
      >
        <img className="bg" src="/assets/photo/mona-lisa.png" />
        <div className="overlay">
          <h2>{t("links")}</h2>
        </div>
        <div className="content">
          <div className="block links">
            <h2>Связь со мной</h2>
            <a href="https://t.me/abrosxd" target="_blank">
              <img src="/public/assets/icons/social/telegram.svg" />
              <p>Telegram</p>
            </a>
          </div>
          <div className="block links">
            <h2>Ресурсы</h2>
            <a href="https://codepen.io/abros" target="_blank">
              <img src="/public/assets/icons/social/codepen.svg" />
              <p>Codepen</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`center ${expandedSection === "center" ? "expanded" : ""}`}
        onClick={() => handleExpandSection("center")}
      >
        <img className="bg" src="/assets/photo/statue.png" />
        <div className="overlay">
          <h2>{t("info.title")}</h2>
        </div>
        <div className="content">
          <div className="block hi">
            <h1>{t("info.hello")}</h1>
          </div>
          <div className="block time">
            <div className="title">
              <h1 className="text">{t("info.time.text")}</h1>
              <h1 className="tag city">Warszawa</h1>
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
          <div className="block stack">
            <h1>{t("info.stack")}</h1>
            <div className="items">
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
              <div className="tag make">
                <img src="/public/assets/icons/stack/make.png" alt="Make" />
                <span>Make</span>
              </div>
              <div className="tag zapier">
                <img src="/public/assets/icons/stack/zapier.png" alt="Zapier" />
                <span>Zapier</span>
              </div>
              <div className="tag n8n">
                <img src="/public/assets/icons/stack/n8n.svg" alt="N8N" />
                <span>N8N</span>
              </div>
              <div className="tag nocodb">
                <img src="/assets/icons/stack/nocodb.png" alt="NocoDB" />
                <span>NocoDB</span>
              </div>
            </div>
          </div>
          <div className="block desc">
            <h1>Кто я.</h1>
            <h3>
              Меня зовут Daniel Abros, и я человек. Давайте будем реалистами,
              можете ли вы действительно охарактеризовать человека с помощью
              пары забавных фактов?
            </h3>
            <h1>Что я делаю.</h1>
            <h3>
              Я работаю frontend разработчиком-фрилансером на полную ставку.
              Хотя я специализируюсь на создании веб-сайтов, я люблю
              разнообразие и люблю браться за уникальные творческие задачи. Если
              вы хотите изменить мир или переосмыслить мир, в котором мы живем,
              я бы с удовольствием стал его частью.
            </h3>
            <h1>Откуда я родом.</h1>
            <h3>
              Я вырос в сибирском городе Сургут (если вы не знаете, где это, вам
              определенно стоит поискать). На данный момент я живу в прекрасной
              столице Польши - Варшава.
            </h3>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="overlay">
          <h2>{t("gallery")}</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={2}
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
          slidesPerGroup={1}
          className="gallery"
          breakpoints={{
            960: {
              direction: "vertical",
            },
          }}
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {expandedSection && (
        <Button className="close" onClick={closeSection}>
          <img className="cross-icon" src={CrossSVG} alt="Close icon" />
        </Button>
      )}
    </main>
  );
};

export default Transition(About);
