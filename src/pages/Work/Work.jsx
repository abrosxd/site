import React, { useState } from "react";
import "./Work.css";
import Transition from "../../components/Transition/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard } from "swiper/modules";
import "swiper/css";

import TvoyHit from "./Projects/TvoyHit/TvoyHit";

const Work = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const projects = [<TvoyHit />, <TvoyHit />];

  return (
    <main className="work">
      <div className="projects">
        <Swiper
          className="window"
          onSwiper={setThumbsSwiper}
          spaceBetween={35}
          slidesPerView={1}
          modules={[Thumbs]}
          allowTouchMove={false}
        >
          {projects.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="navigation">
        <div className="frame"></div>
        <Swiper
          className="slider"
          spaceBetween={18}
          slidesPerView={16}
          centeredSlides={true}
          modules={[Thumbs, Keyboard]}
          thumbs={{ swiper: thumbsSwiper }}
          keyboard={{ enabled: true }}
          slideToClickedSlide={true}
          breakpoints={{
            0: {
              spaceBetween: 24,
            },
            768: {
              spaceBetween: 14,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Transition(Work);
