import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = ({data}) => {

    const finalData = data?.forecast?.map(e=>{
        return {
            name: e.dt_txt.split(" ")[0],
            temp: e.main.temp,
            hum: e.main.humidity
        }
    })
    

    return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={500}
            height={600}
            data={finalData}
            margin={{
              top: 100,
              bottom: 50
            }}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#b6ccaa' }} 
              stroke='#e8ede2'
            />
            <YAxis 
              tick={{ fill: '#b6ccaa' }} 
              stroke='#e8ede2'
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#efeb1d" 
              activeDot={{ r: 8 }} 
              strokeWidth={2}
            />
            <Line 
              type="monotone" 
              dataKey="hum" 
              stroke="#82ca9d" 
              strokeWidth={2}
            />
          </LineChart>

        </ResponsiveContainer>
      );
}
