
const apiKey = "8dc57cc9c86d270d365d053878b2d361";

const fetchWeather = async city => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=${apiKey}`
  );
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchWeather };