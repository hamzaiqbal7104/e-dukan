import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarPage from "./NavbarPage/NavbarPage";
import BasePage from "./Basepage/BasePage";
import Form from "./Form/Form";
import Login from "./Form/Login";
import ForgotPassword from "./Form/ForgotPassword";
import Signup from "./Form/Signup";
import AccountDetailsPage from "./Form/AccountDetailsPage";
import MyCartPage from "./MyCartPage/MyCartPage";
import Checkout from "./MyCartPage/Checkout";
import ReviewOrder from "./MyCartPage/ReviewOrder";
import OrdersPage from "./OrdersPage/OrdersPage";
import SingleProduct from "./Products/SingleProduct";
import Notification from "./NavbarPage/Notification";
import Message from "./NavbarPage/Message";
import About from "./NavbarPage/About";
import Contact from "./NavbarPage/Contact";
import Grocery from "./Category/Pages/Grocery";
import Men from "./Category/Pages/Men";
import Women from "./Category/Pages/Women";
import Kid from "./Category/Pages/Kid";
import Mobile from "./Category/Pages/Mobile";
import Computer from "./Category/Pages/Computer";
import Electronic from "./Category/Pages/Electronic";
import Sport from "./Category/Pages/Sport";
import DailyDeals from "./Category/DailyDeals";
import Suggested from "./Category/Suggested";


const Customer = () => {
  return (
    <>
      <BrowserRouter className="site-layout">
        <NavbarPage />
        <Switch>
          <Route path="/" exact component={BasePage} />
          <Route path="/form" exact component={Form} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot" exact component={ForgotPassword} />
          <Route path="/reset" exact component={Signup} />
          <Route path="/account/detail" exact component={AccountDetailsPage} />
          <Route path="/cart" exact component={MyCartPage} />
          <Route path="/review/order" exact component={ReviewOrder} />
          <Route path="/check" exact component={Checkout} />
          <Route path="/order" exact component={OrdersPage} />
          <Route path="/product" exact component={SingleProduct} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/message" exact component={Message} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/grocery" exact component={Grocery} />
          <Route path="/men" exact component={Men} />
          <Route path="/women" exact component={Women} />
          <Route path="/kid" exact component={Kid} />
          <Route path="/mobile" exact component={Mobile} />
          <Route path="/computer" exact component={Computer} />
          <Route path="/electronic" exact component={Electronic} />
          <Route path="/sport" exact component={Sport} />
          <Route path="/deals" exact component={DailyDeals} />
          <Route path="/suggested" exact component={Suggested} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Customer;

  