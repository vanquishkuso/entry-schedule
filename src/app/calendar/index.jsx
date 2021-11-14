import React, { useState, useEffect } from "react";
import "./styles.css";
import buildCalendar from "./build";
import dayStyles, { beforeToday } from "./styles";
import Header from "./header";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);
  const [available, setAvailable] = useState([
    "Mon Nov 15 2021",
    "Wed Nov 17 2021",
  ]);
  const [full, setFull] = useState(["Fri Nov 26 2021", "Mon Nov 29 2021"]);
  const [lowAvailability, setLowAvailability] = useState([
    "Thu Nov 18 2021",
    "Fri Nov 19 2021",
  ]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  useEffect(() => {
    console.log(getDate);
  }, [value]);

  const getDate = value._d.toString().split(" ").splice(-0, 4).join(" ");

  // day._d.toString().split(" ").splice(-0, 4).join(" ")
  const checkAvailability = (day) => {
    if (
      available.includes(day._d.toString().split(" ").splice(-0, 4).join(" "))
    ) {
      return "day available";
    }
    if (full.includes(day._d.toString().split(" ").splice(-0, 4).join(" "))) {
      return "day full";
    }
    if (
      lowAvailability.includes(
        day._d.toString().split(" ").splice(-0, 4).join(" ")
      )
    ) {
      return "day low";
    }
    else {
      return "day"
    }
  };

  return (
    <div className="calendar">
      <Header value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["mån", "tis", "ons", "tor", "fre", "lör", "sön"].map((day, i) => (
            <div className="week" key={day + i + i}>
              {day}
            </div>
          ))}
        </div>
        {calendar.map((week, i) => (
          <div key={week + i}>
            {week.map((day, i) => (
              <div
                className={`${checkAvailability(day)}`}
                onClick={() => !beforeToday(day) && onChange(day)}
                key={day + i}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
