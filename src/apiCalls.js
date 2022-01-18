const getBooks = (endPoint) => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${endPoint || 'combined-print-nonfiction'}.json?api-key=MFgFnfP7N2jFFaR5GYNLL5X6B00bK9jl`)
  .then(res => res.json())
}

export { getBooks }