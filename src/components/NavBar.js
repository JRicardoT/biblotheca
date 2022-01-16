import React from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="title-links">
        <h1>Bibliotheca</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">My Books</NavLink>       
      </div>
      <form className="search-bar-container">
        <input type="text"></input>
        <button className="submit-search">Search</button>
      </form>
    </nav>
  )
}

export default NavBar;