import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BooksContainer from "./BooksContainer";
import { getBooks } from "../apiCalls";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect (() => {
    getBooks()
    .then(data => setBooks(data.results.books))
  }, [])

  console.log("outside of effect", books)
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<BooksContainer books={books}/>} />
        <Route path='/book-details' element={<BookDetails />}></Route>
      </Routes>
    </main>
  );
}

export default App;
