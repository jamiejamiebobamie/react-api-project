import React from 'react'


function WeatherDescription(props){

    return (
        <div>
            <div>Title: {props.main}</div>
            <div>Desc: {props.description}</div>
            <div>Icon: {props.icon}</div>
        </div>
    )
}

export default WeatherDescription
