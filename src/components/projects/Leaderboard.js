import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Leaderboard extends Component {
  render() {
    return (
      <ProjectContainer title="FreeCodeCamp Leaderboard"
                        url="http://codepen.io/bhefty/full/oYxgyR/"
                        img="https://res.cloudinary.com/bhefty/image/upload/v1480042840/mockup-leaderboard_vpilbx.png"
                        alt="FreeCodeCamp Leaderboard">
        This leaderboard was made with the help of ReactJS and fetches results from the FCC API
        to determine current leaders in brownie points within the last month and of all time.
      </ProjectContainer>
    )
  }
}

export default Leaderboard
