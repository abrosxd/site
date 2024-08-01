import React from "react";
import "./Reviews.css";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  const { t } = useTranslation();
  const reviewsData = t("Reviews:Reviews", { returnObjects: true });

  if (!Array.isArray(reviewsData)) {
    return null;
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="reviews-container">
      <Slider {...settings}>
        {reviewsData.map((review, index) => (
          <div key={index} className="review">
            <span className="name">{review.name}</span>
            <span className="text">«{review.text}»</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
