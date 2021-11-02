import {
  Button,
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { IoIosPersonAdd } from "react-icons/io";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    width: 800,
    margin: "0 auto",
  },
  headerStyle: {
    margin: 0,
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  marginTop: {
    margin: 5,
  },
  div: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "250px",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      width: "180px",
      height: "150px",
    },
  },
  maingrid: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5%",
    boxShadow: "0 5px 10px #777",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      marginTop: "2em",
    },
    width: "60%",
    marginTop: "3em",
  },
}));

function Signup() {
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
        <Paper elevation={10} className={classes.paperStyle}>
          <Grid align="center">
            <Avatar className={classes.avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 className={classes.headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField fullWidth label="Name" placeholder="Enter your name" />
            <TextField fullWidth label="Email" placeholder="Enter your email" />
            <FormControl component="fieldset" className={classes.marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <Button
              type="submit"
              variant="contained"
              component={Link}
              to="/login"
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
