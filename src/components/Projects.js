import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return (
      <div id='projects' className="container row content">
        <h1>Projects</h1>
        <hr className="hr-title" />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Simon Says Game</h2>
            <p>
              The classic game revisioned for web! Try to get all the way to round 20 to win. Make it a challenge by enabling 'Strict' mode. Complete with sounds and flashing lights.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/simon-says/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/simon-says_tjllpp.png" alt="Simon Says" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Calculator - Powered by JavaScript</h2>
            <p>
              A simple calculator built with the power of JavaScript and JQuery. One of the first web development projects I've ever done.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/calculator/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814008/Screen_Shot_2016-09-11_at_11.12.57_PM-macbookgrey-front_voxw8w.png" alt="Calculator" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Pomodoro Timer</h2>
            <p>
              Tamayto, tamahto, pomodoro. Whatever you choose to call this timer, it's goal is to keep you on task while breaking your work sessions up with break periods.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/pomodoro-clock/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/pomodoro-clock_fl4mzr.png" alt="Pomodoro Timer" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Tic-Tac-Toe</h2>
            <p>
              Yet another classic game brought to the web. Play against an AI (just try to win...) or against a friend! One of my first apps with animations.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/tic-tac-toe/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/tic-tac-toe_hwlnlf.png" alt="Tic-Tac-Toe" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>twitchTV Streams</h2>
            <p>
              Quick at-a-glance look that shows the current status of a handful of Twitch channels. Sort by online/offline and view what they are currently streaming.
            </p>
          </div>
          <div className="col-md-6">
            <a href="http://codepen.io/bhefty/full/yJmjyE/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473816817/twitch-tv_ueplap.png" alt="TwitchTV Streams" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Wikipedia Search</h2>
            <p>
              Search top hits from Wikipedia with this web-app. Alternatively, click the button for a random article!
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/wikipedia-search/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473817002/wikipedia-search_vrelr6.png" alt="Wikipedia Search" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Weather App</h2>
            <p>
              This will get the current weather conditions for your location and display the temperature, condition outside, and a neat animation to go along with it all!
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/show-local-weather/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814017/weather-app_lboxjb.png" alt="Weather App" className="project-img" /></a>
          </div>
        </div>
        <hr />
        <div className="row project-row">
          <div className="col-md-6">
            <h2>Random Quotes</h2>
            <p>
              This app will allow you to refresh the content to show a new quote as well as give you the ability to tweet it out! One of my first API driven apps.
            </p>
          </div>
          <div className="col-md-6">
            <a href="https://bhefty.github.io/random-quote/" target="_blank"><img src="https://res.cloudinary.com/bhefty/image/upload/c_crop,h_1200,w_2000/v1473814009/random-quote_tqcvob.png" alt="Random Quote Generator" className="project-img" /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
