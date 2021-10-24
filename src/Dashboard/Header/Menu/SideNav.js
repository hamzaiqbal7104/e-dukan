import React from "react";
import { Drawer, Hidden, makeStyles } from "@material-ui/core";
import SideList from "./SideList";
import Banner from "./Banner";

const useStyles = makeStyles((theme) => ({
  side: {
    backgroundColor: "white",
  },
  drawerPaper: {
    backgroundColor: "#ffe4e1",
    boxShadow: "0 15px 15px #777",
    width: "300px",
    marginTop: "90px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
}));
function SideNav({ mobileOpen, handleDrawerToggle, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
            <SideList handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <SideList handleDrawerClose={handleDrawerClose} />
        </Drawer>
        <Banner />
      </Hidden>
    </nav>
  );
}

export default SideNav;
