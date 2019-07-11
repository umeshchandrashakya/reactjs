import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavVar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Default from "./component/Default";
import Pagination from "./component/Pagination";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavVar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
