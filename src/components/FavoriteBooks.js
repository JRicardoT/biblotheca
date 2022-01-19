import React from "react";
import Book from "./Book";
import "./FavoriteBooks.css"
import propTypes from "prop-types";

const FavoriteBooks = ({ favoriteBooks, removeFavoriteBook }) => {

  const booksToDisplay = favoriteBooks.map(book => {
    const buttonDescription = 'Remove';

    return (
      <Book
        author={book.author}
        bookImage={book.book_image}
        title={book.title}
        id={book.title}
        key={book.title}
        buttonDescription={buttonDescription}
        favoriteOrUnfavoriteBook={removeFavoriteBook}
      />
    )
  });

  return (
    <section className="favorite-books-container">
      {favoriteBooks.length ? booksToDisplay: <p className="header-on-no-book">Add you favorite books here!</p>}
    </section>
  )
}

export default FavoriteBooks;

FavoriteBooks.propTypes = {
  favoriteBooks: propTypes.arrayOf(
    propTypes.object
  ),
  removeFavoriteBook: propTypes.func.isRequired
}