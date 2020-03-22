import React,{useState} from 'react';
import './App.css';
import Form from '../components/Form';
import Weather from '../components/Weather';

function App() {
  const [weather,setWeather] = useState([])
  const API_KEY = `9e21eecdf587c32af6325f3e4e1aec1c`

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`)
    .then( res => res.json())
    .then(data => data)
    if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error:""
      }
      )} else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error:"Please enter a city and country"
      })
    }
  }

  return (
    <div className="App">
      <h3>WEATHER APP</h3>
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
