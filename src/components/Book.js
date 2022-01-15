import React from "react";

const Book = ({ author, bookImage, bookBuyLink, description, publisher, title }) => {
  // console.log('author', author, 'image', bookImage, 'link', bookBuyLink, 'description', description, 'publisher', publisher, 'title', title)
  return (
    <section>
      <img src={bookImage} alt='Book cover'></img>
      <div>
        <h2>{title}</h2>
        <p>By {author}</p>
      </div>
    </section>
  )
}

export default Book;