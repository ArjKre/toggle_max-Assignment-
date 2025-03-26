import React from "react";
import "../styles/dashboard.css";
import alertIcon from "../assets/release_alert.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="notification-section">
          <div className="title">Notifications</div>
          <div className="alert-cnct">
            <div className="alert-msg">
              <div className="alert-icon">
                <img src={alertIcon} />
              </div>
              <p>
                Hi Admin, You have a 90+ requests from caregivers and
                institutions. Please click this ribbon and make an action
              </p>
            </div>
            <button className="request-btn">View Requests</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
