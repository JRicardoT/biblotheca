import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = ({ books }) => {
  const bookId = useParams().id;
  const bookToDisplay = books.find(book => book.title === bookId);
  console.log(bookToDisplay);

  // author={book.author}
  // bookImage={book.book_image}
  // bookBuyLink={book.buy_links[0].url}
  // description={book.description}
  // publisher={book.publisher}
  // title={book.title}

  return (
    <section>
      <h3>{bookToDisplay.title}</h3>
      <img src={bookToDisplay.book_image} alt="book-cover"></img>
      <h4>By {bookToDisplay.author}</h4>
      <p>Publisher: {bookToDisplay.publisher}</p>
      <a href={bookToDisplay.buy_links[0].url} target="_blank" rel="noreferrer"><button className="buy-book-button">Buy Book</button></a>
      <h5>Description</h5>
      <p>{bookToDisplay.description}</p>
    </section>
  )
}

export default BookDetails;