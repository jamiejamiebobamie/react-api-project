import React from 'react';

import WeatherDescription from './WeatherDescription.js'
import Atmosphere from './Atmosphere.js'
import Temperature from './Temperature.js'
import './Weather.css'


function Weather (props){

    const { main, description, icon } = props.weather
    const { temp, pressure, humidity, temp_min, temp_max } = props.main

    const content = (
        <div className="weatherInfo">
            <WeatherDescription main={main} description={description} icon={icon} />
            <Temperature temp={temp}  temp_min={temp_min} temp_max={temp_max}  />
            <Atmosphere pressure={pressure} humidity={humidity} />
        </div>
    )

    return content

}


export default Weather
