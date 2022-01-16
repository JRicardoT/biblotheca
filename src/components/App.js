import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BooksContainer from "./BooksContainer";
import { getBooks } from "../apiCalls";

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
      <BooksContainer books={books}/>
    </main>
  );
}

export default App;
