import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Wikipedia extends Component {
  render() {
    return (
      <ProjectContainer title="Wikipedia Search"
                        url="https://bhefty.github.io/wikipedia-search/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473817002/wikipedia-search_vrelr6.png"
                        >
          Search top hits from Wikipedia with this web-app. Alternatively, click the button for a random article!
        </ProjectContainer>
    )
  }
}

export default Wikipedia
