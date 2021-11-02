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
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgot" exact component={ForgotPassword} />
          <Route path="/detail" exact component={AccountDetailsPage} />
          <Route path="/adashboard" exact component={Dashboard} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/message" exact component={Message} />
          <Route path="/sales" exact component={Sales} />
          <Route path="/products" exact component={Products} />
          <Route path="/user" exact component={User} />
          <Route path="/vendor" exact component={Vendor} />
          <Route path="/products/add" exact component={AddNewProduct} />
          <Route path="/products/:productId" exact component={SingleProduct} />
          <Route path="/sales/add" exact component={AddNewSale} />
          <Route path="/sales/:saleId" exact component={SingleSale} />
          <Route path="/orders" exact component={Order} />
          <Route path="/orders/add" exact component={AddOrder} />
        </Switch>
      </Box>
    </div>
  );
}

export default HeaderComponent;
