import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "../Form/Form";
import Login from "../Form/Login";
import Signup from "../Form/Signup";
import ForgotPassword from "../Form/ForgotPassword";
import AccountDetailsPage from "../Form/AccountDetailsPage";
import Navbar from "./Nav/Navbar";
import Sidebar from "./Sidenav/Sidenav";
import Dashboard from "../Body/Dashboard";
import Notification from "../Body/Notification";
import Message from "../Body/Message";
import Sales from "../Body/Sales/Sales";
import Products from "../Body/Products/Products";
import SingleProduct from "../Body/Products/SingleProduct";
import AddNewProduct from "../Body/Products/AddNewProduct";
import User from "../Body/User/User";
import Vendor from "../Body/Vendor/Vendor";
import SingleSale from "../Body/Sales/SingalSale";
import AddNewSale from "../Body/Sales/AddNewSale";
import Order from "../Body/Order/Order";
import AddOrder from "../Body/Order/AddOrder";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    // backgroundColor: "#27ABEB",
    padding: theme.spacing(6, 2, 0, 32),

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 2),
      marginTop: "2em",
    },
  },
}));

function HeaderComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleDrawerClose={handleDrawerClose}
      />

      <Box className={classes.wrapper}>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin/signup" exact component={Signup} />
          <Route path="/admin/forgot" exact component={ForgotPassword} />
          <Route path="/admin/detail" exact component={AccountDetailsPage} />
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Route path="/admin/notification" exact component={Notification} />
          <Route path="/admin/message" exact component={Message} />
          <Route path="/admin/sales" exact component={Sales} />
          <Route path="/admin/products" exact component={Products} />
          <Route path="/admin/user" exact component={User} />
          <Route path="/admin/vendor" exact component={Vendor} />
          <Route path="/admin/add/products" exact component={AddNewProduct} />
          <Route path="/products/:productId" exact component={SingleProduct} />
          <Route path="/admin/add/sales" exact component={AddNewSale} />
          <Route path="/admin/sales/:saleId" exact component={SingleSale} />
          <Route path="/admin/orders" exact component={Order} />
          <Route path="/admin/add/orders" exact component={AddOrder} />
        </Switch>
      </Box>
    </div>
  );
}

export default HeaderComponent;
