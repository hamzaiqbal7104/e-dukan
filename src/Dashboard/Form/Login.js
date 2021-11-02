import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { BiLogInCircle } from "react-icons/bi";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox, Paper, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "73vh",
    width: 800,
    margin: "0 auto",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  btnStyle: {
    margin: "8px 0",
    textColor: "#fff",
  },
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  maingrid: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "20%",
    boxShadow: "0 5px 10px #777",
    width: "30%",
    marginTop: "6em",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "7em",
    },
  },
}));

function Login() {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();
  const [available, setAvailable] = useState("");
  const [category, setCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange2 = (event) => {
    setAvailable(event.target.value);
  };

  const handleChange1 = (event) => {
    setCategory(event.target.value);
  };
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Grid style={{marginTop: 50}}>
        <Paper
          elevation={10}
          className={classes.paperStyle}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            name="username"
            {...register("username")}
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            name="password"
            {...register("password")}
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.btnStyle}
            fullWidth
            component={Link}
            to="/adashboard"
          >
            Sign in
          </Button>
          <Typography>
            <Link to="/forgot">Forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
