import React from 'react'

function Temperature(props){
    return (
        <div>
            <div>Temp: {props.temp}</div>
            <div>Temp Min: {props.temp_min}</div>
            <div>Max: {props.temp_max}</div>
        </div>
    )
}


export default Temperature
