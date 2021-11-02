import React from "react";
import { Button, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyle = makeStyles((theme) => ({
  gridback: {
    // backgroundColor: "white",
    margin: "0.5em",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 5px 20px #777",
  },
  itemimg: {
    width: "200px",
    height: "200px",
    padding: "10px",
  },
  outer: {
    padding: "10px",
    maxWidth: "100%",
  },
  btn: {
    margin: "5px",
    backgroundColor: "#40a9ff",
  },
}));

function Products() {
  const classes = useStyle();
  return (
    <Layout>
      <Hidden xsDown>
        <Grid
          container
          className={classes.outer}
          direction="row"
          justifyContent="space-evenly"
        >
          <div>
            <Grid item className={classes.gridback}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    className={classes.itemimg}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    alt=""
                  />
                </Grid>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <h4>Laptop</h4>
                  </Grid>
                  <Grid item>
                    <p>Rs. 100}</p>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/product"
                    variant="contained"
                  >
                    View
                  </Button>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/cart"
                    variant="contained"
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid item className={classes.gridback}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    className={classes.itemimg}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    alt=""
                  />
                </Grid>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <h4>Laptop</h4>
                  </Grid>
                  <Grid item>
                    <p>Rs. 100}</p>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/product"
                    variant="contained"
                  >
                    View
                  </Button>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/cart"
                    variant="contained"
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid item className={classes.gridback}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    className={classes.itemimg}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    alt=""
                  />
                </Grid>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <h4>Laptop</h4>
                  </Grid>
                  <Grid item>
                    <p>Rs. 100}</p>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/product"
                    variant="contained"
                  >
                    View
                  </Button>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/cart"
                    variant="contained"
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid item className={classes.gridback}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <img
                    className={classes.itemimg}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    alt=""
                  />
                </Grid>
                <Grid container direction="row" justifyContent="space-around">
                  <Grid item>
                    <h4>Laptop</h4>
                  </Grid>
                  <Grid item>
                    <p>Rs. 100}</p>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/product"
                    variant="contained"
                  >
                    View
                  </Button>
                  <Button
                    className={classes.btn}
                    component={Link}
                    to="/cart"
                    variant="contained"
                  >
                    <AddShoppingCartIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Hidden>
    </Layout>
  );
}

export default Products;
