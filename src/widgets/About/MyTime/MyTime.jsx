import "./MyTime.css";

export default function MyTime() {
  return (
    <>
      <div style={{ alignSelf: "center", display: "flex" }}>
        <span style={{ marginRight: "5px" }}>Мое время</span>
        <span
          className="tag"
          style={{ backgroundColor: "#a8cfff80", color: "#0051ff" }}
        >
          Warszawa
        </span>
      </div>
      <div className="timeblock">
        <div className="date">
          <p className="day">ЧТ</p>
          <p>09/03</p>
        </div>
        <div className="time">
          <span>15:01:36</span>
        </div>
      </div>
    </>
  );
}
