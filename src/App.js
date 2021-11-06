import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./Customer/Form/Form";
import Admin from "./Dashboard/Admin";
import Seller from "./Seller/Seller";
import Customer from "./Customer/Customer";
import AddProduct from "./Customer/AddProduct/AddProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Customer} />
          <Route path="/seller" exact component={Seller} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

  