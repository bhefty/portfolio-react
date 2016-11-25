import React, { Component } from 'react'

class ProjectContainer extends Component {
  render() {
    return (
      <div className="row project-row">
        <div className="col-md-6">
          <h2>{this.props.title}</h2>
          <p>
            {this.props.children}
          </p>
        </div>
        <div className="col-md-6">
          <a href={this.props.url} target="_blank"><img src={this.props.img} alt={this.props.title} className="project-img img-responsive" /></a>
        </div>
      </div>
    )
  }
}

export default ProjectContainer
