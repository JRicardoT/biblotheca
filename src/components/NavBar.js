import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div className='title-links'>
        <NavLink to='/combined-print-nonfiction' style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #416A59' : '',
          fontWeight: isActive ? 'bold' : '',
          fontSize: isActive ? '25px' : '24px',
          textDecoration: 'none',
          color: 'inherit'
        })}>Home</NavLink>
        <h1>Bibliotheca</h1>
        <NavLink to='/favorite-books' style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #416A59' : '',
          fontWeight: isActive ? 'bold' : '',
          fontSize: isActive ? '25px' : '24px',
          textDecoration: 'none',
          color: 'inherit'
        })}>Favorites</NavLink>       
      </div>
      <Categories/>
    </nav>
  )
}

export default NavBar;