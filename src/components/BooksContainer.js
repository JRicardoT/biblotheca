import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react/cjs/react.development";
import Book from "./Book";
import "./BooksContainer.css"

const BooksContainer = ({ books, favoriteBook, updateBooks }) => {
  const { id } = useParams();
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = async() => {
        const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=M4w0uEsAYWmqh4MueC7oRCv9eOIZbkkU`)
        const resJson = await res.json()
        console.log(resJson)
        if(resJson.status === 'ERROR') {
          return;
        } else if (resJson.status === 'OK') {
          setNewBooks(resJson.results.books);
          updateBooks(resJson.results.books)
        }
      }
      fetchData();
    }
  }, [id]);


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

  const booksToDisplayOnChange = newBooks.map(book => {
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
      {!newBooks.length ? booksToDisplay : booksToDisplayOnChange}
    </section>
  )
}

export default BooksContainer;