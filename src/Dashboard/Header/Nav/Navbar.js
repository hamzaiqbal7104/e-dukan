import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Box,
  Hidden,
  makeStyles,
  Typography,
  IconButton,
  Button,
  Avatar,
  Badge,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import pic from "../../../pics/l1.jpg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    boxShadow: "0 5px 10px #777",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
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
            <Grid item>
              <Link to="/admin/message" style={{ textDecoration: "none" }}>
                <IconButton aria-controls="simple-menu" aria-haspopup="true">
                  <Badge badgeContent={4} color="secondary">
                    <MailOutlineIcon
                      fontSize="medium"
                      className={classes.micon}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/admin/notification" style={{ textDecoration: "none" }}>
                <IconButton aria-controls="simple-menu" aria-haspopup="true">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsNoneIcon
                      fontSize="medium"
                      className={classes.micon}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/admin/detail" style={{ textDecoration: "none" }}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  startIcon={<Avatar src={pic} alt="profile"></Avatar>}
                ></Button>
              </Link>
            </Grid>
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
