import React, { Component } from "react";

import axios from "axios";
import "../Product.css";
import Details from "./Details";
import Product from "./Product";
import Filter from "./Filter";
import ProductHelper, {
  getAllProducts,
  getExpireProducts,
  Goingtoexpire
} from "./ProductHelper";

import Pagination from "./Pagination";

import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      allProducts: [],
      currentPage: 1,
      productPerPage: 10
    };
    this.handleChange = this.handleChange.bind(this);
    this.viewProductDetails = this.viewProductDetails.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  render() {
    const { allProducts, currentPage, productPerPage } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * productPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productPerPage;
    const currentTodos = allProducts.slice(indexOfFirstTodo, indexOfLastTodo);
    return (
      <div className="container-fluid">
        <Filter data={this.state.value} handleChange={this.handleChange} />
        <h1>All Products</h1>
        <Product
          data={currentTodos}
          viewProductDetails={this.viewProductDetails}
          addToCart={this.addToCart}
        />
        <Pagination
          postPerPage={productPerPage}
          toalPage={allProducts.length}
          paginate={this.paginate}
        />
      </div>
    );
  }

  componentDidMount() {
    axios.get("../assets/data/product.json").then(res => {
      this.setState({ allProducts: getAllProducts(res.data) });
      this.setState({ value: res.data });
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

  viewProductDetails = product => {
    this.props.history.push({
      pathname: "/details",
      state: {
        element: product
      }
    });
  };

  paginate(event) {
    this.setState({
      currentPage: Number(event)
    });
  }

  addToCart = product => {
    this.props.dispatch({ type: "INCREMENT", productItime: product });
  };

  removeToCart = product => {
    this.props.dispatch({ type: "DECREMENT" });
  };
}

const mapStateToProps = state => ({
  count: state.count
});
export default connect(mapStateToProps)(ProductList);
