import React, { useEffect, useState } from "react";
import "./App.css";
import TankVisualizer from "./components/TankVisualizer";
import WaterLevelCard from "./components/WaterLevelCard";
import WaterLevelChart from "./components/WaterLevelChart";
import TankLevelDisplay from "./components/TankLevelDisplay";
import { fetchLatestLevel, fetchTankInfo, fetchAllLevels } from "./services/api";

function App() {
  const [tank, setTank] = useState(null);
  const [levels, setLevels] = useState([]);

  const tankId = 1; // fijo porque estás usando un solo estanque

  const loadData = async () => {
    try {
      const tankInfo = await fetchTankInfo(tankId);
      const latest = await fetchLatestLevel(tankId);
      const all = await fetchAllLevels(tankId);
      setTank(tankInfo);
      setLevels(all);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000); // refrescar cada 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">💧 Monitor de Estanque</h2>
      {tank && <p><strong>{tank.name}</strong> – {tank.location}</p>}

      {levels[0] && <TankVisualizer level={levels[0].level_cm} />}
      {levels[0] && <TankLevelDisplay level={levels[0].level_cm} />}
      {levels[0] && <WaterLevelCard latest={levels[0]} />}
      {levels.length > 0 && <WaterLevelChart data={levels} />}
    </div>
  );
}

export default App;
