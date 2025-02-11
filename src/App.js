
import React, { Component } from 'react';


import './App.css';

import Error from './Error.js'

import Forecast from './Forecast.js'

/**
 * This example illustrates a simple react project
 * that works with an external API.
 *
 * Take note of the comments they point common
 * problems you will need to solve with React.
 *
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components
 *
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component.
 *
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
      isLoading: false,
    }
  }

  handleSubmit(e) {
    this.setState({isLoading:true})
    e.preventDefault()
    // ! Get your own API key !
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const zip = this.state.inputValue
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apikey}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      // If the request was successful assign the data to component state
      this.setState({ weatherData: json })
      // ! This needs better error checking here or at renderWeather()
      // It's possible to get a valid JSON response that is not weather
      // data, for example when a bad zip code entered.
      this.setState({isLoading:false})
    }).catch((err) => {
      // If there is no data
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      // Print an error to the console.
      console.log('-- Error fetching --')
      console.log(err.message)
      // You may want to display an error to the screen here.
          this.setState({isLoading:false})
    })
  }

  render() {

        console.log(this.state.weatherData)
    return (
      <div className="App">

      <h1>Get Weather</h1>

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/**
          This pattern is used for input and other form elements
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input
          */}
          <input
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text"
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>
        {(this.state.weatherData !== null) ? <Forecast name={this.state.weatherData.city.name} country={this.state.weatherData.city.country} list={this.state.weatherData.list} /> : <Error error={this.state.weatherData} isLoading={this.state.isLoading}/>}
      </div>
    );
  }
}

export default App;

 // && this.state.weatherData.message !=='city not found'
