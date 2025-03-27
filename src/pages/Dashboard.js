import React from "react";
import "../styles/dashboard.css";
import alertIcon from "../assets/release_alert.svg";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper.js";

import orderIcon from "../assets/dashboard/3 User.svg";
import eyeIcon from "../assets/dashboard/Show.svg";
import chartIcon from "../assets/dashboard/Chart.svg";

import lineChart from "../assets/dashboard/graphs/user_stat.svg";
import semiCircleChart from "../assets/dashboard/graphs/earning_stat.svg";

import rateBulletChart from "../assets/dashboard/graphs/values.svg";
import resultBulletChart from "../assets/dashboard/graphs/data.svg";

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
        <div className="statistic-section">
          <div className="title">Statistics</div>
          <div className="statistic-cards">
            <Wrapper style={{ display: "flex" }}>
              <div className="wrapper-flx">
                <div className="statistic-card-header">
                  <span>Users Statistics</span>
                </div>
              </div>
              <img className="linechart" src={lineChart} alt="chart image" />
              <hr
                style={{
                  width: "100%",
                  margin: "0",
                  border: "none",
                  borderTop: "0.5px solid #FFFFFF0F",
                }}
              />
              <div className="wrapper-flx-2">
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#A9DFD8",
                      borderRadius: "50%",
                      marginRight: "3px",
                    }}></span>
                  <span className="text">Last Month</span>
                  <br />
                  <span className="amount">$4,087</span>
                </div>
                <div className="line"></div>
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#F2C8ED",
                      borderRadius: "50%",
                      marginRight: "3px",
                    }}></span>
                  <span className="text">This Month</span>
                  <br />
                  <span className="amount">$5,506</span>
                </div>
              </div>
            </Wrapper>
            <Wrapper>
              <div className="wrapper-flx-3">
                <div className="statistic-card-header">
                  <span>Earnings</span>
                </div>
                <span className="subheading">Total Expense</span>
                <span className="expense">$6078.76</span>
                <span className="detail">
                  Profit is 48% More than last Month
                </span>
                <img
                  style={{ paddingTop: "122px", margin: "0 auto" }}
                  src={semiCircleChart}
                  alt="earnings chart"
                />
              </div>
            </Wrapper>
            <Wrapper>
              <div style={{ paddingBottom: "14%" }} className="wrapper-flx">
                <div className="statistic-card-header">
                  <span>Top Institutions</span>
                </div>
              </div>
              <div style={{ overflowX: "hidden" }}>
                <img
                  style={{
                    padding: "0 20px",
                    maxWidth: "100%",
                  }}
                  src={rateBulletChart}
                  alt="rate bullet chart"
                />
                <img src={resultBulletChart} alt=" bullet chart" />
              </div>
              <div className="flx-4">
                <div className="data">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#4072EE",
                        borderRadius: "50%",
                        marginRight: "3px",
                      }}></span>
                    <span>Sebi Pharma</span>
                  </div>
                  <span style={{ fontWeight: "700" }}>
                    81.57% Earning Growth
                  </span>
                </div>
                <div className="data">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#B558F6",
                        borderRadius: "50%",
                        marginRight: "3px",
                      }}></span>
                    <span>Jovan Medical, Germany</span>
                  </div>
                  <span style={{ fontWeight: "700" }}>
                    63.25% Earning Growth
                  </span>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
