import React, { Component } from 'react'

import Scroll from 'react-scroll'

const Link       = Scroll.Link
const Events     = Scroll.Events
const scrollSpy  = Scroll.scrollSpy

class AboutMe extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
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
          My name is Bill Hefty and I'm a Front End Developer. I've had upwards
          of 5 years experience as an IT professional dealing in all aspects
          between desktop tech support to video network solutions. This portfolio
          page aims at keeping track of my progress as I continue my track on web development.
          Have a look around and feel free to <Link to='contact' spy={true} smooth={true} offset={-80} duration={500}>contact</Link> me!
        </p>
      </div>
    )
  }
}

export default AboutMe
