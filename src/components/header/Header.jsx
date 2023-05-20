import React from "react";
import "../header/header.css";
import logo from "../../assets/images/logos/logo_arepas_diana.png";

const Header = () => {
  return (
    <header>
      <img src={logo} className="header__logo" />
      <h1>BIENVENIDO A AREPAS DIANA</h1>
    </header>
  );
};

export default Header;
