import React from "react";
import swapIcon from "../assets/dashboard/Swap.svg";
import "../styles/card.css";
import { useState } from "react";

function Card({ title, iconSrc, value, percentage, precentColor }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? "#0329e8" : "#1a1e30" }}>
      <div className="card-header">
        {title}
        <img src={iconSrc} />
      </div>
      <div
        className="card-body"
        style={{ color: isHovered ? "#EFFFF7" : "#17b1ea" }}>
        {value}
      </div>
      <div className="card-footer">
        <span style={{ color: isHovered ? "#EFFFF7" : precentColor }}>
          {percentage}
        </span>
        <img src={swapIcon} />
      </div>
    </div>
  );
}

export default Card;
