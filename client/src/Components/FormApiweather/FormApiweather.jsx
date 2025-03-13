import axios from 'axios';
import React, { useState } from 'react'
import './FormApiweather.css'

const KEY  = import.meta.env.VITE_API_WEATHER_KEY;
const URL_Base  = import.meta.env.VITE_API_WEATHER_URL;

export const FormApiweather = ({ data, setData}) => {

  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    
    axios
    .get(`${URL_Base}?q=${city}&unit=metric&appid=${KEY}`)
    .then((res)=>{
      setData(res.data)
      setMessage('');
    })
    .catch((err)=>{
        setMessage(err.response.data.message)
    })

    setCity('');
  }

    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        onSubmit(e)
      }
    }

  return (
      <form className='formApiWeather'>
          <label 
            className='labelForm'
          >Write your city</label>
          <input
            placeholder='city'
            type="text"
            value={city}
            name='city'
            onChange={(e)=>setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={onSubmit} >accept</button>
          <p>{message}</p>
        </form>
  )
}
