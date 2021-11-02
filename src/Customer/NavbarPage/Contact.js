import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid, Hidden } from "@material-ui/core";
import { Layout } from "antd";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  h2: {
    padding: "10px",
    color: "gray",
    marginTop: 20,
  },
  p: {
    marginBottom: "7px",
    fontSize: "25px",
    color: "#141A46",
    display: "flex",
    justifyContent: "",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

function Contact() {
  const classes = useStyle();

  return (
    <Layout style={{height: 1000}}>
      <Hidden xsDown>
        <h1 className={classes.h2}>Contact Us</h1>
        <Grid>
          <p>For order status inquiry, please click here</p>
          <p>To cancel and return ordered items, please log-in with your account here </p>
          <p>For other concerns, feel free to visit our Help Center Page here</p>
        </Grid>
        <Grid>
          <p className={classes.p}>Can't find the answer you are looking for? Contact us through LIVE CHAT we will assist you.</p>
          <Button variant="contained" color="primary" component={Link} to="/message">
            <Grid item>Live Chat</Grid>
          </Button>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <h1 className={classes.h2}>Contact Us</h1>
        <Grid>
          <p>For order status inquiry, please click here</p>
          <p>To cancel and return ordered items, please log-in with your account here </p>
          <p>For other concerns, feel free to visit our Help Center Page here</p>
        </Grid>
        <Grid>
          <p className={classes.p}>Can't find the answer you are looking for? Contact us through LIVE CHAT we will assist you.</p>
          <Button variant="contained" color="primary" component={Link} to="/message">
            <Grid item>Live Chat</Grid>
          </Button>
        </Grid>
      </Hidden>
    </Layout>
      
  );
}

export default Contact;
