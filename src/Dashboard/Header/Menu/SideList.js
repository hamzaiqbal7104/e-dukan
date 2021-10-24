import React, { useState } from "react";
// import {
//     Button,
//     List,
//     ListItem,
//     ListItemText,
//     Typography,
//   } from "@material-ui/core";
//   import { NavLink } from "react-router-dom";
  import { makeStyles, Grid } from "@material-ui/core";
  import items from "../../../data/data";
  import Categories from "./categories";

  
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      color: "grey",
      "&:hover,&:hover div": {
        color: "#f50057",
      },
      "& div": {
        color: "grey",
      },
    },
  
    activeNav: {
      color: "#141A46",
      "& div": {
        color: "#141A46",
      },
    },
    navbtn: {
      width: "100%",
      borderBottom: "1px solid grey",
      textTransform: "capitalize",
      fontSize: "small",
    },
    h2: {
        backgroundColor: "#ffe4e1",
        padding: "10px",
        color: "black",
        fontSize: "30px",
        textAlign: "center",
      },
  }));

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  
  function SideList({ handleDrawerClose }) {
    const classes = useStyles();
    const [menuItems, setmenuItem] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItem = (category) => {
      if (category === "all") {
        setmenuItem(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setmenuItem(newItems);
    };
    console.log(menuItems);
    // const listitemdata = [
    //   {
    //     label: "Grocery Item's",
    //     Link: "#",
    //   },
    //   {
    //     label: "Men's Accessories",
    //     Link: "#",
    //   },
    //   { label: "Women's Accessories", Link: "#", },
    //   {
    //     label: "Kid's Accessories",
    //     Link: "#",
    //   },
    //   {
    //     label: "Mobile Accessories",
    //     Link: "#",
    //   },
    //   {
    //     label: "Computer Accessories",
    //     Link: "#",
    //   },
    //   {
    //     label: "Electronic Accessories",
    //     Link: "#",
    //   },
    //   {
    //     label: "Sport Accessories",
    //     Link: "#",
    //   },
    // ];
    return (
      <Grid>
        <Categories categories={categories} filterItem={filterItem} />
      {/* <List>
        {listitemdata.map((item, index) => (
          <Button
            key={index}
            onClick={handleDrawerClose}
            className={classes.navbtn}
          >
            <ListItem
              exact
              to={item.Link}
              component={NavLink}
              className={classes.navlinks}
              activeClassName={classes.activeNav}
            >
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          </Button>
        ))} 
      </List> */}
      </Grid>
    );
  }
  
  export default SideList;
  