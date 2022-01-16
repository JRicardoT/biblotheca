import React from "react";
import Book from "./Book";
import "./BooksContainer.css"

const BooksContainer = ({ books }) => {
  const booksToDisplay = books.map(book => {
    return (
      <Book 
        author={book.author}
        bookImage={book.book_image}
        bookBuyLink={book.buy_links[0].url}
        description={book.description}
        publisher={book.publisher}
        title={book.title}
        id={book.title}
        key={book.title}
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