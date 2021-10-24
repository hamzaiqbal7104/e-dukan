import { Typography, Button } from "@material-ui/core";
import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row"
  },
  outer: {
    backgroundColor: "#ffe4e1",
    width: "300px",
    top: 100,
    zIndex: 5
  },
  inner: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
    
  },
  btnGrid: {
    borderRadius: "50px",
    padding: "5px",
  },
  btn: {
    marginLeft: "2em",
    borderRadius: "50px",
    [theme.breakpoints.down("xs")]: {
      margin: "15px",
      marginLeft: "1em",
    },
  },
  h2: {
    padding: "10px",
    color: "black",
    fontSize: "30px",
    textAlign: "center",
  },
}));
function Categories({ filterItem, categories }) {
  const classes = useStyle();
  return (
    <Grid container className={classes.outer} >
      <Typography className={classes.h2}>Category</Typography>
      <Grid className={classes.inner}>
        {categories.map((category, index) => {
          return (
            <Grid direction="column" alignItems="center" className={classes.btnGrid} >
              <Button
                key={index}
                className={classes.btn}
                onClick={() => filterItem(category)}
                variant="contained"
                color="secondary"
              >
                {category}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Categories;
