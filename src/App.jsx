import searchIcon from "./assets/search.png";
import WeatherData from "./components/WeatherData.jsx";
import { API_KEY } from "./components/data.js";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    coord: "",
    sys: "",
    main: "",
    wind: "",
    cod: "400",
  });

  const { name: cityName, coord, sys, main, wind, cod, weather } = data;


  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      if (city) {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=Metric`
        )
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) =>
            console.log("Error Fetching Weather Data", error.message)
          );
      }
    } catch (error) {
      console.log("Error Fetching Weather Data", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeatherData();
    }
  };

  return (
    <>
      <h1 className="heading">City Weather App</h1>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div>
            <img
              onClick={fetchWeatherData}
              src={searchIcon}
              className="searchIcon"
              alt="searchIcon"
            />
          </div>
        </div>
        <WeatherData
          temperature={main?.temp}
          cityName={cityName}
          country={sys?.country}
          latitude={coord?.lat}
          longitude={coord?.lon}
          humidity={main?.humidity}
          windSpeed={wind?.speed}
          cod={cod}
          weather={weather}
          loading={loading}
        />
        <div className="credit">Design by Thangapandi K</div>
      </div>
    </>
  );
};

export default App;
