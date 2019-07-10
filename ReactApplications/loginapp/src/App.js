import React, { Component, useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import NavVar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Pagination from "./component/Pagination";
import Cart from "./component/Cart";
import Default from "./component/Default";

import Axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await Axios.get("../assets/data/product.json");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <NavVar />
      {
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      }
    </React.Fragment>
  );
};

export default App;
