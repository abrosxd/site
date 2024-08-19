import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./About.css";
import Transition from "../../components/Transition/Transition";
import Button from "../../partials/Button/Button";
import CrossSVG from "./assets/cross.svg";

const SocialLinks = ({ title, links }) => (
  <div className="block links">
    <h2>{title}</h2>
    {links.map(({ href, imgSrc, name }, index) => (
      <a key={index} href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
      </a>
    ))}
  </div>
);

const StackItems = ({ items }) => (
  <div className="block stack">
    <h1>{items.title}</h1>
    <div className="items">
      {items.stacks.map(({ imgSrc, name }, index) => (
        <div
          key={index}
          className={`tag ${name.toLowerCase().replace(/[\s.]/g, "-")}`}
        >
          <img src={imgSrc} alt={name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  const { t } = useTranslation("About");

  const gallery = Array.from(
    { length: 45 },
    (_, index) => `/assets/photo/gallery/${index + 1}.jpeg`
  );

  const [currentDateTime, setCurrentDateTime] = useState({
    day: "",
    date: "",
    time: "",
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const updateDateTime = () => {
    const nowInWarsaw = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
    );
    const daysOfWeek = t("info.time.days", { returnObjects: true });
    const day = daysOfWeek[nowInWarsaw.getDay()];
    const date = `${nowInWarsaw.getDate().toString().padStart(2, "0")}/${(
      nowInWarsaw.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}`;
    const time = nowInWarsaw.toLocaleTimeString("en-US", { hour12: false });

    setCurrentDateTime({ day, date, time });
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleExpandSection = (section) => {
    if (window.innerWidth <= 960) setExpandedSection(section);
  };

  const closeSection = () => setExpandedSection(null);

  const socialLinks = [
    {
      href: "https://t.me/abrosxd",
      imgSrc: "/assets/icons/social/telegram.svg",
      name: "Telegram",
    },
    {
      href: "https://www.facebook.com/abrosxd/",
      imgSrc: "/assets/icons/social/facebook.svg",
      name: "Facebook",
    },
    {
      href: "https://vk.com/abrosxd",
      imgSrc: "/assets/icons/social/vk.svg",
      name: "Вконтакте",
    },
  ];

  const resourceLinks = [
    {
      href: "https://codepen.io/abros",
      imgSrc: "/assets/icons/social/codepen.svg",
      name: "Codepen",
    },
  ];

  const stackItems = {
    title: t("info.stack"),
    stacks: [
      { imgSrc: "/assets/icons/stack/vs-code.jpg", name: "VS Code" },
      { imgSrc: "/assets/icons/stack/html5.png", name: "HTML" },
      { imgSrc: "/assets/icons/stack/css3.png", name: "CSS" },
      { imgSrc: "/assets/icons/stack/js.png", name: "JavaScript" },
      { imgSrc: "/assets/icons/stack/react.png", name: "React" },
      { imgSrc: "/assets/icons/stack/gsap.png", name: "GSAP" },
      { imgSrc: "/assets/icons/stack/node-js.svg", name: "Node.js" },
      { imgSrc: "/assets/icons/stack/figma.png", name: "Figma" },
      { imgSrc: "/assets/icons/stack/webflow.png", name: "Webflow" },
      { imgSrc: "/assets/icons/stack/tilda.png", name: "Tilda" },
      { imgSrc: "/assets/icons/stack/airtable.svg", name: "Airtable" },
    ],
  };

  return (
    <main className={`about ${expandedSection === null ? "default" : ""}`}>
      <div
        className={`left ${expandedSection === "left" ? "expanded" : ""}`}
        onClick={() => handleExpandSection("left")}
      >
        <img className="bg" src="/assets/photo/statue1.avif" alt="Statue 1" />
        <div className="overlay">
          <h2>{t("links")}</h2>
        </div>
        <div className="content">
          <SocialLinks title="Связь со мной" links={socialLinks} />
          <SocialLinks title="Ресурсы" links={resourceLinks} />
        </div>
      </div>

      <div
        className={`center ${expandedSection === "center" ? "expanded" : ""}`}
        onClick={() => handleExpandSection("center")}
      >
        <img className="bg" src="/assets/photo/statue2.png" alt="Statue 2" />
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
                <p className="day">{currentDateTime.day}</p>
                <p>{currentDateTime.date}</p>
              </div>
              <div className="timeblock">
                <span>{currentDateTime.time}</span>
              </div>
            </div>
          </div>
          <StackItems items={stackItems} />
          <div className="block desc">
            <h1>{t("info.desc.me.title")}</h1>
            <h3>{t("info.desc.me.text")}</h3>
            <h1>{t("info.desc.doing.title")}</h1>
            <h3>{t("info.desc.doing.text")}</h3>
            <h1>{t("info.desc.from.title")}</h1>
            <h3>{t("info.desc.from.text")}</h3>
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          direction="horizontal"
          slidesPerGroup={1}
          className="gallery"
          breakpoints={{
            960: { direction: "vertical" },
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
