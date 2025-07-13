import React from "react";

const WaterLevelCard = ({ latest }) => {
  if (!latest) {
    return (
      <div className="card p-3 mb-3">
        <h4>📡 Nivel actual del agua</h4>
        <p>Cargando datos...</p>
      </div>
    );
  }

  const { level_cm, timestamp } = latest;

  // Determinar el estado del nivel
  let estado = "Normal";
  let color = "green";
  let icono = "🟢";

  if (level_cm < 60) {
    estado = "Bajo";
    color = "red";
    icono = "🔴";
  } else if (level_cm > 78) {
    estado = "Alto";
    color = "orange";
    icono = "🟠";
  }

  return (
    <div className="card p-3 mb-3">
      <h4>📡 Nivel actual del agua</h4>
      <p><strong>Altura:</strong> {level_cm} cm</p>
      <p><strong>Estado:</strong> <span style={{ color }}>{icono} {estado}</span></p>
      <p><small>{new Date(timestamp).toLocaleString()}</small></p>
    </div>
  );
};

export default WaterLevelCard;
