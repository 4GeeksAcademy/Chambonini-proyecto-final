import React from "react";
import "./TankLevelDisplay.css";

const TankLevelDisplay = ({ level }) => {
  const getStatus = (threshold) => (level >= threshold ? "on" : "off");

  return (
    <div className="tank-diagram">
      <h5>🔌 Indicador de Nivel</h5>
      <div className="leds">
        <div className={`led ${getStatus(100)}`}>100%</div>
        <div className={`led ${getStatus(80)}`}>80%</div>
        <div className={`led ${getStatus(60)}`}>60%</div>
        <div className={`led ${getStatus(40)}`}>40%</div>
        <div className={`led ${getStatus(20)}`}>20%</div>
      </div>
    </div>
  );
};

export default TankLevelDisplay;
