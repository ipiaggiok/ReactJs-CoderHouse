import React from "react";
import ButtonSizes from "./NavButton";
import CartWidget from "./Cartwidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  let disableStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <div className="navbar">
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <div className="logoContainer">
            <h1 className="logo1">Cripto</h1>
            <h1 className="logo2">Bar</h1>
          </div>
        </NavLink>
        <div className="navButtons">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : disableStyle)}
          >
            <ButtonSizes name="Inicio" />
          </NavLink>
          <NavLink
            to="/category/3"
            style={({ isActive }) => (isActive ? activeStyle : disableStyle)}
          >
            <ButtonSizes name="Cervezas" />
          </NavLink>
          <NavLink
            to="/category/5"
            style={({ isActive }) => (isActive ? activeStyle : disableStyle)}
          >
            <ButtonSizes name="Aperitivos" />
          </NavLink>
          <NavLink
            to="/category/4"
            style={({ isActive }) => (isActive ? activeStyle : disableStyle)}
          >
            <ButtonSizes name="Vinos" />
          </NavLink>
        </div>
        <div className="cartIcon">
          <CartWidget cantidad="3" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
