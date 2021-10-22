import React from "react";
import HeaderComponent from "./Header/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import Header from "../Pages/Header";
function Admin() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderComponent />
    </BrowserRouter>
  );
}

export default Admin;
