import React from "react";
import { makeStyles } from "@material-ui/core";
import { Layout, Breadcrumb, Button } from "antd";
import { Hidden } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Radio } from "antd";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  outer: {
    padding: "10px",
    maxWidth: "100%",
  },
}));

const { Content } = Layout;
function Products() {
  const classes = useStyle();
  return (
    <Layout>
      <Hidden xsDown>
        <Grid className={classes.outer}>
          <Radio.Group>
            <Link to="/"> <Radio.Button>All</Radio.Button></Link>
            <Link to="/grocery"> <Radio.Button>Grocery</Radio.Button></Link>
            <Link to="/men"> <Radio.Button>Men</Radio.Button></Link>
            <Link to="/women"> <Radio.Button>Women</Radio.Button></Link>
            <Link to="/kid"> <Radio.Button>Kid's</Radio.Button></Link>
            <Link to="/mobile"> <Radio.Button>Mobile</Radio.Button></Link>
            <Link to="/computer"> <Radio.Button>Computer</Radio.Button></Link>
            <Link to="/electronic"> <Radio.Button>Electronic</Radio.Button></Link>
            <Link to="/sport"> <Radio.Button>Sport</Radio.Button></Link>
          </Radio.Group>
        </Grid>
      </Hidden>
    </Layout>
  );
}

export default Products;
