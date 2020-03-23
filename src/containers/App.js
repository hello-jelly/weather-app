import React, { useState } from 'react';
import './App.css';
// import '../reset.css';
import Header from '../components/header/Header';
import Form from '../components/Form';
import Weather from '../components/Weather';

function App() {
  const [weather, setWeather] = useState([])
  const API_KEY = `9e21eecdf587c32af6325f3e4e1aec1c`

  // console.log('We should get values', weather, setWeather)

  async function fetchData(e) {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(data => data)

    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9 / 5 - 459.67),
        error: ""
      }
      )
    } else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: "Please enter a city and country"
      })
    }
  }

  return (
      <div className="App">
        <Header />
        <Form getWeather={fetchData} />
        <Weather
          city={weather.city}
          country={weather.country}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />
        {console.log(weather.data)}
      </div>
  );
}

export default App;
