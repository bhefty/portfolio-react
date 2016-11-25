import React, { Component } from 'react'

import ProjectContainer from './ProjectContainer'

class Portfolio extends Component {
  render() {
    return (
      <ProjectContainer title="This Site!"
                        url="https://www.billhefty.com"
                        img="https://res.cloudinary.com/bhefty/image/upload/v1480044288/mockup-portfolio_hoc2n9.png"
                        alt="Porfolio">
        This very site was created by using ReactJS to demonstrate how well it scales,
        and downscales, to a single page app. Checkout my <a href='https://github.com/bhefty/portfolio-react' target='_blank'>repository</a> to see how it's done!
      </ProjectContainer>
    )
  }
}

export default Portfolio
