import React from "react";
import { useParams } from "react-router-dom";
import './BookDetails.css';
import propTypes from "prop-types";

const BookDetails = ({ books }) => {

  const { id } = useParams();
  const bookToDisplay = books.find(book => book.title === id);

  return (
    <section className="book-details">
      <h3>{bookToDisplay.title}</h3>
      <div className="cover-and-details">
        <img className="details-cover" src={bookToDisplay.book_image} alt="book-cover"></img>
        <div className="book-author-details">
          <h4>By {bookToDisplay.author}</h4>
          <p className="publisher">Publisher: {bookToDisplay.publisher}</p>
          <section className="Description">
            <h5>Description:</h5>
            <p>{bookToDisplay.description}</p>
          </section>
          <div>
            <a href={bookToDisplay.buy_links[0].url} target="_blank" rel="noreferrer"><button className="buy-book-button button-details">Buy Book</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;

BookDetails.propTypes = {
  books: propTypes.arrayOf(
    propTypes.object
  )
}