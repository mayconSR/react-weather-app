import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// Carregue as variáveis de ambiente

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [userInput, setUserInput] = useState("");

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no&lang=pt`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData(userInput);
  };

  useEffect(() => {
    fetchWeatherData("São Paulo");
  }, []);

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Digite o nome da cidade"
          />
          <button type="submit">Consultar</button>
        </form>
        {weatherData && (
          <div className="card">
            <h2>
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <h3>{weatherData.current.condition.text}</h3>
              <p>Temperatura: {weatherData.current.temp_c}°C</p>
              <p>Sensação térmica: {weatherData.current.feelslike_c}°C</p>
              <p>Umidade: {weatherData.current.humidity}%</p>
              <p>Velocidade do vento: {weatherData.current.wind_kph} km/h</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;