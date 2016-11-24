import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/App.css';

import Container from './components/Container'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

class App extends Component {
  render () {

    return (
      <Router history={browserHistory} onUpdate={hashLinkScroll}>
        <Route path='/' component={Container}>
          <Route path='/about' component={AboutMe} />
          <Route path='/skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

function hashLinkScroll() {
  const { hash } = window.location
  if (hash !== '') {
      setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) element.scrollIntoView()
    }, 0)
  }
}

export default App
