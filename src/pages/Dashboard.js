import React from "react";
import "../styles/dashboard.css";
import alertIcon from "../assets/release_alert.svg";
import Card from "../components/Card";

import orderIcon from "../assets/dashboard/3 User.svg";
import eyeIcon from "../assets/dashboard/Show.svg";
import chartIcon from "../assets/dashboard/Chart.svg";

const Dashboard = () => {
  const cardData = [
    {
      title: "Orders",
      iconSrc: orderIcon,
      value: "926",
      percentage: "+3,840 (26,80%)",
      precentColor: "#00DE73",
    },
    {
      title: "Institutions",
      iconSrc: eyeIcon,
      value: "38+",
      percentage: "+20 (49%)",
      precentColor: "#00DE73",
    },
    {
      title: "Caregivers",
      iconSrc: chartIcon,
      value: "2300+",
      percentage: "-0.74 (0.74%)",
      precentColor: "#F52D20",
    },
    {
      title: "Rentals",
      iconSrc: chartIcon,
      value: "100+",
      percentage: "-0.74 (0.74%)",
      precentColor: "#F52D20",
    },
  ];

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
        <div className="professional-section">
          <div className="title">Professional Dashboard</div>
          <div className="cards">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                iconSrc={card.iconSrc}
                value={card.value}
                percentage={card.percentage}
                precentColor={card.precentColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
