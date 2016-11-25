import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Calculator extends Component {
  render() {
    return (
      <ProjectContainer title="Calculator - Powered by JavaScript"
                        url="https://bhefty.github.io/calculator/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/Screen_Shot_2016-09-11_at_11.12.57_PM-macbookgrey-front_voxw8w.png"
                        alt="JavaScript Calculator">
          A simple calculator built with the power of JavaScript and JQuery. One of the first web development projects I've ever done.
        </ProjectContainer>
    )
  }
}

export default Calculator
