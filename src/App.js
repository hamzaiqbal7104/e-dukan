import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import Admin from "./AdminDashboard/Admin";
import Form from "./Form/Form";
import Login from "./Form/Login";
import Signup from "./Form/Signup";
import Store from "./Dashboard/Header/Store";
import Footer from "./Dashboard/Header/Pages/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/signin" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/store" exact component={Store} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
