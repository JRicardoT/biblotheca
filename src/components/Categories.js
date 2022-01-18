import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css"
import { categories } from "../utils";

const Categories = ({ updateBooks }) => {
  // const linksToCategories = categories.map(category => {
  //   return (
  //     <li key={category.endPoint}>
  //       <Link to={`/${category.name.toLowerCase()}`} onClick={() => updateBooks(category.endPoint)}>{category.name}</Link>
  //     </li>
  //   )
  // });

  return (
    <ul className="category-links">
      <li className="link-list">
        <Link to='/non-fiction' className="link-to-category" onClick={() => updateBooks('combined-print-and-e-book-nonfiction')}>Non-Fiction</Link>
      </li>
      <li className="link-list separator">
        <Link to='/fiction' className="link-to-category" onClick={() => updateBooks('combined-print-and-e-Book-fiction')}>Fiction</Link>
      </li>
      <li className="link-list separator">
        <Link to='/audio' className="link-to-category" onClick={() => updateBooks('audio-nonfiction')}>Audio</Link>
      </li>
      <li className="link-list separator">
        <Link to='/kids' className="link-to-category" onClick={() => updateBooks('childrens-middle-grade')}>Kids</Link>
      </li>
      <li className="link-list separator">
        <Link to='/manga' className="link-to-category" onClick={() => updateBooks('manga')}>Manga</Link>
      </li>
      <li className="link-list separator">
        <Link to='/games-activities' className="link-to-category" onClick={() => updateBooks('games-and-activities')}>Games-Activities</Link>
      </li>
    </ul>
  )
}

export default Categories;