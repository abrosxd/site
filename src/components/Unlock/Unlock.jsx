import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Unlock.css";
import LockSVG from "./assets/lock.svg";

function getTimeRemaining(endtime) {
  const [day, month, year, time, timezone] = endtime.split(" ");
  const [hours, minutes, seconds] = time.split(":");
  const timezoneOffset = parseInt(timezone.replace("UTC", ""));

  const formattedDeadline = new Date(
    Date.UTC(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours) - timezoneOffset,
      parseInt(minutes),
      parseInt(seconds)
    )
  );

  const t = formattedDeadline - new Date();

  if (isNaN(t)) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const secondsRemaining = Math.floor((t / 1000) % 60);
  const minutesRemaining = Math.floor((t / 1000 / 60) % 60);
  const hoursRemaining = Math.floor((t / (1000 * 60 * 60)) % 24);
  const daysRemaining = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: daysRemaining,
    hours: hoursRemaining,
    minutes: minutesRemaining,
    seconds: secondsRemaining,
  };
}

function useCountdown(deadline) {
  const [time, setTime] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    function updateClock() {
      const t = getTimeRemaining(deadline);
      setTime(t);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    const timeinterval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(timeinterval);
  }, [deadline]);

  return time;
}

export default function Unlock({ deadline }) {
  const { t } = useTranslation("Unlock");
  const time = useCountdown(deadline);

  return (
    <div className="unlock">
      <div className="block">
        <div className="icon">
          <img src={LockSVG} />
        </div>
        <div className="title">{t("title")}</div>
        <div className="deadline">
          <div className="countdown">
            <span className="h2 days">{time.days}</span>
            <div className="text-center">{t("days")}</div>
          </div>
          <div className="countdown">
            <span className="h2 hours">{("0" + time.hours).slice(-2)}</span>
            <div className="text-center">{t("hours")}</div>
          </div>
          <div className="countdown">
            <span className="h2 minutes">{("0" + time.minutes).slice(-2)}</span>
            <div className="text-center">{t("minutes")}</div>
          </div>
          <div className="countdown">
            <span className="h2 seconds">{("0" + time.seconds).slice(-2)}</span>
            <div className="text-center">{t("seconds")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
