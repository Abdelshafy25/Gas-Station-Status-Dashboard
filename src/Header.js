import "./header.css";
import GasStation from "./assets/gas-station-svgrepo-com.svg";
import Reload from "./assets/refresh-svgrepo-com.svg";
import Calender from "./assets/calendar-date-schedule-svgrepo-com.svg";
import Clock from "./assets/clock-four-thirty-svgrepo-com.svg";
import { useState } from "react";

export function Header() {
  const [today, setToday] = useState(true);
  const [yesterday, setYesterday] = useState(false);
  const [lastWeak, setLastWeak] = useState(false);

  return (
    <div className="header">
      <div className="monitoredStation">
        <div className="monitoredStation_Container">
          <div className="circle"></div>
          <img src={GasStation} alt="Gas Station" className="stationLogo" />
          <div className="stationNum">2/3</div>
          <div className="textContainer">
            <div>Monitered</div>
            <div>station</div>
          </div>
        </div>

        <div className="monitoredStation_Container">
          <div className="circle"></div>
          <img src={Reload} alt="Gas Station" className="stationLogo" />
          <div className="stationNum">2/3</div>
          <div className="textContainer">
            <div>Monitered</div>
            <div>station</div>
          </div>
        </div>
      </div>
      <div className="daysContainer">
        <div
          className={today ? "active" : ""}
          onClick={() => {
            setToday(true);
            setYesterday(false);
            setLastWeak(false);
          }}
        >
          TODAY
        </div>
        <div
          className={yesterday ? "active" : ""}
          onClick={() => {
            setToday(false);
            setYesterday(true);
            setLastWeak(false);
          }}
        >
          YESTERDAY
        </div>
        <div
          className={lastWeak ? "active" : ""}
          onClick={() => {
            setToday(false);
            setYesterday(false);
            setLastWeak(true);
          }}
        >
          LAST WEAK
        </div>
      </div>

      <div className="dateBox">
        <div className="arrow-right"></div>
        <input type="text" placeholder="start date-time" />
        <img src={Calender} alt="calender" className="calender" />
        <img src={Clock} alt="clock" className="clock" />
      </div>

      <div className="dateBox">
        <div className="rec"></div>
        <input type="text" placeholder="End date-time" />
        <img src={Calender} alt="calender" className="calender" />
        <img src={Clock} alt="clock" className="clock" />
      </div>
    </div>
  );
}
