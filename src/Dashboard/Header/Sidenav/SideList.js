import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    color: "grey",
    "&:hover,&:hover div": {
      color: "#f50057",
    },
    "& div": {
      color: "grey",
    },
  },

  activeNav: {
    color: "#141A46",
    "& div": {
      color: "#141A46",
    },
  },
  navbtn: {
    width: "100%",
    borderBottom: "1px solid grey",
    textTransform: "capitalize",
    fontSize: "small",
  },
}));

function SideList({ handleDrawerClose }) {
  const classes = useStyles();
  const listitemdata = [
    { label: "Home", Link: "/admin/dashboard", icon: <FcHome size="2em" /> },
    {
      label: "Products",
      Link: "/admin/products",
      icon: <FaProductHunt size="2em" style={{ color: "green" }} />,
    },
    {
      label: "Sales",
      Link: "/admin/sales",
      icon: <FcSalesPerformance size="2em" />,
    },
    { label: "Order", Link: "/admin/orders", icon: <FcLike size="2em" /> },
    {
      label: "Vendor",
      Link: "/admin/vendor",
      icon: <FcConferenceCall size="2em" />,
    },
    {
      label: "Customer",
      Link: "/admin/user",
      icon: <FcConferenceCall size="2em" />,
    },
    {
      label: "Message",
      Link: "/admin/message",
      icon: <FcSms size="2em" />,
    },
    {
      label: "Notification",
      Link: "/admin/notification",
      icon: <FcInfo size="2em" />,
    },
  ];
  return (
    <List>
      {listitemdata.map((item, index) => (
        <Button
          key={index}
          onClick={handleDrawerClose}
          className={classes.navbtn}
        >
          <ListItem
            exact
            to={item.Link}
            component={NavLink}
            className={classes.navlinks}
            activeClassName={classes.activeNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

export default SideList;
