import React, { useState, useEffect, useLayoutEffect } from "react";
import "./Work.css";
import Transition from "../../components/Transition/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard } from "swiper/modules";
import "swiper/css";

import TvoyHit from "./Projects/TvoyHit/TvoyHit";
import LampaStore from "./Projects/LampaStore/LampaStore";

const Work = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const projects = [
    {
      project: <TvoyHit />,
      icon: "/assets/projects/work/TvoyHit/icon.ico",
      href: "TvoyHit",
    },
    {
      project: <LampaStore />,
      icon: "/assets/projects/work/LampaStore/logo.png",
      href: "LampaStore",
    },
  ];

  useLayoutEffect(() => {
    const setFullHeight = () => {
      const workElement = document.querySelector(".work");
      if (workElement) {
        workElement.style.height = window.innerHeight + "px";
      }
    };

    setFullHeight();
    window.addEventListener("resize", setFullHeight);
    return () => {
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);

  const getInitialSlideIndex = () => {
    const hash = window.location.hash.substring(1);
    const initialIndex = projects.findIndex((project) => project.href === hash);
    return initialIndex !== -1 ? initialIndex : 0;
  };

  const initialSlideIndex = getInitialSlideIndex();

  const handleSlideChange = (swiper) => {
    const newHash = `#${projects[swiper.activeIndex].href}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, null, newHash);
    }

    if (thumbsSwiper && thumbsSwiper.activeIndex !== swiper.activeIndex) {
      thumbsSwiper.slideTo(swiper.activeIndex);
    }
  };

  useEffect(() => {
    if (!window.location.hash) {
      const initialHash = `#${projects[initialSlideIndex].href}`;
      window.history.replaceState(null, null, initialHash);
    }
  }, [initialSlideIndex]);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      mainSwiper.slideTo(initialSlideIndex, 0);
      thumbsSwiper.slideTo(initialSlideIndex, 0);
    }
  }, [mainSwiper, thumbsSwiper]);

  return (
    <main className="work">
      <Swiper
        className="projects"
        spaceBetween={35}
        slidesPerView={1}
        onSwiper={setMainSwiper}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={handleSlideChange}
        allowTouchMove={false}
        initialSlide={initialSlideIndex}
      >
        {projects.map((item, index) => (
          <SwiperSlide key={index}>{item.project}</SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="navigation"
        spaceBetween={18}
        slidesPerView="auto"
        centeredSlides={true}
        modules={[Thumbs, Keyboard]}
        onSwiper={setThumbsSwiper}
        keyboard={{ enabled: true }}
        slideToClickedSlide={true}
        onSlideChange={(swiper) => {
          if (mainSwiper && mainSwiper.activeIndex !== swiper.activeIndex) {
            mainSwiper.slideTo(swiper.activeIndex);
          }
        }}
        breakpoints={{
          0: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 14,
          },
        }}
      >
        <div className="frame"></div>
        {projects.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.icon} alt={`Project ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Transition(Work);
