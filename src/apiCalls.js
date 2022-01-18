const getBooks = (endPoint) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${endPoint || 'combined-print-nonfiction'}.json?api-key=`)
  // https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=
  .then(res => res.json())
}

// endpoints
// 'combined-print-and-e-Book-fiction' / fiction
// 'combined-print-and-e-book-nonfiction' / nonfiction
// 'audio-nonfiction' - audio
// 'childrens-middle-grade' - kids
// 'manga' - manga
// 'games-and-activities' - games & activities

export { getBooks }