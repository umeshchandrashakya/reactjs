import React, { Component } from "react";

import axios from "axios";
import "../Product.css";
import Details from "./Details";
import ProductHelper, {
  getAllProducts,
  getExpireProducts,
  getAllExpiredProducts,
  Goingtoexpire,
  getItemPerPage
} from "./ProductHelper";
import Pagination from "../component/Pagination.js";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isItimeClcik: true,
      allProducts: [],
      productItimeClick: false,
      setCurrentPage: 1,
      postPerPage: 10,
      indexOfLastPost: "",
      nextPage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
  }

  paginate(pageNumber) {}

  render() {
    return (
      <div>
        <Filter data={this.state.value} handleChange={this.handleChange} />
        <Product data={this.state.allProducts} clickBtn={this.clickBtn} />
        <Pagination postsPerpage={10} totalPage={17} paginate={this.paginate} />
      </div>
    );
  }

  componentDidMount() {
    axios.get("../assets/data/product.json").then(res => {
      this.setState({ value: res.data });

      this.setState({
        allProducts: getItemPerPage(this.state.setCurrentPage, 10, res.data)
      });
    });
  }

  handleChange(event) {
    if (event.target.value == "All Product") {
      this.setState({ allProducts: getAllProducts(this.state.value) });
    } else if (event.target.value == "Expire soon") {
      this.setState({
        allProducts: getExpireProducts(getAllProducts(this.state.value))
      });
    } else if (event.target.value == "Exipred") {
      const expired = Goingtoexpire(getAllProducts(this.state.value));
      this.setState({ allProducts: expired });
    }
  }

  clickBtn = product => {
    this.setState({ productItimeClick: true });
    //  this.props.history.push("/details");
    this.props.history.push({
      pathname: "/details",
      state: {
        element: product
      }
    });
  };
}

class Product extends Component {
  render() {
    const products = this.props.data.map(
      function(product, index) {
        return (
          <div className="">
            <div className="col-sm-3">
              <div
                className="card"
                onClick={() => this.props.clickBtn(product)}
              >
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
                        <button className="btn-primary">View Details</button>
                        <button className="btn-dark">Add To Cart</button>
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

    return (
      <div>
        <h1>All Products</h1>
        <div className="row">{products}</div>
      </div>
    );
  }
}

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown">
        <select onChange={this.props.handleChange}>
          <option value="All Product">All Product</option>
          <option value="Expire soon">Expire soon</option>
          <option value="Exipred">Expired</option>
        </select>
      </div>
    );
  }
}
