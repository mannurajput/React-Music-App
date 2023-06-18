import React from "react";
import navBarLogo from "./../assets/relevel.jpeg";
import searchLogo from "./../assets/search.svg";
import closeLogo from "./../assets/close.svg";

function Navbar({ handleSearch, clearSearch, searchValue }) {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img
            src={navBarLogo}
            className="d-inline-block align-top logo-image"
            alt="Logo"
          />

          <span className="logo-name">Relevel Trello</span>
        </a>
        {/* <i className="bi bi-search"></i>
         */}
        <div className="seach-bar-div">
          <img src={searchLogo} className="logo-icons" alt="search" />
          <input
            className="search-bar"
            type="text"
            onChange={handleSearch}
            value={searchValue}
          />
          <img
            src={closeLogo}
            className="logo-icons"
            alt="close"
            onClick={clearSearch}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
