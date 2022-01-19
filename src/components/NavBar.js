import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';
import propTypes from 'prop-types';

const NavBar = ({ updateBooks, displayHome }) => {
  return (
    <nav className='nav-bar'>
      <div className='title-links'>
        <NavLink to='/' id='combined-print-nonfiction' onClick={event => displayHome(event.target.id)} style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #416A59' : '',
          fontWeight: isActive ? 'bold' : '',
          fontSize: isActive ? '25px' : '24px',
          textDecoration: 'none',
          color: 'inherit'
        })}>Home</NavLink>
        <h1>Bibliotheca</h1>
        <NavLink to='/favorite-books' id='favoriteBooks' style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #416A59' : '',
          fontWeight: isActive ? 'bold' : '',
          fontSize: isActive ? '25px' : '24px',
          textDecoration: 'none',
          color: 'inherit'
        })}>Favorites</NavLink>       
      </div>
      <Categories updateBooks={updateBooks}/>
    </nav>
  )
}

export default NavBar;

NavBar.propTypes = {
  updateBooks: propTypes.func,
  displayHome: propTypes.func.isRequired
}