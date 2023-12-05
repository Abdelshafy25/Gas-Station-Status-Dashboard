import PMS from "./assets/PMS.svg";
import ControlRoom from "./assets/control-room.svg";
import Dashboard from "./assets//dashboard.svg";
import Elements from "./assets/elements.svg";
import Settings from "./assets/settings.svg";
import Notifications from "./assets/notifications.svg";
import Logout from "./assets/logout.svg";
import "./sidebar.css";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="container">
        <img src={PMS} alt="PMS" className="pms" />
      </div>

      <div className="middelContainer">
        <img src={ControlRoom} alt="control Room" />
        <img src={Dashboard} alt="control Room" />
        <img src={Elements} alt="control Room" />
        <img src={Settings} alt="control Room" />
        <img src={Notifications} alt="control Room" />
      </div>

      <img src={Logout} alt="logout" className="logout" />
    </div>
  );
}
