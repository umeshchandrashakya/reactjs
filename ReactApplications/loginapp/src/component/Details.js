import React, { Component } from "react";
import "../details.css";

export default class Details extends Component {
  // state = {
  //   element: this.props.location.state.element
  // };
  render() {
    const product = this.props.location.state.element;
    return (
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <img src={product.imageSrc} className="card-img-overlay" />
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <h4>{product.name}</h4>
                  <h5>Serial No : {product.serialNo}</h5>
                  <h5>warrantyPeriod : {product.warrantyPeriod}</h5>
                  <h5>Price : {product.price}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
