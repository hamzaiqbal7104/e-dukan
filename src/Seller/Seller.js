import React from "react";
import HeaderComponent from "./Header/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
function Seller() {
  return (
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );
}

export default Seller;
