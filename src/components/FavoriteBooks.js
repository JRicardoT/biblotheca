import React from "react";
import Book from "./Book";

const FavoriteBooks = ({ favoriteBooks }) => {
  // const storedBooks = localStorage.getItem('favoriteBooks');
  console.log(favoriteBooks)
  const booksToDisplay = favoriteBooks.map(book => {
    return (
      <Book 
        author={book.author}
        bookImage={book.book_image}
        title={book.title}
        id={book.title}
        key={book.title}
      />
    )
  });

  return (
    <section>
      {booksToDisplay}
    </section>
  )
}

export default FavoriteBooks;