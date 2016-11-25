import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Weather extends Component {
  render() {
    return (
      <ProjectContainer title="Weather App"
                        url="https://bhefty.github.io/show-local-weather/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814017/weather-app_lboxjb.png"
                        >
          This will get the current weather conditions for your location and display the temperature, condition outside, and a neat animation to go along with it all!
        </ProjectContainer>
    )
  }
}

export default Weather
