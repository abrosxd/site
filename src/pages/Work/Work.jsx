import React, { useState } from "react";
import "./Work.css";
import Transition from "../../components/Transition/Transition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Keyboard } from "swiper/modules";
import "swiper/css";

const Work = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  return (
    <main className="work">
      <div className="projects">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={35}
          slidesPerView={1}
          modules={[Thumbs]}
          allowTouchMove={false}
        >
          {items.map((item, index) => (
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
          spaceBetween={34}
          slidesPerView={14}
          centeredSlides={true}
          modules={[Thumbs, Keyboard]}
          thumbs={{ swiper: thumbsSwiper }}
          keyboard={{ enabled: true }}
          slideToClickedSlide={true}
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
