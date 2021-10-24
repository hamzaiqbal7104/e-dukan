import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  h2: {
    backgroundColor: "#ffe4e1",
    borderRadius: "10px",
    padding: "10px",
    color: "gray",
    boxShadow: "0 5px 20px #777",
    marginLeft: "300px",
  },
}));

function Item() {
  const classes = useStyle();

  return (
    <div>
      <h1 className={classes.h2}>Daily Deals</h1>
      <Grid>
          
      </Grid>
        
    </div>
  );
}

export default Item;
