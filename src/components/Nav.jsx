import React from "react";
import Logo from "../img/icon.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <span className="navbar-brand">
          <img
            id="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Weather App
        </span>
      </Link>
      <Link to={"/about"}>About</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
