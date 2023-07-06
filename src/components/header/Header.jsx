import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import LightSpeed from "react-reveal/LightSpeed";

export const Header = ({ handleSearch }) => {
  function toggleSearchInputWidth() {
    let searchInput = document.querySelector(".searchinp");

      if(searchInput.style.width == "150px"){
        searchInput.style.width = "0px"
        searchInput.style.boxShadow="none"
      }else {
        searchInput.style.width = "150px"
        searchInput.style.boxShadow="inset 0px 0px 20px 0px #ff0000"
      }
  }

  return (
    <div className="header">
      <div className="nav">
        <LightSpeed left duration={1700}>
          <div className="dzax">
            <h1 className="hh">
              Movie<span className="hh">Time</span>
            </h1>
            <ul className="vochxarh">
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
             <a href="#sliderrrrrrrrr"> <li>Recommended</li></a>
             <a href="#au"> <li className="cooo">About Us</li></a>

            <a href="#gyago">  <li>Genre</li></a>
            </ul>
            <ul className="dropdownmenu">
              <li>
                <img
                  className="burger"
                  src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg"
                  alt=""
                />
                <ul id="submenu" className="ulikk">
                <Link to="/" className="link">
                <li>Home</li>
              </Link>
             <a href="#au"> <li>About Us</li></a>

            <a href="#gyago">  <li>Genre</li></a>
                </ul>
              </li>
            </ul>
          </div>
        </LightSpeed>
        <LightSpeed right duration={1700}>
          <ul className="iconul">
            <div className="inpdiv" id="inpdiv">
              <i
                id="fafa"
                onClick={toggleSearchInputWidth}
                className="fa fa-search"
              ></i>
              <input
                className="searchinp"
                type="search"
                placeholder="Search Film"
                onChange={handleSearch}
              />
            </div>

            <i id="fafa" className="fa fa-bell"></i>
            <i id="fafa" className="fa-solid fa-user-large"></i>
          </ul>
        </LightSpeed>
      </div>
    </div>
  );
};

export default Header;
