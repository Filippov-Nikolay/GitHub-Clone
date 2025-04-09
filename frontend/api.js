const API_BASE = process.env.REACT_APP_API_URL;

export async function getWeather() {
  const res = await fetch(`${API_BASE}/weather`);
  return await res.json();
}

export async function getUsers() {
  const res = await fetch(`${API_BASE}/users`);
  return await res.json();
}
