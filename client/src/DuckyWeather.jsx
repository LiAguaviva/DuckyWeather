import React, { useState } from 'react'
import { FormApiweather } from './Components/FormApiweather/FormApiweather';
import { Chart } from './Components/Chart/Chart';
import { Info } from './Components/info/info';


export const DuckyWeather = () => {

  const [data, setData] = useState();

  const getHour = (string) => {
    return string.split(' ')[1]
  };

  const dataReducer = (dataToReduce) => {

    if (dataToReduce){
      let temp = dataToReduce.list.filter((elem) => getHour(elem.dt_txt) === '18:00:00')

       
      return {
        cityName: dataToReduce.city.name,
        population: dataToReduce.city.population,
        forecast: temp
      };
    };
  };
  
  
  return (
      <div className="ApiWeatherCont">

        <h1>DuckyWeather</h1>

        <FormApiweather 
          data={data}
          setData={setData}
        />

      {data &&
        <>
          <Info infoData={dataReducer(data)} />
          <Chart data={dataReducer(data)} />
        </>
      }
        
        
      </div>
  )
}
