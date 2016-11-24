import React, { Component } from 'react'
import { IndexLink } from 'react-router'

class Navigation extends Component {
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
              <li><IndexLink className='active' to='#about'>About Me</IndexLink></li>
              <li><IndexLink className='active' to='#skills'>Skills</IndexLink></li>
              <li><IndexLink className='active' to='#projects'>Projects</IndexLink></li>
              <li><IndexLink className='active' to='#contact'>Contact Me</IndexLink></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
