import React from 'react'
import { WeatherCard } from '../WeatherCard/WeatherCard'

export const Info = ({infoData}) => {

  return (
    <section className='infoSection'>
      <h2>{infoData?.cityName}</h2>
      <p>Population: {infoData?.population}</p>
      <section className='cardsContainer'>
        {infoData?.forecast?.map((elem) => {
          return(
            <WeatherCard key={elem.dt} data={elem}/>
          )
        })}
      </section>
    </section>
  )
}
