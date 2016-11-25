import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Markdown extends Component {
  render() {
    return (
      <ProjectContainer title="Markdown Previewer"
                        url="http://codepen.io/bhefty/full/MbawLa/"
                        img="https://res.cloudinary.com/bhefty/image/upload/v1480042840/mockup-markdown_ktvzmt.png"
                        alt="Markdown Previewer">
          This app was created using ReactJS to showcase the benefits of the Virtual DOM.
          Enter your markdown text on the left and see it instantly compiled on the right.
        </ProjectContainer>
    )
  }
}

export default Markdown
