import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  h2: {
    backgroundColor: "#ffe4e1",
    borderRadius: "10px",
    padding: "10px",
    color: "gray",
    boxShadow: "0 5px 20px #777",
  },
}));

function Women() {
  const classes = useStyle();

  return (
    <div>
      <h1 className={classes.h2}>Women</h1>
      <Grid>
      </Grid>
    </div>
  );
}

export default Women;
