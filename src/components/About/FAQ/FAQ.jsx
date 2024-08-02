import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

export default function FAQ() {
  const { t } = useTranslation();
  const faqData = t("FAQ:FAQ", { returnObjects: true });

  const [activeIndex, setActiveIndex] = useState(null);

  if (!Array.isArray(faqData)) {
    return null;
  }

  const handleHeaderClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className={`title button ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleHeaderClick(index)}
          >
            {faq.title}
          </div>
          <div className={`content ${activeIndex === index ? "active" : ""}`}>
            <p className="text">{faq.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
