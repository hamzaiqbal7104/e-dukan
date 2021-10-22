import React from "react";
import { makeStyles } from "@material-ui/core";
import pic from "../pics/bbb.jpg";

const useStyle = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundImage: `url(${pic})`,
    height: "300px",
    marginTop: "80px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    padding: "0",
    position: "relative",
  },
  headerText: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .5)",
    color: "#fff",
  },
  h1: {
    marginTop: "100px",
    fontSize: "35px",
    textTransform: "uppercase",
    color: "#ffff",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  p: {
    marginBottom: "7px",
    fontSize: "25px",
    color: "#ffff",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

function Banner() {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <div className={classes.headerText}>
          <h1 className={classes.h1}>Eid ke rung apno ke sung</h1>
          <p className={classes.p}>Enjoy online shopping with  <b> E-Dukan </b></p>
      </div>
    </div>
  );
}

export default Banner;
