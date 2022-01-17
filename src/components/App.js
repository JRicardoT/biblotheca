import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BooksContainer from "./BooksContainer";
import BookDetails from "./BookDetails";
import { getBooks } from "../apiCalls";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    getBooks()
    .then(data => setBooks(data.results.books))
  }, [])

  console.log("outside of effect", books)
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<BooksContainer books={books} />} />
        <Route path='/details' element={<BookDetails books={books}/>}>
          <Route path='/details/:id' element={<BookDetails />}/>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
