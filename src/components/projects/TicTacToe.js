import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class TicTacToe extends Component {
  render() {
    return (
      <ProjectContainer title="Tic-Tac-Toe"
                        url="https://bhefty.github.io/tic-tac-toe/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/tic-tac-toe_hwlnlf.png"
                        >
          Yet another classic game brought to the web. Play against an AI (just try to win...) or against a friend! One of my first apps with animations.
        </ProjectContainer>
    )
  }
}

export default TicTacToe
