import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import BooksContainer from './BooksContainer';
import BookDetails from './BookDetails';
import { getBooks } from '../apiCalls';
import { Route, Routes } from 'react-router-dom';
import FavoriteBooks from './FavoriteBooks';

const App = () => {

  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const storedBooks = localStorage.getItem('favoriteBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  // const [urlEndPoint, setUrlEndPoint] = useState();

  useEffect(() => {
    getBooks()
    .then(data => setBooks(data.results.books))
  }, [])

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

  const updateBooks = (newBooks) => {
    console.log("updating", newBooks)
    setBooks(newBooks)
  }

  // const displayHome = (endPoint) => {
  //   setUrlEndPoint(endPoint)
  // }
  
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<BooksContainer books={books} favoriteBook={favoriteBook} updateBooks={updateBooks}/>} >
          <Route path='/:id' element={<BooksContainer />}/>
          <Route path='/non-fiction/:id' element={<BooksContainer />}/>
          <Route path='/fiction/:id' element={<BooksContainer />}/>
          <Route path='/audio/:id' element={<BooksContainer />}/>
          <Route path='/kids/:id' element={<BooksContainer />}/>
          <Route path='/manga/:id' element={<BooksContainer />}/>
          <Route path='/games-activities/:id' element={<BooksContainer />}/>
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
