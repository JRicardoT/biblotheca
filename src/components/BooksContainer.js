import React from "react";

const BooksContainer = ({ books }) => {
  console.log(books)
  const booksToDisplay = books.map(books => {
    return (
      <Book />
    )
  });
  return (
    <section>
      hello
    </section>
  )
}

export default BooksContainer;