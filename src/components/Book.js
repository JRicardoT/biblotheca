import React from "react";
import { Link } from "react-router-dom";
import "./Book.css"
import propTypes from "prop-types";

const Book = ({ bookImage, title, id, favoriteOrUnfavoriteBook, buttonDescription }) => {

  return (
    <section className='book-section' id={id}>
      <Link to={`/details/${id}`}><img className='book-cover' src={bookImage} alt='Book cover' /></Link>
      <div className='book-title'>
        <h2>{title}</h2>
      </div>
      <button onClick={event => favoriteOrUnfavoriteBook(event.target.parentElement.id)}>{buttonDescription}</button>
    </section>
  )
}

export default Book;

Book.propTypes = {
  bookImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  favoriteOrUnfavoriteBook: propTypes.func.isRequired,
  buttonDescription: propTypes.string.isRequired
}