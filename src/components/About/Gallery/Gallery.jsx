import React from "react";
import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const data = [
    "/assets/photo/gallery/1.jpeg",
    "/assets/photo/gallery/2.jpeg",
    "/assets/photo/gallery/3.png",
    "/assets/photo/gallery/4.png",
    "/assets/photo/gallery/5.png",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {data.map((img, index) => (
          <img key={index} src={img} alt={`Gallery image ${index + 1}`} />
        ))}
      </Slider>
    </div>
  );
}
