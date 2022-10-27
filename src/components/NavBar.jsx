import React from "react";
import ButtonSizes from "./utils/NavButton";
import CartWidget from "./utils/Cartwidget";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logoContainer">
          <h1 className="logo1">Cripto</h1>
          <h1 className="logo2">Bar</h1>
        </div>
        <div className="navButtons">
          <ButtonSizes name="Nosotros" />
          <ButtonSizes name="Productos" />
          <ButtonSizes name="Reservas" />
        </div>
        <div className="cartIcon">
          <CartWidget cantidad="3" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
