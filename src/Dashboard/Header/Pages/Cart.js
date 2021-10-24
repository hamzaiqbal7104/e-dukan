// import React from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// function Cart() {
// const [itemCount, setItemCount] = React.useState(1);

// return (
// 	<div style={{ display: "block", padding: 30 }}>
// 	<h4>How to create ShoppingCart Button in ReactJS?</h4>
// 	<div>
// 		<Badge color="secondary" badgeContent={itemCount}>
// 		<ShoppingCartIcon />{" "}
// 		</Badge>
// 		<ButtonGroup>
// 		<Button
// 			onClick={() => {
// 			setItemCount(Math.max(itemCount - 1, 0));
// 			}}
// 		>
// 			{" "}
// 			<RemoveIcon fontSize="small" />
// 		</Button>
// 		<Button
// 			onClick={() => {
// 			setItemCount(itemCount + 1);
// 			}}
// 		>
// 			{" "}
// 			<AddIcon fontSize="small" />
// 		</Button>
// 		</ButtonGroup>
// 	</div>
// 	</div>
// );
// }
// export default Cart;

//----------------------------

import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import pic from "../../../pics/l1.jpg";
import { BsPlusCircleFill } from "react-icons/bs";
import { GrSubtractCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outer: {
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
    marginBottom: "0.5em",
    [theme.breakpoints.down("md")]: {},
  },
  photo: {
    width: "100px",
    height: "100px",
    borderBottom: "1px solid grey",
  },
  actionbtn: {
    marginRight: "1em",
    marginLeft: "1em",
  },
  innerItem: {
    margin: "2em",

    borderRight: "1px solid grey",
  },
  h2: {
    backgroundColor: "#ffe4e1",
    borderRadius: "10px",
    padding: "10px",
    color: "gray",
    boxShadow: "0 5px 20px #777",
  },
  smallouter: {
    backgroundColor: "white",
    padding: "10px",
  },
  outer2: {
    paddingTop: "5px",
    marginTop: "5px",
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
  },
  checkbtn: {
    [theme.breakpoints.down("md")]: {
      padding: "2px",
      fontSize: "1em",
    },
  },
  fullouter2: {
    backgroundColor: "white",
    boxShadow: "0 5px 20px #777",
    marginTop: "10px",
    padding: "10px",
  },
}));
const price = 2350;
function Cart() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();

  const full = (
    <React.Fragment>
      <Grid
        container
        className={classes.outer}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <img src={pic} alt="title" className={classes.photo} />
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" spacing={10}>
            <Grid item className={classes.innerItem}>
              <Button variant="contained" className={classes.actionbtn}>
                <BsPlusCircleFill />
              </Button>
              1
              <Button variant="contained" className={classes.actionbtn}>
                <GrSubtractCircle />
              </Button>
            </Grid>
            <Grid item className={classes.innerItem}>
              $ {price}
            </Grid>
            <Grid item className={classes.innerItem}>
              <Button variant="contained">
                <MdDelete fontSize="large" color="red" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.outer}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <img src={pic} alt="title" className={classes.photo} />
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" spacing={10}>
            <Grid item className={classes.innerItem}>
              <Button variant="contained" className={classes.actionbtn}>
                <BsPlusCircleFill />
              </Button>
              1
              <Button variant="contained" className={classes.actionbtn}>
                <GrSubtractCircle />
              </Button>
            </Grid>
            <Grid item className={classes.innerItem}>
              $ {price}
            </Grid>
            <Grid item className={classes.innerItem}>
              <Button variant="contained">
                <MdDelete fontSize="large" color="red" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-around"
        className={classes.fullouter2}
        spacing={2}
      >
        <Grid item>
          <b>Total</b>
        </Grid>
        <Grid item>${price * 2}</Grid>
        <Button variant="contained" color="secondary">
          <Grid item>CheckOut</Grid>
        </Button>
      </Grid>
    </React.Fragment>
  );

  const small = (
    <React.Fragment>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.smallouter}
      >
        <Grid item>
          <img src={pic} alt="title" className={classes.photo} />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              Title:<b>Laptop</b>
            </Grid>
            <Grid item>
              price:<b>{price}</b>
            </Grid>
            <Grid item>
              <Button variant="outlined">
                <BsPlusCircleFill />
              </Button>
              1
              <Button variant="outlined">
                <GrSubtractCircle />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item>
            <Button variant="outlined">
              <MdDelete fontSize="large" color="red" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        alignItems="center"
        className={classes.outer2}
      >
        <Grid item>
          <b>Total</b>
        </Grid>
        <Grid item>
          <b>${price}</b>
        </Grid>
        <Grid item>
          <Button color="secondary" variant="contained">
            CheckOUT
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return (
    <div>
      <h2 className={classes.h2}>Cart Items</h2>

      {matches ? small : full}
    </div>
  );
}

export default Cart;
