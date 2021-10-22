import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import Home from "../Pages/Home";
import ViewItem from "../Pages/ViewItem";
import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

function Store() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/store" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/home/view" exact component={ViewItem} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Store;
