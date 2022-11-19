import React from 'react'

export default function TodaysWeather({weather}) {
  console.log(weather);
  return (
    <div className='Today'>
      <h1>Today</h1>
      <div className="today-weather">
        <div className="basic-weather">
            <h2> {weather.current.temp_c} <sup>o</sup> C</h2>
            <div className='condition'> {weather.current.condition.text} <img src={weather.current.condition.icon} className='weather-icon' alt="weather-icon" /></div>
            <div className="day">{weather.current.last_updated}</div>
        </div>
        <ul className="details-weather">
            <li className="items">Humidity : {weather.current.humidity}</li>
            <li className="items">Pressure : {weather.current.pressure_in}</li>
            <li className="items">Wind Speed : {weather.current.wind_kph}</li>
            <li className="items">Wind Direction : {weather.current.wind_dir}</li>
        </ul>
      </div>
    </div>
  )
}
