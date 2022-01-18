const getBooks = (endPoint) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${endPoint || 'combined-print-nonfiction'}.json?api-key=M4w0uEsAYWmqh4MueC7oRCv9eOIZbkkU`)
  .then(res => res.json())
}

export { getBooks }