import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    console.log(this.props.productItime.length);
    const products = this.props.productItime.map(function(product, index) {
      return (
        <div className="col-12">
          <div className="row">
            <img src={product.imageSrc} />
            <h1>{product.name}</h1>
          </div>
        </div>
      );
    });

    return <div className="row">{products}</div>;
  }
}

const mapStateToProps = state1 => ({
  productItime: state1.productItime
});
export default connect(mapStateToProps)(Cart);
