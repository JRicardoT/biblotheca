import React from "react";
import Book from "./Book";
import "./BooksContainer.css"
import propTypes from "prop-types";

const BooksContainer = ({ books, favoriteBook }) => {
  
  const booksToDisplay = books.map(book => {
    const buttonDescription = 'Add to Favorites'

    return (
      <Book 
        author={book.author}
        bookImage={book.book_image}
        title={book.title}
        id={book.title}
        key={book.title}
        buttonDescription={buttonDescription}
        favoriteOrUnfavoriteBook={favoriteBook}
      />
    )
  });
  
  return (
    <section className="books-container">
      {booksToDisplay}
    </section>
  )
}

export default BooksContainer;

BooksContainer.propTypes = {
  books: propTypes.arrayOf(
    propTypes.object
  )
}