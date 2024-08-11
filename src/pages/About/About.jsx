import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

  return (
    <main className="about">
      <div className="left">
        <img className="bg" src="/assets/photo/statue.png" />
        <div className="overlay">
          <h2>{t("info.title")}</h2>
        </div>
        <div className="content">
          <div className="hi">
            <h1>{t("info.hello")}</h1>
          </div>
          <div className="time">
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
          <div className="stack">
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
          <div class="timeline">
            <div class="tl-header">
              <h1>{t("info.timeline.title")}</h1>
              <p>{t("info.timeline.description")}</p>
            </div>

            <div class="tl-item">
              <div class="tl-circle">&nbsp;</div>
            </div>

            <div class="tl-item">
              <div class="tl-circle">&nbsp;</div>
            </div>

            <div class="tl-item tl-year-wrap">
              <span class="tl-year-back">&nbsp;</span>
              <span class="tl-year">2024</span>
            </div>

            <div class="tl-item">
              <span class="tl-date">08</span>
              <div class="tl-event">
                <h2>{t("info.timeline.2024.8")}</h2>
                <h2 class="tl-color">{t("info.timeline.2024.7")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">06</span>
              <div class="tl-event">
                <h2>{t("info.timeline.2024.6")}</h2>
                <h2>{t("info.timeline.2024.5")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">03</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2024.4")}</h2>
                <h2>{t("info.timeline.2024.3")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">02</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2024.2")}</h2>
                <h2>{t("info.timeline.2024.1")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-end">&nbsp;</div>
            </div>

            <div class="tl-item tl-year-wrap">
              <span class="tl-year-back">&nbsp;</span>
              <span class="tl-year">2023</span>
            </div>

            <div class="tl-item">
              <span class="tl-date">11</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2023.12")}</h2>
                <h2 class="tl-color">{t("info.timeline.2023.11")}</h2>
                <h2 class="tl-color">{t("info.timeline.2023.10")}</h2>
                <h2 class="tl-color">{t("info.timeline.2023.9")}</h2>
                <h2 class="tl-color">{t("info.timeline.2023.8")}</h2>
                <h2>{t("info.timeline.2023.7")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">06</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2023.6")}</h2>
                <h2>{t("info.timeline.2023.5")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">03</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2023.4")}</h2>
                <h2>{t("info.timeline.2023.3")}</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">01</span>
              <div class="tl-event">
                <h2 class="tl-color">{t("info.timeline.2023.2")}</h2>
                <h2>{t("info.timeline.2023.1")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-end">&nbsp;</div>
            </div>

            <div className="tl-item tl-year-wrap">
              <span className="tl-year-back">&nbsp;</span>
              <span className="tl-year">2022</span>
            </div>

            <div class="tl-item">
              <span class="tl-date">12</span>
              <div class="tl-event">
                <h2>Начало работ над личным сайтом</h2>
              </div>
            </div>

            <div class="tl-item">
              <span class="tl-date">11</span>
              <div class="tl-event">
                <h2>{t("info.timeline.2022.11")}</h2>
                <h2>{t("info.timeline.2022.10")}</h2>
                <h2>{t("info.timeline.2022.9")}</h2>
                <h2 class="tl-color">{t("info.timeline.2022.8")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <span className="tl-date">07</span>
              <div className="tl-event">
                <h2>{t("info.timeline.2022.7")}</h2>
                <h2 className="tl-color">{t("info.timeline.2022.6")}</h2>
                <h2 className="tl-color">{t("info.timeline.2022.5")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <span className="tl-date">04</span>
              <div className="tl-event">
                <h2 className="tl-color">{t("info.timeline.2022.4")}</h2>
                <h2>{t("info.timeline.2022.3")}</h2>
                <h2>{t("info.timeline.2022.2")}</h2>
                <h2 className="tl-color">{t("info.timeline.2022.1")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-end">&nbsp;</div>
            </div>

            <div className="tl-item tl-year-wrap">
              <span className="tl-year-back">&nbsp;</span>
              <span className="tl-year">2021</span>
            </div>

            <div className="tl-item">
              <div className="tl-event">
                <h2 className="tl-color">{t("info.timeline.2021.7")}</h2>
                <h2>{t("info.timeline.2021.6")}</h2>
                <h2>{t("info.timeline.2021.5")}</h2>
                <h2 className="tl-color">{t("info.timeline.2021.4")}</h2>
                <h2>{t("info.timeline.2021.3")}</h2>
                <h2>{t("info.timeline.2021.2")}</h2>
                <h2 className="tl-color">{t("info.timeline.2021.1")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-end">&nbsp;</div>
            </div>

            <div className="tl-item tl-year-wrap">
              <span className="tl-year-back">&nbsp;</span>
              <span className="tl-year">2020</span>
            </div>

            <div className="tl-item">
              <div className="tl-event">
                <h2 className="tl-color">{t("info.timeline.2020.3")}</h2>
                <h2>{t("info.timeline.2020.2")}</h2>
                <h2>{t("info.timeline.2020.1")}</h2>
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-end">&nbsp;</div>
            </div>

            <div className="tl-item">
              <div className="tl-circle">&nbsp;</div>
            </div>

            <div className="tl-item">
              <div className="tl-circle">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <img className="bg" src="/assets/photo/mona-lisa.png" />
        <div className="overlay">
          <h2>{t("links")}</h2>
        </div>
        <div className="content">
          <div className="links"></div>
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
          direction="vertical"
          slidesPerGroup={1}
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
