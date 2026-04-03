const button = document.getElementById("searchBtn");

button.addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "807ff0c56c7da56d70a251de415110f7";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod != 200) {
    alert(data.message);
    return;
  }

  const condition = data.weather[0].main.toLowerCase();
const weatherIcon = document.getElementById("weatherIcon");

console.log(condition);

if (condition.includes("clear")) {
  weatherIcon.innerText = "☀️";
  document.body.style.background =
  "linear-gradient(to right, #ff9966, #ff5e62)";
} 
else if (condition.includes("rain")) {
  weatherIcon.innerText = "🌧️";
  document.body.style.background =
    "linear-gradient(to right, #4b79a1, #283e51)";
} 
else if (condition.includes("drizzle")) {
  weatherIcon.innerText = "🌦️";
  document.body.style.background =
    "linear-gradient(to right, #89f7fe, #66a6ff)";
} 
else if (condition.includes("thunderstorm")) {
  weatherIcon.innerText = "⛈️";
  document.body.style.background =
    "linear-gradient(to right, #232526, #414345)";
} 
else if (condition.includes("snow")) {
  weatherIcon.innerText = "❄️";
  document.body.style.background =
    "linear-gradient(to right, #e6dada, #274046)";
} 
else if (condition.includes("cloud")) {
  weatherIcon.innerText = "☁️";
  document.body.style.background =
    "linear-gradient(to right, #bdc3c7, #2c3e50)";
} 
else {
  weatherIcon.innerText = "🌤️";
}
  document.getElementById("cityName").innerText = data.name;
  document.getElementById("temperature").innerText =
    `Temperature: ${data.main.temp}°C`;

  document.getElementById("humidity").innerText =
    `Humidity: ${data.main.humidity}%`;

  document.getElementById("wind").innerText =
    `Wind Speed: ${data.wind.speed} km/h`;
    
});
document.getElementById("cityInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
  }
});
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});