import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css"

const Categories = () => {

  return (
    <ul className="category-links">
      <li className="link-list">
        <Link to='/non-fiction/combined-print-and-e-book-nonfiction' className="link-to-category" >Non-Fiction</Link>
      </li>
      <li className="link-list separator">
        <Link to='/fiction/combined-print-and-e-Book-fiction' className="link-to-category" >Fiction</Link>
      </li>
      <li className="link-list separator">
        <Link to='/audio/audio-nonfiction' className="link-to-category" >Audio</Link>
      </li>
      <li className="link-list separator">
        <Link to='/kids/childrens-middle-grade' className="link-to-category" >Kids</Link>
      </li>
      <li className="link-list separator">
        <Link to='/manga/manga' className="link-to-category" >Manga</Link>
      </li>
      <li className="link-list separator">
        <Link to='/games-activities/games-and-activities' className="link-to-category" >Games-Activities</Link>
      </li>
    </ul>
  )
}

export default Categories;