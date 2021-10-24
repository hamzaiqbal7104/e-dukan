import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, Hidden, makeStyles, Typography } from "@material-ui/core";
import NavNotfi from "./NavNotfi";
import Profile from "./profile";
import Message from "./Messages";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    boxShadow: "0 5px 10px #777",
    marginTop: "90px",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  tab: {
    fontWeight: 300,
    padding: "5px",
    minWidth: 20,
    marginLeft: "25px",
  },
  menuicon: {
    color: "black",
  },
}));
function Navbar({ handleDrawerToggle }) {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography style={{ color: "black" }}>Dashboard</Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <NavNotfi />
            <Message />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <MenuIcon onClick={handleDrawerToggle} className={classes.menuicon} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
