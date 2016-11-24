import React, { Component } from 'react'
import { IndexLink } from 'react-router'

import Scroll from 'react-scroll'

const Link       = Scroll.Link
const Events     = Scroll.Events
const scrollSpy  = Scroll.scrollSpy

class Navigation extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#collapse-bar' aria-expanded='false'>
              <span className='sr-only'>Toggle Navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
              <IndexLink className='navbar-brand' to='about'>portfolio(BH)</IndexLink>
          </div>
          <div className='navbar-collapse collapse' id='collapse-bar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500}>About Me</Link></li>
              <li><Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500}>Skills</Link></li>
              <li><Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500}>Projects</Link></li>
              <li><Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}>Contact Me</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
