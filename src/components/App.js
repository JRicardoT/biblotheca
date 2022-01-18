import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import BooksContainer from "./BooksContainer";
import BookDetails from "./BookDetails";
import { getBooks } from "../apiCalls";
import { Route, Routes } from "react-router-dom";
import FavoriteBooks from "./FavoriteBooks";
import NonFictionContainer from "./NonFictionContainer";
// import { categories } from "../utils";

const App = () => {

  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedBooks = localStorage.getItem('favoriteBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  // const [url, setUrl] = useState(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-nonfiction.json?api-key=M4w0uEsAYWmqh4MueC7oRCv9eOIZbkkU`)
  // const [urlEndPoint, setUrlEndPoint] = useState(() => {
  //   const storedEndPoint = JSON.parse(localStorage.getItem('endPoint'));
  //   return storedEndPoint;
  // });
   const [urlEndPoint, setUrlEndPoint] = useState();

  // useEffect(() => {
  //   localStorage.setItem('endPoint', JSON.stringify(urlEndPoint));
  // }, [urlEndPoint])

  useEffect(() => {
    getBooks(urlEndPoint)
    .then(data => setBooks(data.results.books))
  }, [urlEndPoint])

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
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

  const updateBooks = (endPoint) => {
    // console.log(endPoint);
    setUrlEndPoint(endPoint);
  }

  const displayHome = (endPoint) => {
    // console.log(event.target.id)
    setUrlEndPoint(endPoint)
  }

  // const routeToCategories = categories.map(category => {
  //   return (
  //     <Route path={`/${category.name.toLowerCase()}`} element={<BooksContainer />} />
  //   )
  // });
  // console.log(books)
  console.log("hi")
  
  return (
    <main>
      <NavBar updateBooks={updateBooks} displayHome={displayHome} />
      <Routes>
        <Route path='/' element={<BooksContainer books={books} favoriteBook={favoriteBook} />} >
          <Route path='/non-fiction' element={<BooksContainer />}/>
          <Route path='/fiction' element={<BooksContainer />}/>
          <Route path='/audio' element={<BooksContainer />}/>
          <Route path='/kids' element={<BooksContainer />}/>
          <Route path='/manga' element={<BooksContainer />}/>
          <Route path='/games-activities' element={<BooksContainer />}/>
        </Route>
        <Route path='/details' element={<BookDetails books={books} />}>
          <Route path='/details/:id' element={<BookDetails />}/>
        </Route>
        <Route path='/favorite-books' element={<FavoriteBooks favoriteBooks={favoriteBooks} removeFavoriteBook={removeFavoriteBook} />}/>
      </Routes>
    </main>
  );
}

export default App;
