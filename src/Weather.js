import React from 'react';

import WeatherDescription from './WeatherDescription.js'
import Atmosphere from './Atmosphere.js'
import Temperature from './Temperature.js'
import './Weather.css'


function Weather (props){
    let content = null;
    if (props.weather && props.main) {
        const { main, description, icon } = props.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = props.main
        content = (
            <div className="weatherInfo">
                <h1>{props.time}</h1>
                <WeatherDescription main={main} description={description} icon={icon} />
                <Temperature temp={temp}  temp_min={temp_min} temp_max={temp_max}  />
                <Atmosphere pressure={pressure} humidity={humidity} />
            </div>
        )
    }
    return content
}


export default Weather
