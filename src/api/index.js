
const apiKey = "8dc57cc9c86d270d365d053878b2d361";

const fetchWeather = async city => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=${apiKey}`
    );
    const data = await response.json();
    if(response.status >= 400) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchCity = async value => {
  const response = await fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value})
  });
  const data = await response.json();
  if(response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
}

export { fetchWeather, fetchCity };