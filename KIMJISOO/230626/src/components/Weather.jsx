import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const API_KEY = "92458b8460ef057c6345ba0532fe4491";

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${temperature} @ ${place}`);
      });
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    console.log("failed!");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };
  useEffect(() => {
    askForCoords();
  }, []);

  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}

export default Weather;
