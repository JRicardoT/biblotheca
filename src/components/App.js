import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BooksContainer from "./BooksContainer";
import BookDetails from "./BookDetails";
import { getBooks } from "../apiCalls";
import { Route, Routes } from "react-router-dom";
import FavoriteBooks from "./FavoriteBooks";

const App = () => {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedBooks = localStorage.getItem('favoriteBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    getBooks()
    .then(data => setBooks(data.results.books))
  }, [])

  useEffect(() => {
    localStorage.setItem(`favoriteBooks`, JSON.stringify(favoriteBooks));
  }, [favoriteBooks])
  
  const favoriteBook = (bookId) => {
    const favBook = books.find(book => book.title === bookId);
    if(!favoriteBooks.includes(favBook)) {
      setFavoriteBooks([...favoriteBooks, favBook])
    }
  }

  const removeFavoriteBook = (bookId) => {
    const filteredFavoriteBooks = favoriteBooks.filter(book => book.title !== bookId);
    setFavoriteBooks(filteredFavoriteBooks);
  }
  
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<BooksContainer books={books} favoriteBook={favoriteBook} />} />
        <Route path='/details' element={<BookDetails books={books} />}>
          <Route path='/details/:id' element={<BookDetails />}/>
        </Route>
        <Route path='/favorite-books' element={<FavoriteBooks favoriteBooks={favoriteBooks} removeFavoriteBook={removeFavoriteBook}/>}/>
      </Routes>
    </main>
  );
}

export default App;
