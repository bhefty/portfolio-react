import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Pomodoro extends Component {
  render() {
    return (
      <ProjectContainer title="Pomodoro Timer"
                        url="https://bhefty.github.io/pomodoro-clock/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/pomodoro-clock_fl4mzr.png"
                        alt="Pomodoro Timer">
          Tamayto, tamahto, pomodoro. Whatever you choose to call this timer, it's goal is to keep you on task while breaking your work sessions up with break periods.
        </ProjectContainer>
    )
  }
}

export default Pomodoro
