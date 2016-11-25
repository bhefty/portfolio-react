import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Simon extends Component {
  render() {
    return (
      <ProjectContainer title="Simon Says Game"
                        url="https://bhefty.github.io/simon-says/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/simon-says_tjllpp.png"
                        alt="Simon Says Game">
      The classic game revisioned for web! Try to get all the way to round 20 to win. Make it a challenge by enabling 'Strict' mode. Complete with sounds and flashing lights.        </ProjectContainer>
    )
  }
}

export default Simon
