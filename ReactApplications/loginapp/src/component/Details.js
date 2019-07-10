import React, { Component } from "react";
import "../details.css";

export default class Details extends Component {
  state = {
    element: this.props.location.state.element
  };
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <img
                  src={this.state.element.imageSrc}
                  className="card-img-overlay"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h3>Features</h3>
                <h3>ProductName:</h3>
                <article>{this.state.element.features}</article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
