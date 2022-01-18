import React from "react";
import Book from "./Book";
import "./BooksContainer.css"

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
    <section className="books-container">
      {booksToDisplay}
    </section>
  )
}

export default FavoriteBooks;