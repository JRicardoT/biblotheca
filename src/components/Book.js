import React from "react";
import "./Book.css"

const Book = ({ author, bookImage, bookBuyLink, description, publisher, title }) => {
  // console.log('author', author, 'image', bookImage, 'link', bookBuyLink, 'description', description, 'publisher', publisher, 'title', title)
  return (
    <section className="book-section">
      <img className="book-cover" src={bookImage} alt='Book cover'></img>
      <div className="book-title">
        <h2>{title}</h2>
        <p>By {author}</p>
      </div>
    </section>
  )
}

export default Book;