import React from "react";
import "./navbar.scss";
const NavBar = () => {
  return (
    <div className="nav-bar flex align-center justify-between">
      <div className="logo" />
      <h1 className="fl-1 text-center primary-font">Smart Dashboard</h1>
      <p className="primary-font">Sign Out</p>
    </div>
  );
};

export default NavBar;
