import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <div id='skills' className="container row content">
        <h1>Skills</h1>
        <hr className='hr-title' />
        <p>
          I aim to be constantly improving upon my skillset by employing best practices in my code. I always strive to create clean user-friendly designs to achieve optimal interfaces which are a joy to use. Keeping up to date with the latest development practices
          and technologies, I'm able to design modern webpages that scale to all devices.
        </p>
        <div className="row">
          <div className="col-xs-4">
            <img src="https://res.cloudinary.com/bhefty/image/upload/v1474930875/HTML5_Badge_512_a1mw6s.png" alt="HTML5" className="skill-badge" />
            <br /><strong>HTML5</strong>
          </div>
          <div className="col-xs-4">
            <img src="https://res.cloudinary.com/bhefty/image/upload/v1480006222/css3_badge_ixozxc.png" alt="CSS3" className="skill-badge" />
            <br /><strong>CSS3</strong>
          </div>
          <div className="col-xs-4">
            <img src="https://res.cloudinary.com/bhefty/image/upload/v1480006468/javascript-badge_kjjuwf.png" alt="JavaScript" className="skill-badge" />
            <br /><strong>JavaScript</strong>
          </div>
          <div className="col-xs-4 col-xs-offset-2">
            <img src="https://res.cloudinary.com/bhefty/image/upload/v1474930989/react_yxvbhe.png" alt="React" className="skill-badge" />
            <br /><strong>React</strong>
          </div>
          <div className="col-xs-4">
            <img src="https://res.cloudinary.com/bhefty/image/upload/v1474931025/jquery_clwi37.png" alt="jQuery" className="skill-badge" />
            <br /><strong>jQuery</strong>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
