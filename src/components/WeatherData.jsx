import rainIcon from "../assets/rain.png";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzleIcon from "../assets/drizzle.png";
import humidityIcon from "../assets/humidity.png";
import windIcon from "../assets/wind.png";
import winterIcon from "../assets/winter.png";
import mistIcon from "../assets/mist.png";

const WeatherData = ({
  temperature,
  cityName,
  country,
  latitude,
  longitude,
  humidity,
  windSpeed,
  cod,
  weather,
  loading,
}) => {

  if (cod == 400) {
    return <div className="weather-wait">
    <p>Please Enter A City Name..</p>
</div>;
  } else if (cod == 404) {
    return <div className="weather-wait">
        <p>City Not Found</p>
    </div>;
  } else if (loading) {
    return <p className="weather-wait">Please Wait...</p>;
  };

  const weatherIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": clearIcon,
    "02n": clearIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": cloudIcon,
    "04n": cloudIcon,
    "09n": drizzleIcon,
    "09d": drizzleIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "11d": rainIcon,
    "11n": rainIcon,
    "13d": winterIcon,
    "13n": winterIcon,
    "50d": mistIcon,
    "50n": mistIcon,
  };

  return (
    <div className="weather-container">
      <div className="head">
        <img
          className="weather-icon"
          src={weatherIcons[weather[0].icon]}
          alt="weather-icon"
        />
        <div className="temp">{temperature}°C</div>
        <div className="city">{cityName}</div>
        <div className="country">{country}</div>
      </div>
      <hr />
      <div className="coordinates">
        <div className="latitude">
          <div>latitud</div>
          <div>{latitude}</div>
        </div>
        <div className="longitude">
          <div>longitude</div>
          <div>{longitude}</div>
        </div>
      </div>
      <hr />
      <div className="status">
        <div className="humidity">
          <img className="status-icon" src={humidityIcon} alt="" />
          <div>{humidity} %</div>
          <div className="status-text">Humidity</div>
        </div>
        <div className="wind-speed">
          <img className="status-icon" src={windIcon} alt="" />
          <div>{windSpeed} km/h</div>
          <div className="status-text">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
