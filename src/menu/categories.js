import { Button } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  outer: {
    backgroundColor: "#ffe4e1",
    padding: "0px",
    position: 'fixed',
    top: 100,
    zIndex: 5
  },
  inner: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
  },
  btn: {
    marginLeft: "2em",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      margin: "15px",
      marginLeft: "1em",
    },
  },
}));
function Categories({ filterItem, categories }) {
  const classes = useStyle();
  return (
    <Grid container className={classes.outer} spacing={2}>
      <Grid item className={classes.inner}>
        {categories.map((category, index) => {
          return (
            <Button
              key={index}
              className={classes.btn}
              onClick={() => filterItem(category)}
              variant="contained"
              color="secondary"
            >
              {category}
            </Button>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Categories;
