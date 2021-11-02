import React from "react";
import { Button, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Layout} from "antd";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  itemimg: {
    width: "200px",
    height: "200px",
    padding: "5px",
    boxShadow: "0 5px 20px #777"
  },
  item1: {
    margin: "3em",
    padding: "2em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  inner: {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 5px 20px #777",
    margin: "1em",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "5px",
      marginLeft: "8px",
    },
  },
  inneritem: {
    marginLeft: "4em",
    marginRight: "2em",
  },
  outerdiv: {
    margin: "100px",
    [theme.breakpoints.down("xs")]: {
      padding: "2px",
    },
    padding: "5px",
    boxShadow: "0 5px 20px #777",
  },
  cartbtn: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "25px",
    },
  },
}));
function CardPage() {
  const classes = useStyle();
  return (
    <Layout>
      <Hidden xsDown>
        <div className={classes.outerdiv}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item className={classes.item1}>
              <Grid container className={classes.inner} spacing={4}>
                <Grid className={classes.inneritem} item>
                  <b>Name</b>
                </Grid>
                <Grid className={classes.inneritem} item>
                  Laptop
                </Grid>
              </Grid>
              <Grid container className={classes.inner} spacing={4}>
                <Grid className={classes.inneritem} item>
                  <b>Description</b>
                </Grid>
                <Grid className={classes.inneritem} item>
                  <p>This Is Good Product</p>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-around">
                <Grid item>
                  <Button
                    className={classes.cartbtn}
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/cart"
                  >
                    Add to cart
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.cartbtn}
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      cursor: "pointer",
                    }}
                    component={Link}
                    to=""
                  >
                    Video Call
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    className={classes.itemimg}
                    alt="lp"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Hidden>
    </Layout>
  );
}

export default CardPage;
