import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="main-nav">
      <div className="logo-container"></div>
      <span>Pokorski Bartek</span>
      <i
        className="fa-solid fa-bars"
        id="burger"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li className="menu-item">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/past-collaborations" onClick={() => setMenuOpen(false)}>
            Past Collaborations
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/on-youtube" onClick={() => setMenuOpen(false)}>
            On YouTube
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
