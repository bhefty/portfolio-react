import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <div id='about' className='container row content'>
        <h1>About Me</h1>
        <hr className='hr-title' />
        <p>
          <img src='https://res.cloudinary.com/bhefty/image/upload/v1473814994/nychead_rcjqkj.png' alt='Bill Hefty' className='img-thumbnail selfie-pic' />
        </p>
        <br />
        <br />
        <p>
          My name is Bill Hefty and I'm a budding Front End Developer. I've had upwards of 5 years experience as an IT professional dealing in all aspects between desktop tech support to video network solutions. This portfolio page aims at keeping track of my progress as I continue my track on web development.
        </p>
      </div>
    )
  }
}

export default AboutMe
