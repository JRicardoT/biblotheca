import React from "react";
import Book from "./Book";
import "./BooksContainer.css"

const BooksContainer = ({ books, favoriteBook }) => {
  const booksToDisplay = books.map(book => {
    return (
      <Book 
        author={book.author}
        bookImage={book.book_image}
        title={book.title}
        id={book.title}
        key={book.title}
        favoriteBook={favoriteBook}
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