import React from "react";
import "../styles/sidebar.css";
import logoImg from "../assets/Frame 29047.jpg";
import { Link } from "react-router-dom";
import heartIcon from "../assets/sidebar/Heart.svg";
import CalendarIcon from "../assets/sidebar/Calendar.svg";
import WorkIcon from "../assets/sidebar/Work.svg";
import CategoryIcon from "../assets/sidebar/Category.svg";
import TwoUserIcon from "../assets/sidebar/2User.svg";
import SettingsIcon from "../assets/sidebar/Settings.svg";
import AboutIcon from "../assets/sidebar/About.svg";
import VideoIcon from "../assets/sidebar/Video.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logoImg} alt="logo Img" />
      </div>
      <div className="main-menu">
        <div className="sidebar-title">MAIN MENU</div>
        <ul>
          <li>
            <div className="links">
              <Link className="link-item" to="/" style={{ color: "#42BBFF" }}>
                <img src={CategoryIcon} alt="Category Icon" />
                Dashboard
              </Link>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={WorkIcon} alt="Work Icon" />
                Requests
              </Link>
              <div className="sidebar-notif">3 new</div>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={WorkIcon} alt="Work Icon" />
                Medicine Management
              </Link>
              <div className="sidebar-notif">3 new</div>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={CalendarIcon} alt="Calendar Icon" />
                Appointment / Booking
              </Link>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={heartIcon} alt="Heart Icon" />
                Rental Management
              </Link>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={heartIcon} alt="Heart Icon" />
                Lab Tests
              </Link>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={WorkIcon} alt="Work Icon" />
                User Management
              </Link>
              <div className="sidebar-notif">3 new</div>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={TwoUserIcon} alt="2User Icon" />
                Doctors
              </Link>
              <div
                className="sidebar-notif"
                style={{ backgroundColor: "#F52D20", color: "#fff" }}>
                10+
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="works">
        <br />
        <div className="sidebar-title">WORKS</div>
        <ul>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={VideoIcon} alt="Video Icon" />
                Communications
              </Link>
            </div>
          </li>
        </ul>
        <br />
      </div>
      <div className="options">
        <div className="sidebar-title">OPTIONS</div>
        <ul>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={SettingsIcon} alt="Settings Icon" />
                Settings
              </Link>
            </div>
          </li>
          <li>
            <div className="links">
              <Link className="link-item" to="/">
                <img src={AboutIcon} alt="About Icon" />
                About
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
