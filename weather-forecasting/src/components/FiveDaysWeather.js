import React from 'react'

export default function FiveDaysWeather({weather}) {
  const list = weather.forecast.forecastday.map(({date,day})=> <div className="days">
    <h3>{day.avgtemp_c} <sup>o</sup> C</h3> <img src={day.condition.icon} alt="" /> <h4>{day.condition.text}</h4> {date}</div>)
  return (
    <>
        <h1>Daily</h1>
    <div className='five-day'>
        
      {list}
    </div>
    </>
  )
}
