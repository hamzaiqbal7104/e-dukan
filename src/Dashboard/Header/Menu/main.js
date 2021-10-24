import React, { useState } from "react";
import Menu from "./menu";
import items from "../../../data/data";
import PopularItem from "./PopularItem";
import DealItems from "./DealItems";
import SideNav from "./SideNav";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Main() {
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
  return (
    <div>
      <SideNav />
      <PopularItem />
      <Menu items={menuItems} />
      <DealItems />
      <Menu items={menuItems} />
    </div>
  );
}

export default Main;
