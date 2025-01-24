import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <nav id="main-nav">
      <div className="logo-container"></div>
      <span>Pokorski Bartek</span>
      <ul className="menu">
        <li className="menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/past-collaborations"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Past Collaborations
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/youtube"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            On YouTube
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
