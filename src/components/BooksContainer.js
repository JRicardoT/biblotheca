import React from "react";
import Book from "./Book";
import "./BooksContainer.css"

const BooksContainer = ({ books, favoriteBook }) => {
  console.log("hello");
  console.log(books)
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