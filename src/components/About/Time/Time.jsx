import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Time.css";

export default function Time() {
  const { t } = useTranslation("About");

  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const updateDateTime = () => {
    const nowInWarsaw = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw" })
    );
    const daysOfWeek = t("Time.days", { returnObjects: true });
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
    <>
      <div className="mytime">
        <span className="title">{t("Time.title")}</span>
        <span
          className="tag"
          style={{ backgroundColor: "#a8cfff80", color: "#0051ff" }}
        >
          Warszawa
        </span>
      </div>
      <div className="timeblock">
        <div className="date">
          <p className="day">{currentDay}</p>
          <p>{currentDate}</p>
        </div>
        <div className="time">
          <span>{currentTime}</span>
        </div>
      </div>
    </>
  );
}
