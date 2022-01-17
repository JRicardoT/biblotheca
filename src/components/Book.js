import React from "react";
import { Link } from "react-router-dom";
import "./Book.css"
// import heartIcon from '../assets/heart-icon.svg'

const Book = ({ author, bookImage, title, id, favoriteBook }) => {

  return (
    <section className='book-section' id={id}>
      {/* <img className='heart-icon' src={heartIcon} alt='heart-icon'/> */}
      <Link to={`/details/${id}`}><img className='book-cover' src={bookImage} alt='Book cover' /></Link>
      <div className='book-title'>
        <h2>{title}</h2>
        <p>By {author}</p>
      </div>
      <button onClick={event => favoriteBook(event.target.parentElement.id)}>Add to favorites</button>
    </section>
  )
}

export default Book;