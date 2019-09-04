import React from 'react';
import Day from './Day.js'
import './Forecast.css'


function Forecast(props){

    const check = props.list

    let date = check[0].dt_txt.split(" ")[0]
    let day = date.slice(date.length-2,date.length)
    let test_day;

    let days = []
    let dayObject = {dayOfTheMonth:day, threeHourWeather:[]}

    for (let i = 0; i < check.length; i++){

        date = check[i].dt_txt.split(" ")[0]
        test_day = date.slice(date.length-2,date.length)

        if (test_day !== day){
            days.push(dayObject)
            day = test_day
            dayObject = {dayOfTheMonth:day, threeHourWeather:[]}
            dayObject.threeHourWeather.push(check[i])
        } else {
            dayObject.threeHourWeather.push(check[i])
        }
    }
    console.log(days)

    const content = days.map( (day) =>
        <Day key={day.dayOfTheMonth} day={day.dayOfTheMonth} threeHourWeather={day.threeHourWeather} />
    )

    return (
        <div className="Forecast">
            <h1>{props.name}</h1>
            {content}
        </div>
    )
}

export default Forecast
