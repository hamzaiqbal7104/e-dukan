import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";


///#d400ff,#00fa9a
const useStyle = makeStyles((theme) => ({
  h2: {
    backgroundColor: "#ffe4e1",
    borderRadius: "10px",
    padding: "10px",
    color: "gray",
    boxShadow: "0 5px 20px #777",
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
    <div>
      <h1 className={classes.h2}>Contact Us</h1>
      <Grid>
        <p>For order status inquiry, please click here</p>
        <p>To cancel and return ordered items, please log-in with your account here </p>
        <p>For other concerns, feel free to visit our Help Center Page here</p>
      </Grid>
      <Grid>
        <p className={classes.p}>Can't find the answer you are looking for? Contact us through LIVE CHAT we will assist you.</p>
        <Button variant="contained" color="secondary">
        <Grid item>Live Chat</Grid>
        </Button>
      </Grid>
    </div>
  );
}

export default Contact;
