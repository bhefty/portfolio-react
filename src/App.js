import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import './styles/App.css';

import Container from './components/Container'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
  render () {

    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <Route path='/about' component={AboutMe} />
          <Route path='/skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
          <Route path='*' component={AboutMe} />
        </Route>
      </Router>
    )
  }
}

export default App
