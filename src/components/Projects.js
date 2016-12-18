import React, { Component } from 'react'

import Portfolio from './projects/Portfolio'
import Markdown from './projects/Markdown'
import Leaderboard from './projects/Leaderboard'
import Simon from './projects/Simon'
import Calculator from './projects/Calculator'
import Pomodoro from './projects/Pomodoro'
import TicTacToe from './projects/TicTacToe'
import Wikipedia from './projects/Wikipedia'
import Weather from './projects/Weather'
import RandomQuote from './projects/RandomQuote'
import RecipeBox from './projects/RecipeBox'

class Projects extends Component {
  render() {
    return (
      <div id='projects' className="container row content">
        <h1>Projects</h1>
        <hr className="hr-title" />
        <Portfolio />
        <hr />
        <RecipeBox />
        <hr />
        <Markdown />
        <hr />
        <Leaderboard />
        <hr />
        <Simon />
        <hr />
        <Calculator />
        <hr />
        <Pomodoro />
        <hr />
        <TicTacToe />
        <hr />
        <Wikipedia />
        <hr />
        <Weather />
        <hr />
        <RandomQuote />
      </div>
    )
  }
}

export default Projects
