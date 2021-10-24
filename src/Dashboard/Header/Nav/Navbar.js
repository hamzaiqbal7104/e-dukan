import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { FaShoppingCart } from "react-icons/fa";
import Search from "./SearchBar";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5em",
    },
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    fontWeight: 300,
    padding: "5px",
    minWidth: 20,
    marginLeft: "25px",
  },
  cartbtn: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5em",
    },
  },
  fa: {
    fontSize: "2em",
    padding: "3px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  h1: {
    borderRadius: "10px",
    padding: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
    boxShadow: "0 5px 20px #777",
  },
  btnbar: {
    borderRadius: "50px",
    height: "3em",
    margin: "25px",
  },
  iconConatiner: {
    marginLeft: "auto",
  },
  iconMenu: {
    height: "50px",
    width: "50px",
    color: "white",
  },
  drawer: {},
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Navbar() {
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyle();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/contact" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const tabs = (
    <React.Fragment>
      <Tabs value={value} className={classes.tabs} onChange={handleChange}>
        <Tab className={classes.tab} label="Home" component={Link} to="/store" />
        <Tab
          className={classes.tab}
          label="About Us"
          component={Link}
          to="/about"
        />
        <Tab
          className={classes.tab}
          label="Contact Us"
          component={Link}
          to="/contact"
        />
        <Search />
      </Tabs>

      <Button 
      className={classes.btnbar} 
      color="secondary" 
      variant="contained"
      component={Link}
      to="/"
      >
        Logout
      </Button>

      <Button
        className={classes.cartbtn}
        variant="contained"
        color="secondary"
        component={Link}
        to="/cart"
      >
        Cart <FaShoppingCart className={classes.fa} />
      </Button>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/store"
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/about"
          >
            <ListItemText>About Us</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to="/contact"
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to=""
            style={{ backgroundColor: "#00fa9a" }}//#f50057
          >
            <ListItemText>Log Out</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.iconConatiner}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.iconMenu} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar style={{boxShadow: "0 5px 20px #777"}}>
          <Toolbar>
            <Button
              onClick={() => setValue(0)}
              className={classes.h1}
              variant="contained"
              color="secondary"
              component={Link}
              to="#"
            >
              E-Dukan
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </React.Fragment>
  );
}

export default Navbar;
