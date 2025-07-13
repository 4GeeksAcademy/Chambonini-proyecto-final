import axios from "axios";

const API_BASE = "https://special-fortnight-6jjww47q4g725w6w-5000.app.github.dev";

export const getLevels = async (tankId = 1) => {
  const res = await axios.get(`${API_BASE}/tanks/${tankId}/levels`);
  return res.data;
};

export const getTankInfo = async () => {
  const res = await axios.get(`${API_BASE}/tanks`);
  return res.data[0];
};
