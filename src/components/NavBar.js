import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1>Bibliotheca</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">My Books</NavLink>
      <input type="text"></input>
      <button>Search</button>
    </nav>
  )
}

export default NavBar;