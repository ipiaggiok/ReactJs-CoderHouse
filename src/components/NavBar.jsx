import React from "react";
import ButtonSizes from "./NavButton";
import CartWidget from "./Cartwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link
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
        </Link>
        <div className="navButtons">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <ButtonSizes name="Inicio" />
          </Link>
          <Link
            to="/category/3"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ButtonSizes name="Cervezas" />
          </Link>
          <Link
            to="/category/5"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ButtonSizes name="Aperitivos" />
          </Link>
          <Link
            to="/category/4"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ButtonSizes name="Vinos" />
          </Link>
        </div>
        <div className="cartIcon">
          <CartWidget cantidad="3" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
