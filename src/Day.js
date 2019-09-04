import React from 'react'

import Weather from './Weather.js'

import './Day.css'


function Day(props){

    const content = props.threeHourWeather.map( (item) =>
        <Weather key={item.dt_txt} time={item.dt_txt.split(" ")[1]} weather={item.weather} main={item.main} />
    )
    return (
        <div className="Day">
            <h1>{props.day}</h1>
            {content}
        </div>
    )
}



export default Day
