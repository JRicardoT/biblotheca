import React from "react";
import { Link } from "react-router-dom";
import "./Book.css"

const Book = ({ author, bookImage, title, id }) => {

  return (
    <section className="book-section">
      <Link to={`/details/${id}`}><img className="book-cover" src={bookImage} alt='Book cover'></img></Link>
      <div className="book-title">
        <h2>{title}</h2>
        <p>By {author}</p>
      </div>
    </section>
  )
}

export default Book;