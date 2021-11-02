import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import { Layout } from "antd";

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
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

function About() {
  const classes = useStyle();

  return (
    <Layout style={{height: 1000}}>
      <Hidden xsDown>
        <h1 className={classes.h2}>About Us</h1>
        <Grid>
            <p className={classes.p}>E-Dukan is similar to the existing e-commerce stores like OLX, Daraz, Ali Express, Amazon and etc. This site also provides hustle free shopping 24/7. This site also facilitates customers with almost all type of products with good quality. The main aim of this site is to reduce to the number of products being returned. By doing this successfully we can increase the revenue of the business. </p>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <h1 className={classes.h2}>About Us</h1>
        <Grid>
            <p className={classes.p}>E-Dukan is similar to the existing e-commerce stores like OLX, Daraz, Ali Express, Amazon and etc. This site also provides hustle free shopping 24/7. This site also facilitates customers with almost all type of products with good quality. The main aim of this site is to reduce to the number of products being returned. By doing this successfully we can increase the revenue of the business. </p>
        </Grid>
      </Hidden>
    </Layout>
  );
}

export default About;
