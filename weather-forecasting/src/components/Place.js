import React from 'react'
import { getWeather } from '../API/fetchAPI'

export default function Place({address,getData}) {
  const handleClick = async(location) =>{
    const weatherData = await getWeather(location);
    getData(weatherData);
  }

    const city = address && address.map(({lat,lon,name,country})=> 
        <div className="city-details" key={name} onClick={()=>handleClick({lat,lon})}>{name} ,{country} position: {lat.toFixed(3)},{lon.toFixed(3)}</div>
    )
  return (
    <>
      {city}
    </>
  )
}
