import React from "react";
import "./TankVisualizer.css";

const TankVisualizer = ({ level }) => {
  const height = Math.min(100, Math.max(0, level));
  const percentage = (height / 100) * 100;

  return (
    <div className="tank-container">
      <div className="tank">
        <div className="water" style={{ height: `${percentage}%` }} />
        <span className="level-text">{height} cm</span>
      </div>
    </div>
  );
};

export default TankVisualizer;
