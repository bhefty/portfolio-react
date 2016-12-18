import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class RecipeBox extends Component {
  render() {
    return (
      <ProjectContainer title="Recipe Box"
                        url="https://agile-island-30911.herokuapp.com/"
                        img="https://res.cloudinary.com/bhefty/image/upload/v1482035023/mockup-recipebox_evjjtw.png"
                        alt="React Powered Recipe Box">
          A digital recipe box built with React that utilizes the browser's local storage to save state. Part of a FreeCodeCamp project.
        </ProjectContainer>
    )
  }
}

export default RecipeBox
