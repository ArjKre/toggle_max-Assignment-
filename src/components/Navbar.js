import React, { useState } from "react";
import "../styles/navbar.css";
import searchIcon from "../assets/Search.svg";
import notifiIcon from "../assets/notifications.svg";
import userIcon from "../assets/Ellipse 43.svg";
import logoutIcon from "../assets/move_item.svg";

function Navbar() {
  const [activeBtn, setActiveBtn] = useState("button2");

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="search-bar">
          <input placeholder="Search..."></input>
          <img id="search-icon" src={searchIcon} />
        </div>
        <div className="toggles">
          <button
            className={activeBtn === "button1" ? "active" : "inactive"}
            onClick={() => setActiveBtn("button1")}>
            Caregivers
          </button>
          <button
            className={activeBtn === "button2" ? "active" : "inactive"}
            onClick={() => setActiveBtn("button2")}>
            Institutions
          </button>
        </div>
      </div>
      <div className="nav-right">
        <div className="notif">
          <img src={notifiIcon} />
        </div>
        <div className="User">
          <img src={userIcon} />
          Revanth Prakash
        </div>
        <div className="log-out">
          <img src={logoutIcon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
