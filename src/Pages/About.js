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
    <div>
      <h1 className={classes.h2}>About Us</h1>
      <Grid>
          <p className={classes.p}>E-Dukan is similar to the existing e-commerce stores like OLX, Daraz, Ali Express, Amazon and etc. This site also provides hustle free shopping 24/7. This site also facilitates customers with almost all type of products with good quality. The main aim of this site is to reduce to the number of products being returned. By doing this successfully we can increase the revenue of the business. </p>
      </Grid>
        
    </div>
  );
}

export default About;
