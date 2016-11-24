import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div id='contact' className="container row content">
        <h1>Contact Me</h1>
        <hr className="hr-title" />
        <p>Feel free to get in touch with me, I'd love to hear from you!</p>
        <p><a href='mailto:billhefty@gmail.com'><i className='fa fa-envelope-o' aria-hidden='true'></i> billhefty@gmail.com</a></p>
        <p>|</p>
        <div className="row">
          <div className="col-xs-3"><a href="https://github.com/bhefty" target="_blank"><i className="fa fa-github fa-4x" aria-hidden="true"></i></a></div>
          <div className="col-xs-3"><a href="https://twitter.com/billhefty" target="_blank"><i className="fa fa-twitter fa-4x" aria-hidden="true"></i></a></div>
          <div className="col-xs-3"><a href="https://www.linkedin.com/in/bill-hefty-6b973689" target="_blank"><i className="fa fa-linkedin fa-4x" aria-hidden="true"></i></a></div>
          <div className="col-xs-3"><a href="https://www.freecodecamp.com/bhefty" target="_blank"><i className="fa fa-fire fa-4x" aria-hidden="true"></i></a></div>
        </div>
      </div>
    )
  }
}

export default Contact
