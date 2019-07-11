import React, { Component } from "react";
class Product extends Component {
  render() {
    const products = this.props.data.map(
      function(product, index) {
        return (
          <div className="">
            <div className="col-sm-3">
              <div className="card">
                <div className="">
                  <img src={product.imageSrc} alt="Avatar" className="avtar" />
                </div>
                <div className="product_name">
                  <div className="card" id="product_text">
                    <div className="row">
                      <div className="col-12">
                        <h4>{product.name}</h4>
                        <h5>Serial No : {product.serialNo}</h5>
                        <h5>warrantyPeriod : {product.warrantyPeriod}</h5>
                        <button
                          className="btn-primary"
                          onClick={() => this.props.viewProductDetails(product)}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => this.props.addToCart(product)}
                          className="btn-dark"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }.bind(this)
    );
    return <div className="row">{products}</div>;
  }
}
export default Product;
