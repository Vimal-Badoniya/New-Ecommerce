import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Brand from "./Brand";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";

function RootUI() {
  const [isCart, setCart] = useState(false);
  const [isFooter, setFooter] = useState(false);
  const showCartHandler = () => {
    setCart(true);
    setFooter(false);
  };
  const hideCartHandler = () => {
    setCart(false);
    setFooter(true);
  };
  const logoutHandler = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <Header onCart={showCartHandler} onLogout={logoutHandler} />
      {isCart && <Cart onCartClose={hideCartHandler}></Cart>}
      <Brand />
      <Outlet />
      {isFooter && <Footer />}
    </React.Fragment>
  );
}

export default React.memo(RootUI);
