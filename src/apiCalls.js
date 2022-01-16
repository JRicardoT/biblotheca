const getBooks = () => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/combined-print-nonfiction.json?api-key=`)
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

// age_group: ""
// amazon_product_url: "http://www.amazon.com/Lets-Explore-Diabetes-David-Sedaris/dp/0316154709?tag=NYTBSREV-20"
// article_chapter_link: ""
// asterisk: 0
// author: "David Sedaris"
// book_image: "https://storage.googleapis.com/du-prd/books/images/9780316125680.jpg"
// book_image_height: 193
// book_image_width: 128
// book_review_link: "https://www.nytimes.com/2013/05/15/books/lets-explore-diabetes-with-owls-by-david-sedaris.html"
// book_uri: "nyt://book/a754eee3-4227-58c9-a48a-d5e6091d8e61"
// buy_links: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// contributor: "by David Sedaris"
// contributor_note: ""
// dagger: 0
// description: "A humorist returns with more wry takes on contemporary life."
// first_chapter_link: ""
// isbns: (3) [{…}, {…}, {…}]
// price: "0.00"
// primary_isbn10: "0316154695"
// primary_isbn13: "9780316154697"
// publisher: "Little, Brown"
// rank: 1
// rank_last_week: 0
// sunday_review_link: "https://www.nytimes.com/2013/05/19/books/review/lets-explore-diabetes-with-owls-by-david-sedaris.html"
// title: "LET'S EXPLORE DIABETES WITH OWLS"
// weeks_on_list: 0
// what a response looks like

export { getBooks }