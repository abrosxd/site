import React, { useState } from "react";
import "./Work.css";
import Transition from "../../components/Transition/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard } from "swiper/modules";
import "swiper/css";

import TvoyHit from "./Projects/TvoyHit/TvoyHit";

const Work = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const projects = [
    {
      project: <TvoyHit />,
      icon: "/assets/projects/work/TvoyHit/icon.ico",
    },
  ];

  return (
    <main className="work">
      <Swiper
        className="projects"
        onSwiper={setThumbsSwiper}
        spaceBetween={35}
        slidesPerView={1}
        modules={[Thumbs]}
        allowTouchMove={false}
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
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={{ enabled: true }}
        slideToClickedSlide={true}
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
