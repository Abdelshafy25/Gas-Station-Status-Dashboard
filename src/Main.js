import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import GasStation from "./assets/gas-station-svgrepo-com.svg";
import Gas from "./assets/gas-station-svgrepo-com-orange.svg";
import Dots from "./assets/three-dots-line-svgrepo-com.svg";
import { useState } from "react";
import ApexChart from "./apxchart";
import ReactApexChart from "./radarChart";
// import Radar from "./assets/basic-bar.svg";

// const stats = [
//   { num: "71,028", unit: "EGP", name: "Total Value", precent: "2%", },
// ];

export function Main({ stats }) {
  const [graphOpened, setGraphOpened] = useState(false);
  const [listOpened, setListOpened] = useState(true);

  const backgroundListBtn = listOpened ? { background: "#ff7f5c" } : {};
  const backgroundGraphBtn = graphOpened ? { background: "#ff7f5c" } : {};

  return (
    <div className="main">
      <div>
        <ul>
          {stats.map((item) => (
            <Item item={item} key={item.type} />
          ))}

          <div className="btnsContainer">
            <button
              onClick={() => {
                setGraphOpened(true);
                setListOpened(false);
              }}
              style={backgroundGraphBtn}
            >
              <FontAwesomeIcon
                icon={faChartSimple}
                size="lg"
                style={{ color: "#3d5161" }}
              />{" "}
              GRAPH
            </button>
            <button
              onClick={() => {
                setGraphOpened(false);
                setListOpened(true);
              }}
              style={backgroundListBtn}
            >
              <FontAwesomeIcon
                icon={faList}
                size="lg"
                style={{ color: "#3d5161" }}
              />{" "}
              LIST
            </button>
          </div>
        </ul>

        <div className="stations">
          {graphOpened ? (
            <ApexChart />
          ) : (
            <>
              <Station />
              <Station />
              <Station />
              <Station />
              <Station />
            </>
          )}
        </div>
      </div>

      <div className="chartSection">
        <div className="sales">Hourly Sales</div>
        <div className="radarchart">
          <ReactApexChart />
        </div>
        <div className="salesbystation">Sales by Station</div>
        <div className="progress">
          <div className="progressStation">
            <div className="progressStationInfo">
              <div className="group">
                <img
                  src={GasStation}
                  alt="station logo"
                  className="staionIcon"
                />

                <div className="stationName">Station Name</div>
              </div>
              <div className="salesprogress">
                62,721m<sup>3</sup>
              </div>
            </div>
            <div className="progressBar">
              <div className="barHolder"></div>
              <div className="barprogres"></div>
            </div>
          </div>

          <div className="progressStation">
            <div className="progressStationInfo">
              <div className="group">
                <img
                  src={GasStation}
                  alt="station logo"
                  className="staionIcon"
                />

                <div className="stationName">Station Name</div>
              </div>
              <div className="salesprogress">
                62,721m<sup>3</sup>
              </div>
            </div>
            <div className="progressBar">
              <div className="barHolder"></div>
              <div className="barprogres"></div>
            </div>
          </div>

          <div className="progressStation">
            <div className="progressStationInfo">
              <div className="group">
                <img
                  src={GasStation}
                  alt="station logo"
                  className="staionIcon"
                />

                <div className="stationName">Station Name</div>
              </div>
              <div className="salesprogressoff">NM</div>
            </div>
            <div className="progressBar">
              <div className="barHolderoff"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={{ background: item.background }}>
      <div className="values">
        <div className="numbers">{item.num}</div>
        <div className="unit">
          {item.unit}
          <sup>{item.sup}</sup>
        </div>
      </div>
      <div className="type">
        {item.type} <span>{item.typeSpan}</span>
      </div>
      <div className="precent" style={{ color: item.color }}>
        <span className="shape" style={{ color: item.color }}></span>
        <span className="text">
          {item.precent}
          <sup>{item.sup}</sup>
        </span>
      </div>
    </li>
  );
}

function Station() {
  const [windowOpened, setWindowOpened] = useState(false);
  return (
    <>
      <div className="stationInfo">
        <div className="firstRow">
          <div className="info">
            <div className="circle2"></div>
            <img src={Gas} alt="gas" className="stationlogo2" />
            <div className="stationName">STATION NAME</div>
          </div>
          <img
            src={Dots}
            alt="dots"
            className="dots"
            onClick={() => {
              setWindowOpened(!windowOpened);
            }}
          />
        </div>
        {windowOpened ? (
          <div className="window">
            <div className="title">View Properties:</div>

            <div className="windowGrid">
              <div>
                <input type="checkbox" id="sales" name="sales" />
                <span class="checkmark"></span>
                <label for="sales">Total sales</label>
              </div>
              <div>
                <input type="checkbox" id="hour" name="hour" />
                <span class="checkmark"></span>
                <label for="hour">Max transaction count per hour</label>
              </div>
              <div>
                <input type="checkbox" id="transaction" name="transaction" />
                <span class="checkmark"></span>
                <label for="transaction">Total transaction</label>
              </div>
              <div>
                <input type="checkbox" id="date-time" name="date-time" />
                <span class="checkmark"></span>
                <label for="date-time">Max transaction count date-time</label>
              </div>
              <div>
                <input type="checkbox" id="value" name="value" />
                <span class="checkmark"></span>
                <label for="value">Total value</label>
              </div>
              <div>
                <input type="checkbox" id="status" name="status" />
                <span class="checkmark"></span>
                <label for="status">Compressor status</label>
              </div>
            </div>
          </div>
        ) : (
          false
        )}

        <hr></hr>

        <div className="grid">
          <div className="gridItem">
            <div>Total Sales</div>
            <div>
              62,721 <sub>m</sub>
              <sup>3</sup>
            </div>
          </div>

          <div className="gridItem">
            <div>Compression State</div>
            <div>Compression</div>
          </div>

          <div className="gridItem">
            <div>Max Transaction / hour</div>
            <div>20</div>
          </div>

          <div className="gridItem">
            <div>Total Value</div>
            <div>550 EGP</div>
          </div>

          <div className="gridItem">
            <div>Total Transaction Count</div>
            <div>5161</div>
          </div>

          <div className="gridItem">
            <div>Max Transaction Date-Time</div>
            <div>8-1-2021 | 10:16 PM</div>
          </div>
        </div>
      </div>
    </>
  );
}
