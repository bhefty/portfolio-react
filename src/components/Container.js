import React, { Component } from 'react';

import Navigation from './Navigation'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

class Container extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='App'>
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
