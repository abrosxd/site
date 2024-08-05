import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import Transition from "../../components/Transition/Transition";

import MyTime from "../../components/About/Time/Time";
import Reviews from "../../components/About/Reviews/Reviews";
import FAQ from "../../components/About/FAQ/FAQ";
import Gallery from "../../components/About/Gallery/Gallery";
import Stack from "../../components/About/Stack/Stack";
import Documents from "../../components/About/Documents/Documents";

const About = () => {
  const { t } = useTranslation("About");
  return (
    <main className="about">
      <div className="grid grid-cols gap-4">
        <div className="flex flex-col gap-4">
          <div className="card">
            <div className="hello">
              <img src="/assets/about/me.jpg" alt="Me" />
              <p>{t("hello")}</p>
            </div>
          </div>

          <div className="card">
            <MyTime />
          </div>

          <div className="card">
            <span>{t("reviews")}</span>
            <div className="reviews">
              <Reviews />
            </div>
          </div>

          <div className="card">
            <span>{t("faq")}</span>
            <div className="faq">
              <FAQ />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="card">
            <span>{t("gallery")}</span>
            <div className="gallery">
              <Gallery />
            </div>
          </div>

          <div className="card">
            <span>{t("stack")}</span>
            <div className="stack">
              <Stack />
            </div>
          </div>

          <div className="card">
            <span>{t("documents")}</span>
            <div className="documents">
              <Documents />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Transition(About);
