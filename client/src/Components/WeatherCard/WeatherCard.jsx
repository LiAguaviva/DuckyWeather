import './WeatherCard.css'
import React from 'react'

export const WeatherCard = ({data}) => {

  const celsius = Math.round(data.main.temp - 273.15);

  return (
     <div className='WeatherCard'>
      <div className='cardContent'>
        <p>{data.dt_txt.split(" ")[0]}</p>
        <p>{celsius}°C</p>
        <p>Humidity: {data.main.humidity}</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
      </div>
    </div>
  )
}
