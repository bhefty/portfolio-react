import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class RandomQuote extends Component {
  render() {
    return (
      <ProjectContainer title="Random Quotes"
                        url="https://bhefty.github.io/random-quote/"
                        img="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/random-quote_tqcvob.png"
                        >
          This app will allow you to refresh the content to show a new quote as well as give you the ability to tweet it out! One of my first API driven apps.
        </ProjectContainer>
    )
  }
}

export default RandomQuote
