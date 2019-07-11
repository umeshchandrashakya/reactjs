import React, { Component } from "react";
import { connect } from "react-redux";
import "../Cart.css";

class Cart extends Component {
  renmoveItime = () => {
    // alert(product);
  };

  render() {
    console.log(this.props.productItime.length);
    const products = this.props.productItime.map(function(product, index) {
      return (
        <div class="border border-primary">
          <div className="row">
            <div className="col-3">
              <img src={product.imageSrc} />
            </div>
            <div className="col-8">
              <label>
                Product Name: <h5>{product.name}</h5>
              </label>
              <br />
              <label>
                Price : <h5>{product.price}</h5>
              </label>
              <br />
              <label>
                Warranty Period:<h5>{product.warrantyPeriod}</h5>
              </label>
              <br />
              <label>
                Discount:<h5>{product.discount}</h5>
              </label>
              <br />
              <label>
                Features:<h5>{product.features}</h5>
              </label>
            </div>
          </div>
        </div>
      );
    });

    return <div className="">{products}</div>;
  }
}

const mapStateToProps = state1 => ({
  productItime: state1.productItime
});
export default connect(mapStateToProps)(Cart);
